// logger.module.ts
import { Module } from '@nestjs/common';
import { LoggerFactoryService } from './logger-factory.service';

@Module({
  providers: [LoggerFactoryService],
  exports: [LoggerFactoryService],
})
export class LoggerModule {}
