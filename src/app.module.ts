import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ActuatorModule } from './modules/actuator'
import { TrainerModule } from './modules/trainer'

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27017/nest'
    ),
    ActuatorModule,
    TrainerModule,
  ],
})
class AppModule {}

export { AppModule }
