import { Injectable, NotFoundException } from '@nestjs/common'
import { TrainerRepository, UserRepository } from '../../../infra/repository'
import { GetUsersByTrainerResponseDTO } from '../dtos/response'

@Injectable()
class TrainerService {
  public constructor(
    private readonly trainerRepository: TrainerRepository,
    private readonly userRepository: UserRepository
  ) {}

  public async getUsersByTrainer(
    trainerId: string
  ): Promise<GetUsersByTrainerResponseDTO> {
    const trainer = await this.trainerRepository.findById(trainerId)
    if (!trainer) {
      throw new NotFoundException(`Trainer with id ${trainerId} not found`)
    }
    const users = await this.userRepository.findByIds(trainer.users)
    const usersResponse: GetUsersByTrainerResponseDTO = {
      users: users.map(user => ({
        id: user.id,
        name: user.name,
        age: user.age,
        goal: user.goal,
      })),
    }
    return usersResponse
  }
}

export { TrainerService }
