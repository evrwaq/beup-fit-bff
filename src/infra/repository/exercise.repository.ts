import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Exercise } from '../schemas'

@Injectable()
class ExerciseRepository {
  public constructor(
    @InjectModel(Exercise.name) private readonly exerciseModel: Model<Exercise>
  ) {}

  public async findById(exerciseId: string): Promise<Exercise | null> {
    const exercise = this.exerciseModel.findOne({ id: exerciseId }).exec()
    return exercise
  }
}

export { ExerciseRepository }
