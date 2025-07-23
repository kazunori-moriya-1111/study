import { Module } from '@nestjs/common';
import { ScheduleCommand } from './schedule.command';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  imports: [PrismaModule, LoggerModule],
  providers: [ScheduleCommand],
  exports: [ScheduleCommand],
})
export class CommandsModule {}
