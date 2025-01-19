import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
class Exercise extends Document {
  @Prop({ required: true })
  public id: string

  @Prop({ required: true })
  public name: string
}

const exerciseSchema = SchemaFactory.createForClass(Exercise)

export { Exercise, exerciseSchema }
