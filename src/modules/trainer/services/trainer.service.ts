/* eslint-disable require-atomic-updates */
/* eslint-disable functional/immutable-data */
/* eslint-disable max-params */
import { Injectable, NotFoundException } from '@nestjs/common'
import {
  ExerciseRepository,
  TrainerRepository,
  UserRepository,
  UserWorkoutRepository,
} from '../../../infra/repository'
import { UpdateUserWorkoutRequestDTO } from '../dtos'
import {
  GetTrainingsRespnseDTO,
  GetUsersByTrainerResponseDTO,
} from '../dtos/response'
import { GetUserWorkoutResponseDTO } from '../dtos/response/getUserWorkoutResponse.dto'

@Injectable()
class TrainerService {
  public constructor(
    private readonly trainerRepository: TrainerRepository,
    private readonly userRepository: UserRepository,
    private readonly userWorkoutRepository: UserWorkoutRepository,
    private readonly exerciseRepository: ExerciseRepository
  ) {}

  public async getUsersByTrainer(
    trainerId: string
  ): Promise<GetUsersByTrainerResponseDTO> {
    const trainer = await this.trainerRepository.findById(trainerId)
    if (!trainer) {
      throw new NotFoundException(`Trainer with id ${trainerId} not found`)
    }
    const users = await this.userRepository.findByIds(trainer.users)
    const usersResponse: GetUsersByTrainerResponseDTO = {
      users: users.map(user => ({
        id: user.id,
        name: user.name,
        age: user.age,
        goal: user.goal,
      })),
    }
    return usersResponse
  }

  public async getUserWorkout(
    trainerId: string,
    userId: string
  ): Promise<GetUserWorkoutResponseDTO> {
    const trainer = await this.trainerRepository.findById(trainerId)
    if (!trainer || !trainer.users.includes(userId)) {
      throw new NotFoundException(
        `Trainer ${trainerId} does not manage user ${userId} or does not exist`
      )
    }

    const user = await this.userRepository.findById(userId)
    if (!user) {
      throw new NotFoundException(`User ${userId} not found`)
    }

    const userWorkoutResponse =
      await this.userWorkoutRepository.findByUserId(userId)
    if (!userWorkoutResponse) {
      throw new NotFoundException(`Workout for user ${userId} not found`)
    }

    const workouts = await Promise.all(
      userWorkoutResponse.workouts.map(async workout => {
        const exerciseResponse = await this.exerciseRepository.findById(
          workout.exerciseId
        )
        const exercise = {
          exerciseId: workout.exerciseId,
          name: exerciseResponse.name,
          repetitions: workout.repetitions,
          weight: workout.weight,
          steps: workout.steps,
        }
        return exercise
      })
    )

    const userWorkout = {
      userId: user.id,
      userName: user.name,
      workouts,
    }

    return userWorkout
  }

  public async getAllTrainings(): Promise<GetTrainingsRespnseDTO[]> {
    const exercisesResponse = await this.exerciseRepository.findAll()
    const exercises = exercisesResponse.map(exercise => ({
      id: exercise.id,
      name: exercise.name,
    }))
    return exercises
  }

  public async updateUserWorkout(
    trainerId: string,
    userId: string,
    updateUserWorkoutDTO: UpdateUserWorkoutRequestDTO
  ): Promise<GetUserWorkoutResponseDTO> {
    const trainer = await this.trainerRepository.findById(trainerId)
    if (!trainer || !trainer.users.includes(userId)) {
      throw new NotFoundException(
        `Trainer ${trainerId} does not manage user ${userId}`
      )
    }

    const userWorkout = await this.userWorkoutRepository.findByUserId(userId)
    if (!userWorkout) {
      throw new NotFoundException(`Workout for user ${userId} not found`)
    }

    const user = await this.userRepository.findById(userId)
    if (!user) {
      throw new NotFoundException(`User ${userId} not found`)
    }

    const updatedWorkouts = updateUserWorkoutDTO.workouts.map(workout => {
      const existingWorkout = userWorkout.workouts.find(
        w => w.exerciseId === workout.exerciseId
      )
      if (existingWorkout) {
        const updatedWorkoutResponse = {
          ...existingWorkout,
          repetitions: workout.repetitions,
          weight: workout.weight,
          steps: workout.steps,
        }
        return updatedWorkoutResponse
      } else {
        return workout
      }
    })

    userWorkout.workouts = updatedWorkouts
    await userWorkout.save()

    const workouts = await Promise.all(
      userWorkout.workouts.map(async workout => {
        const exerciseResponse = await this.exerciseRepository.findById(
          workout.exerciseId
        )
        const exercise = {
          exerciseId: workout.exerciseId,
          name: exerciseResponse.name,
          repetitions: workout.repetitions,
          weight: workout.weight,
          steps: workout.steps,
        }
        return exercise
      })
    )

    const updatedUserWorkout = {
      userId: userWorkout.userId,
      userName: user.name,
      workouts,
    }

    return updatedUserWorkout
  }
}

export { TrainerService }
