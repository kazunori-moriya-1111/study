import { Injectable } from '@nestjs/common';
import { Result, RacerGrade } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ResultService {
  constructor(private readonly prismaService: PrismaService) {}

  async getResult(): Promise<Result[]> {
    return await this.prismaService.result.findMany();
  }
}
