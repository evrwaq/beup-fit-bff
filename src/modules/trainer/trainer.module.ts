import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import {
  ExerciseRepository,
  TrainerRepository,
  UserRepository,
  UserWorkoutRepository,
} from 'infra/repository'
import {
  Exercise,
  exerciseSchema,
  Trainer,
  trainerSchema,
  User,
  userSchema,
  UserWorkout,
  userWorkoutSchema,
} from 'infra/schemas'
import { TrainerController } from './controller'
import { TrainerService } from './services'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Trainer.name, schema: trainerSchema },
      { name: User.name, schema: userSchema },
      { name: UserWorkout.name, schema: userWorkoutSchema },
      { name: Exercise.name, schema: exerciseSchema },
    ]),
  ],
  controllers: [TrainerController],
  providers: [
    TrainerService,
    TrainerRepository,
    UserRepository,
    UserWorkoutRepository,
    ExerciseRepository,
  ],
})
class TrainerModule {}

export { TrainerModule }
