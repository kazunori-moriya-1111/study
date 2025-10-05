import { Module } from '@nestjs/common';
import { ScheduleCommand } from './schedule.command';
import { RecelistCommand } from './racelist.command';
import { StudyCommand } from './study.command';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  imports: [PrismaModule, LoggerModule],
  providers: [ScheduleCommand, RecelistCommand, StudyCommand],
  exports: [ScheduleCommand, RecelistCommand, StudyCommand],
})
export class CommandsModule {}
