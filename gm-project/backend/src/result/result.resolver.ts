import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
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

  @Mutation(() => ResultModel)
  // todo dto作成する
  async insertResult(
    @Args('raceNo', { type: () => Int }) raceNo: number,
    @Args('fieldName') fieldName: string,
    @Args('yyyymmdd') yyyymmdd: string,
  ): Promise<Result> {
    return await this.resultService.insertResult(raceNo, fieldName, yyyymmdd);
  }
}
