import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Workout } from 'infra/schemas'
import { CreateWorkoutDTO } from 'modules/workout/dtos/request'
import { Model } from 'mongoose'

@Injectable()
class WorkoutRepository {
  public constructor(
    @InjectModel(Workout.name) private readonly workoutModel: Model<Workout>
  ) {}

  public async create(createWorkoutDto: CreateWorkoutDTO): Promise<Workout> {
    const newWorkout = new this.workoutModel(createWorkoutDto).save()
    return newWorkout
  }
}

export { WorkoutRepository }
