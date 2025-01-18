import { Injectable } from '@nestjs/common'
import { WorkoutRepository } from 'infra/repository'
import { Workout } from 'infra/schemas'
import { CreateWorkoutDTO } from '../dtos/request'
import { WorkoutResponseDTO } from '../dtos/response'

@Injectable()
class WorkoutService {
  public constructor(private readonly workoutRepository: WorkoutRepository) {}

  public async addWorkout(
    createWorkoutDto: CreateWorkoutDTO
  ): Promise<WorkoutResponseDTO> {
    const workout: Workout =
      await this.workoutRepository.create(createWorkoutDto)
    const createdWorkout = {
      id: workout.id,
      name: workout.name,
      duration: workout.duration,
      description: workout.description,
      createdAt: workout.createdAt,
      updatedAt: workout.updatedAt,
    }
    return createdWorkout
  }
}

export { WorkoutService }
