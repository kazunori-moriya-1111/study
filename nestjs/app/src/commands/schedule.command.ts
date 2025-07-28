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
    json['maindata']['infolist'].map(async (infolist) => {
      const record = await this.prismaService.rawRacecards.create({
        data: {
          updatetime: json['maindata']['updatetime'],
          beforeday: json['maindata']['beforeday'],
          beforedayflag: json['maindata']['beforedayflag'],
          hd: json['maindata']['hd'],
          datamode: json['maindata']['datamode'],
          today: json['maindata']['today'],
          nextday: json['maindata']['nextday'],
          nextdayflag: json['maindata']['nextdayflag'],
          presalelinkflag: json['maindata']['presalelinkflag'],
          presaleend: json['maindata']['presaleend'],
          jcd: infolist['jcd'],
          jname: infolist['jname'],
          presaleflag: infolist['presaleflag'],
          favracerflag: infolist['favracerflag'],
          status: infolist['status'],
          statusmessage1: infolist['statusmessage1'],
          statusmessage2: infolist['statusmessage2'],
          nowraceno: infolist['nowraceno'],
          deadline: infolist['deadline'],
          gradeicon: infolist['gradeicon'],
          racelistflag: infolist['racelistflag'],
          womanicon: infolist['womanicon'],
          raceclscd: infolist['raceclscd'],
          gradecode: infolist['gradecode'],
          nightflag: infolist['nightflag'],
          kfrom: infolist['kfrom'],
          kto: infolist['kto'],
          nj: infolist['nj'],
          votedisplayflag: infolist['votedisplayflag'],
          votelinkurl: infolist['votelinkurl'],
          inpagelinkparam: infolist['inpagelinkparam'],
        },
      });
      this.logger.log(`created : ${JSON.stringify(record)}`);
    });
  }
}
