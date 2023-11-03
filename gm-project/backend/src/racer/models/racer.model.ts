import { Field, Int, ObjectType } from '@nestjs/graphql';
import { RacerGrade } from '@prisma/client';

@ObjectType()
export class Racer {
  @Field(() => Int)
  registrationNumber: number;

  @Field()
  birthday: Date;

  @Field(() => Int)
  height: number;

  @Field(() => Int)
  weight: number;

  @Field()
  bloodType: string;

  @Field()
  // 支部
  branch: string;

  @Field()
  // 出身地
  birthPlace: string;

  @Field(() => Int)
  // 登録機
  registrationPeriod: number;

  @Field()
  racerGrade: RacerGrade;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
