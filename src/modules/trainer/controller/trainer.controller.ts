import { Controller, Get, Param } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { GetUsersByTrainerResponseDTO } from '../dtos/response'
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
}

export { TrainerController }
