import { ApiProperty } from '@nestjs/swagger'

class WorkoutUpdateDTO {
  @ApiProperty({ example: 'exercise1', description: 'The ID of the exercise' })
  public exerciseId: string

  @ApiProperty({ example: 12, description: 'Number of repetitions' })
  public repetitions: number

  @ApiProperty({ example: 100, description: 'Weight for the exercise' })
  public weight: number

  @ApiProperty({ example: 4, description: 'Number of steps' })
  public steps: number
}

class UpdateUserWorkoutRequestDTO {
  @ApiProperty({
    isArray: true,
    type: [WorkoutUpdateDTO],
    description: 'List of workouts to update or add',
    example: {
      workouts: [
        {
          exerciseId: 'exercise1',
          repetitions: 15,
          weight: 120,
          steps: 5,
        },
        {
          exerciseId: 'exercise4',
          repetitions: 12,
          weight: 80,
          steps: 4,
        },
      ],
    },
  })
  public workouts: WorkoutUpdateDTO[]
}

export { UpdateUserWorkoutRequestDTO }
