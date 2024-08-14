import { Field, Int, Float, ObjectType } from '@nestjs/graphql';
import { RaceGrade, DisqualificationFlag } from '@prisma/client';
import { GraphQLDate } from 'graphql-scalars';

@ObjectType()
export class Result {
  @Field()
  fieldName: string;

  @Field(() => Int)
  fieldNo: number;

  @Field()
  raceGrade: RaceGrade;

  @Field(() => GraphQLDate)
  yyyymmdd: Date;

  //開催日
  @Field()
  raceEventDate: string;

  @Field(() => Int)
  raceNo: number;

  @Field()
  raceSeries: string;

  //例）準優勝戦 1800m, winwin5
  @Field()
  raceTitle: string;

  //例）安定版使用
  @Field()
  raceLabel: string;

  // 1着
  @Field(() => Int, { nullable: true })
  firstPlace: number;

  @Field(() => Int, { nullable: true })
  firstRacerRegistrationNumber: number;

  @Field({ nullable: true })
  firstRacerName: string;

  @Field({ nullable: true })
  firstRacerDisqualification: DisqualificationFlag;
  // 2着
  @Field(() => Int, { nullable: true })
  secondPlace: number;

  @Field(() => Int, { nullable: true })
  secondRacerRegistrationNumber: number;

  @Field({ nullable: true })
  secondRacerName: string;

  // 3着
  @Field(() => Int, { nullable: true })
  thirdPlace: number;

  @Field(() => Int, { nullable: true })
  thirdRacerRegistrationNumber: number;

  @Field({ nullable: true })
  thirdRacerName: string;

  // 4着
  @Field(() => Int, { nullable: true })
  fourthPlace: number;

  @Field(() => Int, { nullable: true })
  fourthRacerRegistrationNumber: number;

  @Field({ nullable: true })
  fourthRacerName: string;

  // 5着
  @Field(() => Int, { nullable: true })
  fifthPlace: number;

  @Field(() => Int, { nullable: true })
  fifthRacerRegistrationNumber: number;

  @Field({ nullable: true })
  fifthRacerName: string;

  // 6着
  @Field(() => Int, { nullable: true })
  sixthPlace: number;

  @Field(() => Int, { nullable: true })
  sixthRacerRegistrationNumber: number;

  @Field({ nullable: true })
  sixthRacerName: string;

  // 1コース
  @Field(() => Int, { nullable: true })
  startFirstCourse: number;

  @Field({ nullable: true })
  startTimingFirstCourse: string;

  // 2コース
  @Field(() => Int, { nullable: true })
  startSecondCourse: number;

  @Field({ nullable: true })
  startTimingSecondCourse: string;

  // 3コース
  @Field(() => Int, { nullable: true })
  startThirdCourse: number;

  @Field({ nullable: true })
  startTimingThirdCourse: string;

  // 4コース
  @Field(() => Int, { nullable: true })
  startFourthCourse: number;

  @Field({ nullable: true })
  startTimingFourthCourse: string;

  // 5コース
  @Field(() => Int, { nullable: true })
  startFifthCourse: number;

  @Field({ nullable: true })
  startTimingFifthCourse: string;

  // 6コース
  @Field(() => Int, { nullable: true })
  startSixthCourse: number;

  @Field({ nullable: true })
  startTimingSixthCourse: string;

  // 結果
  @Field(() => Int, { nullable: true })
  sanrentanPrice: number;

  @Field(() => Int, { nullable: true })
  sanrentanPopular: number;

  @Field(() => Int, { nullable: true })
  sanrenpukuPrice: number;

  @Field(() => Int, { nullable: true })
  sanrenpukuPopular: number;

  @Field(() => Int, { nullable: true })
  nirentanPrice: number;

  @Field(() => Int, { nullable: true })
  nirentanPopular: number;

  @Field(() => Int, { nullable: true })
  nirenpukuPrice: number;

  @Field(() => Int, { nullable: true })
  nirenpukuPopular: number;

  // 水面気象
  @Field(() => Float, { nullable: true })
  temperature: number;

  @Field({ nullable: true })
  weather: string;

  @Field(() => Int, { nullable: true })
  wind: number;

  @Field({ nullable: true })
  windDirection: string;

  @Field(() => Float, { nullable: true })
  waterTemperature: number;

  @Field(() => Int, { nullable: true })
  wave: number;

  @Field({ nullable: true })
  url: string;

  // 備考
  @Field({ nullable: true })
  return_boat: string;

  @Field({ nullable: true })
  decision: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
