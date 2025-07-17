import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';

async function bootstrap() {
  await CommandFactory.run(AppModule, {
    logger: ['log', 'fatal', 'error', 'warn', 'error', 'debug', 'verbose'],
  });
}

bootstrap();
