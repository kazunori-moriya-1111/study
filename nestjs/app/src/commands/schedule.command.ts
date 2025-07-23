import { PrismaService } from 'src/prisma/prisma.service';
import { Command, CommandRunner, Option } from 'nest-commander';
import { LoggerService } from '@nestjs/common';
import { LoggerFactoryService } from '../logger/logger-factory.service';

type CommandOptions = {
  date?: string;
};

@Command({
  name: 'schedule',
  options: { isDefault: false },
})
export class ScheduleCommand extends CommandRunner {
  private readonly logger: LoggerService;
  constructor(
    private readonly prismaService: PrismaService,
    private readonly loggerFactory: LoggerFactoryService,
  ) {
    super();
    this.logger = this.loggerFactory.createLogger(ScheduleCommand.name);
  }

  @Option({
    flags: '-d --date [string]',
    description: '日付',
    required: true,
  })
  parseName(val: string): string {
    return val;
  }
  async run(inputs: string[], options?: CommandOptions): Promise<void> {
    const date = options?.date;
    const response = await fetch(
      `https://www.boatrace.jp/owsp/sp/spdata?hd=${date}&type=top`,
    );
    const json = await response.json();
    this.logger.log(JSON.stringify(json['maindata']));
    await this.prismaService.racecards.create({
      data: {
        date: new Date('2023-01-01'),
      },
    });
  }
}
