import { Body, Controller, Post } from '@nestjs/common'
import { CreateWorkoutDTO } from '../dtos/request'
import { WorkoutResponseDTO } from '../dtos/response'
import { WorkoutService } from '../services'

@Controller('workouts')
class WorkoutController {
  public constructor(private readonly workoutService: WorkoutService) {}

  @Post()
  public async addWorkout(
    @Body() createWorkoutDto: CreateWorkoutDTO
  ): Promise<WorkoutResponseDTO> {
    const response = this.workoutService.addWorkout(createWorkoutDto)
    return response
  }
}

export { WorkoutController }
