import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
class AppController {
  public constructor(private readonly appService: AppService) {}

  @Get()
  public getHello(): string {
    const value = this.appService.getHello()
    return value
  }
}

export { AppController }
