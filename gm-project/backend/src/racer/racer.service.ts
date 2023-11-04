import { Injectable } from '@nestjs/common';
import { Racer, RacerGrade } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import getRacerInfo from 'src/scraping/racer';

@Injectable()
export class RacerService {
  constructor(private readonly prismaService: PrismaService) {}

  async getRacers(): Promise<Racer[]> {
    return await this.prismaService.racer.findMany();
  }

  async insertRacer(registrationNumber: number): Promise<Racer> {
    // 登録番号を主軸にしたスクレイピング情報を取得
    const url: String = `https://www.boatrace.jp/owpc/pc/data/racersearch/profile?toban=${registrationNumber}`;
    const ta = new getRacerInfo();
    console.log(ta.scraping(2));
    const name: string = '池田浩二';
    const birthday: Date = new Date(2023, 1, 1);
    const height: number = 11;
    const weight: number = 11;
    const bloodType: string = 'A';
    const branch: string = '埼玉';
    const birthPlace: string = '埼玉';
    const registrationPeriod: number = 11;
    const racerGrade: RacerGrade = 'A1';
    return await this.prismaService.racer.create({
      data: {
        registrationNumber,
        name,
        birthday,
        height,
        weight,
        bloodType,
        branch,
        birthPlace,
        registrationPeriod,
        racerGrade,
      },
    });
  }
}
