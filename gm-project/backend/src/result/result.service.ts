import { Injectable } from '@nestjs/common';
import { Result } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import insertResult from 'src/scraping/result';

@Injectable()
export class ResultService {
  constructor(private readonly prismaService: PrismaService) {}

  async getResult(): Promise<Result[]> {
    return await this.prismaService.result.findMany();
  }

  async insertResult(): Promise<Result> {
    const iR = new insertResult();
    iR.scraping(1);
    return await this.prismaService.result.create({
      data: {
        fieldName: '常滑',
        fieldNo: 10,
        raceGrade: 'SG',
        yyyymmdd: new Date(2023, 11, 11),
        //開催日
        raceEventDate: '2日',
        raceNo: 1,
        raceSeries: '',
        //例）準優勝戦 1800m, winwin5
        raceTitle: 'winwin5',
        //例）安定版使用
        raceLabel: '安定版使用',
        // 1着
        firstPlace: 1,
        firstRacerRegistrationNumber: 1,
        firstRacerName: '池田浩二',
        // 2着
        secondPlace: 1,
        secondRacerRegistrationNumber: 1,
        secondRacerName: '池田浩二',
        // 3着
        thirdPlace: 1,
        thirdRacerRegistrationNumber: 1,
        thirdRacerName: '池田浩二',
        // 4着
        fourthPlace: 1,
        fourthRacerRegistrationNumber: 1,
        fourthRacerName: '池田浩二',
        // 5着
        fifthPlace: 1,
        fifthRacerRegistrationNumber: 1,
        fifthRacerName: '池田浩二',
        // 6着
        sixthPlace: 1,
        sixthRacerRegistrationNumber: 1,
        sixthRacerName: '池田浩二',
        // 1コース
        startFirstCourse: 1,
        startTimingFirstCourse: 1,
        // 2コース
        startSecondCourse: 1,
        startTimingSecondCourse: 1,
        // 3コース
        startThirdCourse: 1,
        startTimingThirdCourse: 1,
        // 4コース
        startFourthCourse: 1,
        startTimingFourthCourse: 1,
        // 5コース
        startFifthCourse: 1,
        startTimingFifthCourse: 1,
        // 6コース
        startSixthCourse: 1,
        startTimingSixthCourse: 1,
        // 結果
        sanrentanPrice: 1,
        sanrentanPopular: 1,
        sanrenpukuPrice: 1,
        sanrenpukuPopular: 1,
        nirentanPrice: 1,
        nirentanPopular: 1,
        nirenpukuPrice: 1,
        nirenpukuPopular: 1,
        // 水面気象
        temperature: 1,
        weather: '晴れ',
        wind: 1,
        windDirection: '北',
        waterTemperature: 1,
        wave: 1,
        url: 'http',
        // 備考
        return: '返還艇あり',
        decision: '差し',
      },
    });
  }
}
