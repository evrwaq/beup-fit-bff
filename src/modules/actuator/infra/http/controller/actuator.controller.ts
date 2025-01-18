import { Controller, Get, HttpStatus, Res } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

@ApiTags('Health check')
@Controller('actuator')
class ActuatorController {
  @Get('health')
  public healthCheck(@Res() res: Response): void {
    res.status(HttpStatus.OK).send()
  }
}

export { ActuatorController }
