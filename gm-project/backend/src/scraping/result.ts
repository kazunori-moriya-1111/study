import { JSDOM } from 'jsdom';
import { RaceGrade } from '@prisma/client';
import { ResultType } from './types/resultType';

export default class insertResult {
  async scraping(raceNo: number, fieldNo: string, yyyymmdd: string): Promise<any> {
    const url = `https://www.boatrace.jp/owpc/pc/race/raceresult?rno=${raceNo}&jcd=${fieldNo}&hd=${yyyymmdd}`;
    console.log(url);

    // dom取得
    const dom = await JSDOM.fromURL(url);
    const document = dom.window.document;

    // raceEventDate（開催日取得）
    const raceEventDate = document.querySelector('.is-active2 span span').innerHTML;
    // RaceGrade取得
    const raceGradeElementList = document.querySelector('.heading2_title').className.split(/\s+/);
    let raceGrade: RaceGrade = '' as RaceGrade;
    if (raceGradeElementList.includes('is-ippan')) {
      raceGrade = 'NORMAL';
    } else if (raceGradeElementList.includes('is-SGa')) {
      raceGrade = 'SG';
    } else if (raceGradeElementList.includes('is-G1b') || raceGradeElementList.includes('is-G1a')) {
      raceGrade = 'G1';
    } else if (raceGradeElementList.includes('is-G2b')) {
      raceGrade = 'G2';
    } else if (raceGradeElementList.includes('is-G3b')) {
      raceGrade = 'G3';
    } else {
      throw '定義されていないグレードです';
    }
    // レース名取得
    const raceTitle = document.querySelector('.heading2_titleName').innerHTML;

    // // 選手情報取得
    // const elementsArray = [...document.querySelectorAll('.list3 dd')].map(
    //   (node) => {
    //     return node.innerHTML;
    //   },
    // );
    // レース情報詳細取得　TODO 他のパターンも検証必要
    // const raceLabelpart1All = document.querySelector('.title16_titleDetail__add2020');
    // while (raceLabelpart1All.firstChild) {
    //   raceLabelpart1All.removeChild(raceLabelpart1All.firstChild);
    // }
    // const raceLabelpart1 = raceLabelpart1All;
    // const raceLabelpart2 = document
    //   .querySelector('.title16_titleDetail__add2020 span')
    //   .innerHTML.replace(/\s+/g, '');
    // const raceLabelpart3 = document
    //   .querySelector('.title16_titleLabels__add2020 span')
    //   .innerHTML.replace(/\s+/g, '');
    // const raceLabel = raceLabelpart1 + raceLabelpart2 + raceLabelpart3;
    const result = {
      raceGrade,
      raceEventDate,
      // raceSeriesは別URLで取得
      raceTitle,
      // raceLabel,
    };
    console.log('result', result);

    // オブジェクトの形で返却すれば受け取る側が分割代入で使える
    return result;
  }
}
