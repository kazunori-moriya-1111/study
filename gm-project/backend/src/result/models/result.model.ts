import { Field, Int, ObjectType } from '@nestjs/graphql';
import { RaceGrade } from '@prisma/client';
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
  @Field(() => Int)
  firstPlace: number;

  @Field(() => Int)
  firstRacerRegistrationNumber: number;

  @Field()
  firstRacerName: string;

  // 2着
  @Field(() => Int)
  secondPlace: number;

  @Field(() => Int)
  secondRacerRegistrationNumber: number;

  @Field()
  secondRacerName: string;

  // 3着
  @Field(() => Int)
  thirdPlace: number;

  @Field(() => Int)
  thirdRacerRegistrationNumber: number;

  @Field()
  thirdRacerName: string;

  // 4着
  @Field(() => Int)
  fourthPlace: number;

  @Field(() => Int)
  fourthRacerRegistrationNumber: number;

  @Field()
  fourthRacerName: string;

  // 5着
  @Field(() => Int)
  fifthPlace: number;

  @Field(() => Int)
  fifthRacerRegistrationNumber: number;

  @Field()
  fifthRacerName: string;

  // 6着
  @Field(() => Int)
  sixthPlace: number;

  @Field(() => Int)
  sixthRacerRegistrationNumber: number;

  @Field()
  sixthRacerName: string;

  // 1コース
  @Field(() => Int)
  startFirstCourse: number;

  @Field(() => Int)
  startTimingFirstCourse: number;

  // 2コース
  @Field(() => Int)
  startSecondCourse: number;

  @Field(() => Int)
  startTimingSecondCourse: number;

  // 3コース
  @Field(() => Int)
  startThirdCourse: number;

  @Field(() => Int)
  startTimingThirdCourse: number;

  // 4コース
  @Field(() => Int)
  startFourthCourse: number;

  @Field(() => Int)
  startTimingFourthCourse: number;

  // 5コース
  @Field(() => Int)
  startFifthCourse: number;

  @Field(() => Int)
  startTimingFifthCourse: number;

  // 6コース
  @Field(() => Int)
  startSixthCourse: number;

  @Field(() => Int)
  startTimingSixthCourse: number;

  // 結果
  @Field(() => Int)
  sanrentanPrice: number;

  @Field(() => Int)
  sanrentanPopular: number;

  @Field(() => Int)
  sanrenpukuPrice: number;

  @Field(() => Int)
  sanrenpukuPopular: number;

  @Field(() => Int)
  nirentanPrice: number;

  @Field(() => Int)
  nirentanPopular: number;

  @Field(() => Int)
  nirenpukuPrice: number;

  @Field(() => Int)
  nirenpukuPopular: number;

  // 水面気象
  @Field(() => Int)
  temperature: number;

  @Field()
  weather: string;

  @Field(() => Int)
  wind: number;

  @Field()
  windDirection: string;

  @Field(() => Int)
  waterTemperature: number;

  @Field(() => Int)
  wave: number;

  @Field()
  url: string;

  // 備考
  @Field()
  return: string;

  @Field()
  decision: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
