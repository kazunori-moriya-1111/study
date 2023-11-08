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
    const gRI = new getRacerInfo();
    const {
      name,
      nameKana,
      birthday,
      height,
      weight,
      bloodType,
      branch,
      birthPlace,
      registrationPeriod,
      racerGrade,
    } = await gRI.scraping(registrationNumber);

    return await this.prismaService.racer.create({
      data: {
        registrationNumber,
        name,
        nameKana,
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
