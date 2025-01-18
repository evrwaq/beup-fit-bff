import { Test, TestingModule } from '@nestjs/testing'
import { Response } from 'express'
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

  it('should return status 200 without body', () => {
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response

    controller.healthCheck(mockResponse)

    expect(mockResponse.status).toHaveBeenCalledWith(200)
    expect(mockResponse.send).toHaveBeenCalled()
  })
})
