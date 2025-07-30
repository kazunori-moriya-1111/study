import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ItemsModule } from './items/items.module';
import { PrismaModule } from './prisma/prisma.module';
import { CommandsModule } from './commands/commands.module';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  imports: [
    ItemsModule,
    PrismaModule,
    CommandsModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [LoggerModule],
  exports: [LoggerModule],
})
export class AppModule {}
