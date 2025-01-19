/* eslint-disable max-params */
import { Injectable, NotFoundException } from '@nestjs/common'
import {
  ExerciseRepository,
  TrainerRepository,
  UserRepository,
  UserWorkoutRepository,
} from '../../../infra/repository'
import { GetUsersByTrainerResponseDTO } from '../dtos/response'
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
}

export { TrainerService }
