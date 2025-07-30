import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';
import { WinstonLoggerService } from './logger/winston-logger.service';

async function bootstrap() {
  await CommandFactory.run(AppModule, {
    logger: new WinstonLoggerService(),
  });
}

bootstrap();
