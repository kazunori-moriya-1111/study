// logger-factory.service.ts
import { Injectable } from '@nestjs/common';
import { WinstonLoggerService } from './winston-logger.service';
import { LoggerService } from '@nestjs/common';

@Injectable()
export class LoggerFactoryService {
  createLogger(context: string): LoggerService {
    return new WinstonLoggerService(context);
  }
}
