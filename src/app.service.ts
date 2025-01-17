import { Injectable } from '@nestjs/common'

@Injectable()
class AppService {
  public getHello(): string {
    const value = 'Hello World!'
    return value
  }
}

export { AppService }
