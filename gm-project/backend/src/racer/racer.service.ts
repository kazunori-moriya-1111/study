import { Injectable } from '@nestjs/common';
import { Racer } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RacerService {
  constructor(private readonly prismaService: PrismaService) {}

  async getRacers(): Promise<Racer[]> {
    return await this.prismaService.racer.findMany();
  }
}
