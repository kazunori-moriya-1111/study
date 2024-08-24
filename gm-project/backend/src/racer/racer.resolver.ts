import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RacerService } from './racer.service';
import { Racer as RacerModel } from './models/racer.model';
import { Racer } from '@prisma/client';

@Resolver()
export class RacerResolver {
  constructor(private readonly racerService: RacerService) {}

  @Query(() => [RacerModel], { nullable: 'items' })
  async getRacers(): Promise<Racer[]> {
    return await this.racerService.getRacers();
  }

  @Query(() => RacerModel)
  async getRacer(
    @Args('registrationNumber', { type: () => Int }) registrationNumber: number,
  ): Promise<Racer> {
    return await this.racerService.getRacer(registrationNumber);
  }

  @Mutation(() => RacerModel)
  async insertRacer(
    @Args('registrationNumber', { type: () => Int }) registrationNumber: number,
  ): Promise<Racer> {
    return await this.racerService.insertRacer(registrationNumber);
  }
}
