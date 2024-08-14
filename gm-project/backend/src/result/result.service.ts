import { Injectable } from '@nestjs/common';
import { Result } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import insertResult from 'src/scraping/result';
import { dict } from './fieldNameTofieldNo';

@Injectable()
export class ResultService {
  constructor(private readonly prismaService: PrismaService) {}

  async getResult(): Promise<Result[]> {
    return await this.prismaService.result.findMany();
  }

  async insertResult(raceNo: number, fieldName: string, yyyymmdd: string): Promise<Result> {
    const iR = new insertResult();
    const fieldNo: string = dict[fieldName].toString().padStart(2, '0');
    const yyyymmdd_list = yyyymmdd.match(/.{1,4}/g);
    const yyyy: number = Number(yyyymmdd_list[0]);
    const mm: number = Number(yyyymmdd_list[1].match(/.{1,2}/g)[0]);
    const dd: number = Number(yyyymmdd_list[1].match(/.{1,2}/g)[1]);
    const {
      raceGrade,
      raceEventDate,
      raceTitle,
      raceLabel,
      firstPlace,
      firstRacerRegistrationNumber,
      firstRacerName,
      firstRacerDisqualification,
      secondPlace,
      secondRacerRegistrationNumber,
      secondRacerName,
      secondRacerDisqualification,
      thirdPlace,
      thirdRacerRegistrationNumber,
      thirdRacerName,
      thirdRacerDisqualification,
      fourthPlace,
      fourthRacerRegistrationNumber,
      fourthRacerName,
      fourthRacerDisqualification,
      fifthPlace,
      fifthRacerRegistrationNumber,
      fifthRacerName,
      fifthRacerDisqualification,
      sixthPlace,
      sixthRacerRegistrationNumber,
      sixthRacerName,
      sixthRacerDisqualification,
      startFirstCourse,
      startTimingFirstCourse,
      startSecondCourse,
      startTimingSecondCourse,
      startThirdCourse,
      startTimingThirdCourse,
      startFourthCourse,
      startTimingFourthCourse,
      startFifthCourse,
      startTimingFifthCourse,
      startSixthCourse,
      startTimingSixthCourse,
      sanrentanPrice,
      sanrentanPopular,
      sanrenpukuPrice,
      sanrenpukuPopular,
      nirentanPrice,
      nirentanPopular,
      nirenpukuPrice,
      nirenpukuPopular,
      temperature,
      weather,
      wind,
      windDirection,
      waterTemperature,
      wave,
      url,
      return_boat,
      decision,
    } = await iR.scraping(raceNo, fieldNo, yyyymmdd);
    return await this.prismaService.result.create({
      data: {
        fieldName: fieldName,
        fieldNo: Number(fieldNo),
        raceGrade: raceGrade,
        yyyymmdd: new Date(yyyy, mm, dd),
        //開催日
        raceEventDate: raceEventDate,
        raceNo: raceNo,
        raceSeries: '',
        //例）準優勝戦 1800m, winwin5
        raceTitle: raceTitle,
        //例）安定版使用
        raceLabel: raceLabel,
        // 1着
        firstPlace: Number(firstPlace),
        firstRacerRegistrationNumber: Number(firstRacerRegistrationNumber),
        firstRacerName: firstRacerName,
        firstRacerDisqualification: firstRacerDisqualification,
        // 2着
        secondPlace: Number(secondPlace),
        secondRacerRegistrationNumber: Number(secondRacerRegistrationNumber),
        secondRacerName: secondRacerName,
        secondRacerDisqualification: secondRacerDisqualification,
        // 3着
        thirdPlace: Number(thirdPlace),
        thirdRacerRegistrationNumber: Number(thirdRacerRegistrationNumber),
        thirdRacerName: thirdRacerName,
        thirdRacerDisqualification: thirdRacerDisqualification,
        // 4着
        fourthPlace: Number(fourthPlace),
        fourthRacerRegistrationNumber: Number(fourthRacerRegistrationNumber),
        fourthRacerName: fourthRacerName,
        fourthRacerDisqualification: fourthRacerDisqualification,
        // 5着
        fifthPlace: Number(fifthPlace),
        fifthRacerRegistrationNumber: Number(fifthRacerRegistrationNumber),
        fifthRacerName: fifthRacerName,
        fifthRacerDisqualification: fifthRacerDisqualification,
        // 6着
        sixthPlace: Number(sixthPlace),
        sixthRacerRegistrationNumber: Number(sixthRacerRegistrationNumber),
        sixthRacerName: sixthRacerName,
        sixthRacerDisqualification: sixthRacerDisqualification,
        // 1コース
        startFirstCourse: Number(startFirstCourse),
        startTimingFirstCourse: startTimingFirstCourse,
        // 2コース
        startSecondCourse: Number(startSecondCourse),
        startTimingSecondCourse: startTimingSecondCourse,
        // 3コース
        startThirdCourse: Number(startThirdCourse),
        startTimingThirdCourse: startTimingThirdCourse,
        // 4コース
        startFourthCourse: Number(startFourthCourse),
        startTimingFourthCourse: startTimingFourthCourse,
        // 5コース
        startFifthCourse: Number(startFifthCourse),
        startTimingFifthCourse: startTimingFifthCourse,
        // 6コース
        startSixthCourse: Number(startSixthCourse),
        startTimingSixthCourse: startTimingSixthCourse,
        // 結果
        sanrentanPrice: Number(sanrentanPrice),
        sanrentanPopular: Number(sanrentanPopular),
        sanrenpukuPrice: Number(sanrenpukuPrice),
        sanrenpukuPopular: Number(sanrenpukuPopular),
        nirentanPrice: Number(nirentanPrice),
        nirentanPopular: Number(nirentanPopular),
        nirenpukuPrice: Number(nirenpukuPrice),
        nirenpukuPopular: Number(nirenpukuPopular),
        // 水面気象
        temperature: parseFloat(temperature),
        weather: weather,
        wind: Number(wind),
        windDirection: windDirection,
        waterTemperature: parseFloat(waterTemperature),
        wave: Number(wave),
        url: url,
        // 備考
        return_boat: return_boat,
        decision: decision,
      },
    });
  }
}
