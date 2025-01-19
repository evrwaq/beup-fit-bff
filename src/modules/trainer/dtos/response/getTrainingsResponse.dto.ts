import { ApiProperty } from '@nestjs/swagger'

class GetTrainingsRespnseDTO {
  @ApiProperty({
    example: 'exercise1',
    description: 'The unique identifier of the training',
  })
  public id: string

  @ApiProperty({
    example: 'Leg Press',
    description: 'The name of the training',
  })
  public name: string
}

export { GetTrainingsRespnseDTO }
