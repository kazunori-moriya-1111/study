import { Query, Resolver } from '@nestjs/graphql';
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
}
