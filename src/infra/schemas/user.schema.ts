import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
class User extends Document {
  @Prop({ required: true })
  public id: string

  @Prop({ required: true })
  public name: string

  @Prop({ required: true })
  public email: string

  @Prop({ required: true })
  public age: number

  @Prop({ required: true })
  public goal: string
}

const userSchema = SchemaFactory.createForClass(User)

export { User, userSchema }
