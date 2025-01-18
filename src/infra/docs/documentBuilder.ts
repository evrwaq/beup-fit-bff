import { DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger'
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes'

const documentBuilderConfig = new DocumentBuilder()
  .setTitle('BeUpFit BFF')
  .setDescription('BeUpFit NestJS BFF')
  .setVersion('1.0')
  .build()

const theme = new SwaggerTheme()
const options: SwaggerCustomOptions = {
  customCss: theme.getBuffer(SwaggerThemeNameEnum.DARK),
  customSiteTitle: 'BeUpFit BFF',
}

export { documentBuilderConfig, options }
