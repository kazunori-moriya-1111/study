import { Module } from '@nestjs/common';
import { ScheduleCommand } from './schedule.command';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ScheduleCommand],
  exports: [ScheduleCommand],
})
export class CommandsModule {}
