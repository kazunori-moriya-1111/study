import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { PrismaModule } from './prisma/prisma.module';
import { CommandsModule } from './commands/commands.module';

@Module({
  imports: [ItemsModule, PrismaModule, CommandsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
