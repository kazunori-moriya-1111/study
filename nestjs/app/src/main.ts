import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { WinstonLoggerService } from './logger/winston-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new WinstonLoggerService(),
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
