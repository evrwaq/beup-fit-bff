import { Test, TestingModule } from '@nestjs/testing'
import { ActuatorController } from '../../../../../../src/modules/actuator'

describe('ActuatorController', () => {
  let controller: ActuatorController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActuatorController],
    }).compile()

    controller = module.get<ActuatorController>(ActuatorController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
