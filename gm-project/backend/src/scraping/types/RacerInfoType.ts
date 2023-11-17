import { RacerGrade } from '@prisma/client';

export interface racerInfoType {
  name: string;
  nameKana: string;
  birthday: Date;
  height: number;
  weight: number;
  bloodType: string;
  branch: string;
  birthPlace: string;
  registrationPeriod: number;
  racerGrade: RacerGrade;
}
