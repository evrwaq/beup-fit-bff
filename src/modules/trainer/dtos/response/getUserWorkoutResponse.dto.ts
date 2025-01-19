import { ApiProperty } from '@nestjs/swagger'

class WorkoutDetailDTO {
  @ApiProperty({
    example: 'exercise1',
    description: 'The unique identifier for the exercise',
  })
  public exerciseId: string

  @ApiProperty({
    example: 'Leg Press',
    description: 'The name of the exercise',
  })
  public name: string

  @ApiProperty({ example: 12, description: 'Number of repetitions' })
  public repetitions: number

  @ApiProperty({ example: 100, description: 'Weight for the exercise' })
  public weight: number

  @ApiProperty({ example: 4, description: 'Number of steps in the exercise' })
  public steps: number
}

class GetUserWorkoutResponseDTO {
  @ApiProperty({
    example: 'user1',
    description: 'The unique identifier for the user',
  })
  public userId: string

  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  public userName: string

  @ApiProperty({
    isArray: true,
    type: [WorkoutDetailDTO],
    description: 'List of workouts for the user',
  })
  public workouts: WorkoutDetailDTO[]
}

export { GetUserWorkoutResponseDTO }
