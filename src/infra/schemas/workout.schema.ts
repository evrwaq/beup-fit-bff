import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema({ timestamps: true })
class Workout extends Document {
  @Prop({ required: true })
  public name: string

  @Prop({ required: true })
  public duration: number

  @Prop()
  public description?: string

  @Prop()
  public createdAt: Date

  @Prop()
  public updatedAt: Date
}

export const workoutSchema = SchemaFactory.createForClass(Workout)

export { Workout }
