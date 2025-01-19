import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
class Trainer extends Document {
  @Prop({ required: true })
  public id: string

  @Prop({ required: true })
  public name: string

  @Prop({ required: true })
  public email: string

  @Prop({ type: [String], default: [] })
  public users: string[]
}

const trainerSchema = SchemaFactory.createForClass(Trainer)

export { Trainer, trainerSchema }
