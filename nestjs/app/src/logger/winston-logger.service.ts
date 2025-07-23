import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

@Injectable()
export class WinstonLoggerService implements LoggerService {
  private readonly logger: winston.Logger;

  constructor(private context?: string) {
    this.logger = winston.createLogger({
      level: 'info', // debug以上を出したい場合は 'debug' に
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(({ level, message, timestamp }) => {
          const prefix = this.context ? `[${this.context}] ` : '';
          return `[${timestamp}] ${level.toUpperCase()}: ${prefix}${message}`;
        }),
      ),
      transports: [
        // コンソール出力
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
          ),
        }),
        // ファイル出力（毎日ローテート）
        new winston.transports.DailyRotateFile({
          dirname: 'logs', // ログディレクトリ
          filename: 'app-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: false,
          maxSize: '20m',
          maxFiles: '14d', // 14日間保持
        }),
      ],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace?: string) {
    this.logger.error(`${message}${trace ? '\n' + trace : ''}`);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }
}
