import { Module } from '@nestjs/common';
import { RacerResolver } from './racer.resolver';
import { RacerService } from './racer.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [RacerResolver, RacerService],
})
export class RacerModule {}
