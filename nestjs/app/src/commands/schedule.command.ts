import { Command, CommandRunner, Option } from 'nest-commander';

type CommandOptions = {
  date?: string;
};

@Command({
  name: 'schedule',
  options: { isDefault: false },
})
export class ScheduleCommand extends CommandRunner {
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
    console.log(json['maindata']);
  }
}
