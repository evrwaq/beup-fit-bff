import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

class Workout {
  @Prop({ required: true })
  public exerciseId: string

  @Prop({ required: true })
  public repetitions: number

  @Prop({ required: true })
  public weight: number

  @Prop({ required: true })
  public steps: number
}

@Schema({ collection: 'userWorkouts' })
class UserWorkout extends Document {
  @Prop({ required: true })
  public id: string

  @Prop({ required: true })
  public userId: string

  @Prop({ type: [Workout], default: [] })
  public workouts: Workout[]
}

const userWorkoutSchema = SchemaFactory.createForClass(UserWorkout).set(
  'collection',
  'userWorkouts'
)

export { UserWorkout, userWorkoutSchema }
