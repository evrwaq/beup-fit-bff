import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
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
}

export { UserWorkoutRepository }
