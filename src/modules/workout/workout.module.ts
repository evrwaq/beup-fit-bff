import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { WorkoutRepository } from 'infra/repository'
import { Workout, workoutSchema } from 'infra/schemas'
import { WorkoutController } from './controller'
import { WorkoutService } from './services'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Workout.name, schema: workoutSchema }]),
  ],
  controllers: [WorkoutController],
  providers: [WorkoutService, WorkoutRepository],
})
class WorkoutModule {}

export { WorkoutModule }
