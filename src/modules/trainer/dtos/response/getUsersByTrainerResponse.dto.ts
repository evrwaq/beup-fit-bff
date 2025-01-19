import { ApiProperty } from '@nestjs/swagger'

class User {
  @ApiProperty({
    example: 'user1',
    description: 'Unique identifier for the user',
  })
  public id: string

  @ApiProperty({ example: 'John Doe', description: 'Name of the user' })
  public name: string

  @ApiProperty({ example: 18, description: 'Age of the user' })
  public age: number

  @ApiProperty({ example: 'Gain muscle mass', description: 'Goal of the user' })
  public goal: string
}

class GetUsersByTrainerResponseDTO {
  @ApiProperty({
    isArray: true,
    type: [User],
    description: 'List of users managed by the trainer',
  })
  public users: User[]
}

export { GetUsersByTrainerResponseDTO }
