import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from '../schemas'

@Injectable()
class UserRepository {
  public constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  public async findByIds(userIds: string[]): Promise<User[]> {
    const users = this.userModel.find({ id: { $in: userIds } }).exec()
    return users
  }

  public async findById(userId: string): Promise<User | null> {
    const user = this.userModel.findOne({ id: userId }).exec()
    return user
  }
}

export { UserRepository }
