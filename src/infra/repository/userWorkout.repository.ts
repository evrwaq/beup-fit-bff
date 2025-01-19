/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import { UserWorkout } from '../schemas'

@Injectable()
class UserWorkoutRepository {
  public constructor(
    @InjectModel(UserWorkout.name)
    private readonly userWorkoutModel: Model<UserWorkout>
  ) {}

  public async findByUserId(userId: string): Promise<UserWorkout | null> {
    const userWorkout = this.userWorkoutModel.findOne({ userId }).exec()
    return userWorkout
  }

  public async create(workout: {
    userId: string
    workouts: any[]
  }): Promise<UserWorkout> {
    const newWorkout = new this.userWorkoutModel({
      id: uuidv4(),
      ...workout,
    }).save()
    return newWorkout
  }
}

export { UserWorkoutRepository }
