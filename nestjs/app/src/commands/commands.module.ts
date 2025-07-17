import { Module } from '@nestjs/common';
import { ScheduleCommand } from './schedule.command';

@Module({
  imports: [],
  providers: [ScheduleCommand],
  exports: [],
})
export class CommandsModule {}
