import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ActuatorModule } from './modules/actuator'
import { WorkoutModule } from './modules/workout'

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27017/nest'
    ),
    ActuatorModule,
    WorkoutModule,
  ],
})
class AppModule {}

export { AppModule }
