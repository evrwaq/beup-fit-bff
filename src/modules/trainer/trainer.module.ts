import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TrainerRepository, UserRepository } from 'infra/repository'
import { Trainer, trainerSchema, User, userSchema } from 'infra/schemas'
import { TrainerController } from './controller'
import { TrainerService } from './services'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Trainer.name, schema: trainerSchema },
      { name: User.name, schema: userSchema },
    ]),
  ],
  controllers: [TrainerController],
  providers: [TrainerService, TrainerRepository, UserRepository],
})
class TrainerModule {}

export { TrainerModule }
