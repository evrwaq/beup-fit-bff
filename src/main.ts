import { NestFactory } from '@nestjs/core'
import { SwaggerModule } from '@nestjs/swagger'
import { documentBuilderConfig, options } from 'infra/docs'
import { AppModule } from './app.module'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)
  const port = 3000

  app.enableCors()

  const document = SwaggerModule.createDocument(app, documentBuilderConfig)
  SwaggerModule.setup('/api', app, document, options)

  await app.listen(port)
}
bootstrap()
