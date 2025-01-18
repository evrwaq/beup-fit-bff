import { Module } from '@nestjs/common'
import { ActuatorModule } from './modules/actuator'

@Module({
  imports: [ActuatorModule],
})
class AppModule {}

export { AppModule }
