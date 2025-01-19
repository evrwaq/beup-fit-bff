import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Trainer } from '../schemas'

@Injectable()
class TrainerRepository {
  public constructor(
    @InjectModel(Trainer.name) private readonly trainerModel: Model<Trainer>
  ) {}

  public async findById(trainerId: string): Promise<Trainer | null> {
    const trainer = this.trainerModel.findOne({ id: trainerId }).exec()
    return trainer
  }
}

export { TrainerRepository }
