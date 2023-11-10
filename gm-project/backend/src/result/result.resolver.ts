import { Resolver, Query } from '@nestjs/graphql';
import { ResultService } from './result.service';
import { Result as ResultModel } from './models/result.model';
import { Result } from '@prisma/client';

@Resolver()
export class ResultResolver {
  constructor(private readonly resultService: ResultService) {}

  @Query(() => [ResultModel], { nullable: 'items' })
  async getResult(): Promise<Result[]> {
    return await this.resultService.getResult();
  }
}
