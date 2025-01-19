import { Body, Controller, Get, Param, Patch } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { UpdateUserWorkoutRequestDTO } from '../dtos'
import {
  GetTrainingsRespnseDTO,
  GetUsersByTrainerResponseDTO,
} from '../dtos/response'
import { GetUserWorkoutResponseDTO } from '../dtos/response/getUserWorkoutResponse.dto'
import { TrainerService } from '../services'

@ApiTags('Trainer')
@Controller('trainers')
class TrainerController {
  public constructor(private readonly trainerService: TrainerService) {}

  @Get(':id/users')
  @ApiResponse({
    description: 'List of users managed by the trainer',
    type: GetUsersByTrainerResponseDTO,
  })
  public async listUsersByTrainer(
    @Param('id') trainerId: string
  ): Promise<GetUsersByTrainerResponseDTO> {
    const response = this.trainerService.getUsersByTrainer(trainerId)
    return response
  }

  @Get(':trainerId/users/:userId/workout')
  @ApiResponse({
    description: 'Get the current workout of a user as viewed by a trainer',
    type: GetUserWorkoutResponseDTO,
  })
  public async getUserWorkout(
    @Param('trainerId') trainerId: string,
    @Param('userId') userId: string
  ): Promise<GetUserWorkoutResponseDTO> {
    const userWorkout = this.trainerService.getUserWorkout(trainerId, userId)
    return userWorkout
  }

  @Patch(':trainerId/users/:userId/workout')
  @ApiResponse({
    description: 'Update the workout of a user',
    type: GetUserWorkoutResponseDTO,
  })
  public async updateUserWorkout(
    @Param('trainerId') trainerId: string,
    @Param('userId') userId: string,
    @Body() updateUserWorkoutDTO: UpdateUserWorkoutRequestDTO
  ): Promise<GetUserWorkoutResponseDTO> {
    const updatedUserWorkout = this.trainerService.updateUserWorkout(
      trainerId,
      userId,
      updateUserWorkoutDTO
    )
    return updatedUserWorkout
  }

  @Get('exercises')
  @ApiResponse({
    description: 'List all available trainings',
    type: [GetTrainingsRespnseDTO],
  })
  public async getAllTrainings(): Promise<GetTrainingsRespnseDTO[]> {
    const trainings = this.trainerService.getAllTrainings()
    return trainings
  }
}

export { TrainerController }
