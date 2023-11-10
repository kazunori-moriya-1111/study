import { Module } from '@nestjs/common';
import { ResultResolver } from './result.resolver';
import { ResultService } from './result.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ResultResolver, ResultService],
})
export class ResultModule {}
