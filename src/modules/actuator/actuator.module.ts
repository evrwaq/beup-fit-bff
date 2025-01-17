import { Module } from '@nestjs/common'
import { ActuatorController } from './infra/http/controller'

@Module({
  controllers: [ActuatorController],
})
class ActuatorModule {}

export { ActuatorModule }
