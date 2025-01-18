import { Module } from '@nestjs/common'
import { ActuatorController } from './controller'

@Module({
  controllers: [ActuatorController],
})
class ActuatorModule {}

export { ActuatorModule }
