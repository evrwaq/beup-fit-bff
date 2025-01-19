import { ApiProperty } from '@nestjs/swagger'

class WorkoutItemDTO {
  @ApiProperty({ example: 'exercise11', description: 'The ID of the exercise' })
  public exerciseId: string

  @ApiProperty({ example: 12, description: 'Number of repetitions' })
  public repetitions: number

  @ApiProperty({ example: 100, description: 'Weight for the exercise' })
  public weight: number

  @ApiProperty({ example: 4, description: 'Number of steps' })
  public steps: number
}

class AddUserWorkoutDTO {
  @ApiProperty({
    isArray: true,
    type: [WorkoutItemDTO],
    description: 'List of workouts to add',
    example: [
      {
        exerciseId: 'exercise10',
        repetitions: 15,
        weight: 90,
        steps: 3,
      },
      {
        exerciseId: 'exercise9',
        repetitions: 10,
        weight: 70,
        steps: 4,
      },
    ],
  })
  public workouts: WorkoutItemDTO[]
}

export { AddUserWorkoutDTO }
