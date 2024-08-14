import { JSDOM } from 'jsdom';
import { RaceGrade } from '@prisma/client';
import { ResultType } from './types/resultType';

export default class insertResult {
  DisqualificationCheck(tyaku_jun: string): string | null {
    let Disqualification = null;
    if (tyaku_jun == 'Ｆ') {
      Disqualification = 'Flying';
    }
    if (tyaku_jun == 'Ｌ') {
      Disqualification = 'LateStart';
    }
    if (tyaku_jun == '妨') {
      Disqualification = 'Obstruction';
    }
    if (tyaku_jun == '転') {
      Disqualification = 'Subversion';
    }
    if (tyaku_jun == 'エ') {
      Disqualification = 'EngineStop';
    }
    if (tyaku_jun == '落') {
      Disqualification = 'EngineStop';
    }
    if (
      Disqualification &&
      (tyaku_jun == '１' ||
        tyaku_jun == '２' ||
        tyaku_jun == '３' ||
        tyaku_jun == '４' ||
        tyaku_jun == '５' ||
        tyaku_jun == '６')
    ) {
      throw new Error('定義がない違反');
    }
    return Disqualification;
  }
  async scraping(raceNo: number, fieldNo: string, yyyymmdd: string): Promise<ResultType> {
    const url = `https://www.boatrace.jp/owpc/pc/race/raceresult?rno=${raceNo}&jcd=${fieldNo}&hd=${yyyymmdd}`;
    console.log(url);

    // dom取得
    const dom: JSDOM = await JSDOM.fromURL(url);
    const document: Document = dom.window.document;

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

    // レースラベル取得
    const raceLabel =
      document.querySelector('.label2.is-type1') == null
        ? ''
        : document.querySelector('.label2.is-type1').innerHTML;

    // レース結果
    const raceResulTable = document.querySelector('.is-w495');
    const raceResulTableTbodyList = raceResulTable.querySelectorAll('tbody');
    // 1着
    let firstPlace;
    let firstRacerRegistrationNumber;
    let firstRacerName;
    let firstRacerDisqualification;
    // 2着
    let secondPlace;
    let secondRacerRegistrationNumber;
    let secondRacerName;
    let secondRacerDisqualification;
    // 3着
    let thirdPlace;
    let thirdRacerRegistrationNumber;
    let thirdRacerName;
    let thirdRacerDisqualification;
    // 4着
    let fourthPlace;
    let fourthRacerRegistrationNumber;
    let fourthRacerName;
    let fourthRacerDisqualification;
    // 5着
    let fifthPlace;
    let fifthRacerRegistrationNumber;
    let fifthRacerName;
    let fifthRacerDisqualification;
    // 6着
    let sixthPlace;
    let sixthRacerRegistrationNumber;
    let sixthRacerName;
    let sixthRacerDisqualification;
    raceResulTableTbodyList.forEach((tbody, index) => {
      const tyaku_jun = tbody.querySelector('.is-fs14').innerHTML;
      const tyaku_waku = tbody.querySelector('.is-fs14.is-fBold').innerHTML;
      const racerRegistrationNumber = tbody.querySelector('.is-fs12').innerHTML;
      const racerName = tbody.querySelector('.is-fs18.is-fBold.is-lh24__3rdadd').innerHTML;
      if (index == 0) {
        firstRacerDisqualification = this.DisqualificationCheck(tyaku_jun);
        firstPlace = tyaku_waku;
        firstRacerRegistrationNumber = racerRegistrationNumber;
        firstRacerName = racerName;
      } else if (index == 1) {
        secondRacerDisqualification = this.DisqualificationCheck(tyaku_jun);
        secondPlace = tyaku_waku;
        secondRacerRegistrationNumber = racerRegistrationNumber;
        secondRacerName = racerName;
      } else if (index == 2) {
        thirdRacerDisqualification = this.DisqualificationCheck(tyaku_jun);
        thirdPlace = tyaku_waku;
        thirdRacerRegistrationNumber = racerRegistrationNumber;
        thirdRacerName = racerName;
      } else if (index == 3) {
        fourthRacerDisqualification = this.DisqualificationCheck(tyaku_jun);
        fourthPlace = tyaku_waku;
        fourthRacerRegistrationNumber = racerRegistrationNumber;
        fourthRacerName = racerName;
      } else if (index == 4) {
        fifthRacerDisqualification = this.DisqualificationCheck(tyaku_jun);
        fifthPlace = tyaku_waku;
        fifthRacerRegistrationNumber = racerRegistrationNumber;
        fifthRacerName = racerName;
      } else if (index == 5) {
        sixthRacerDisqualification = this.DisqualificationCheck(tyaku_jun);
        sixthPlace = tyaku_waku;
        sixthRacerRegistrationNumber = racerRegistrationNumber;
        sixthRacerName = racerName;
      }
    });

    // スタートタイミング
    // 1コース
    let startFirstCourse;
    let startTimingFirstCourse;
    // 2コース
    let startSecondCourse;
    let startTimingSecondCourse;
    // 3コース
    let startThirdCourse;
    let startTimingThirdCourse;
    // 4コース
    let startFourthCourse;
    let startTimingFourthCourse;
    // 5コース
    let startFifthCourse;
    let startTimingFifthCourse;
    // 6コース
    let startSixthCourse;
    let startTimingSixthCourse;

    // スタート結果テーブル
    const startResultTableTrList = document
      .querySelector('.is-w495.is-h292__3rdadd')
      .querySelector('tbody')
      .querySelectorAll('tr');

    startResultTableTrList.forEach((tr, index) => {
      const courseBoat = tr.querySelector('.table1_boatImage1Number').innerHTML;
      // スタート.を残して決まりてを除外する
      const startTiming = tr
        .querySelector('.table1_boatImage1TimeInner')
        .innerHTML.split(/\n/)[0]
        .replace(/\s+/g, '')
        .replace('.', '')
        .replaceAll('&nbsp;', '');

      if (index == 0) {
        startFirstCourse = courseBoat;
        startTimingFirstCourse = startTiming;
      } else if (index == 1) {
        startSecondCourse = courseBoat;
        startTimingSecondCourse = startTiming;
      } else if (index == 2) {
        startThirdCourse = courseBoat;
        startTimingThirdCourse = startTiming;
      } else if (index == 3) {
        startFourthCourse = courseBoat;
        startTimingFourthCourse = startTiming;
      } else if (index == 4) {
        startFifthCourse = courseBoat;
        startTimingFifthCourse = startTiming;
      } else if (index == 5) {
        startSixthCourse = courseBoat;
        startTimingSixthCourse = startTiming;
      }
    });

    // 払戻金テーブル
    let sanrentanPrice: string;
    let sanrentanPopular: string;
    let sanrenpukuPrice: string;
    let sanrenpukuPopular: string;
    let nirentanPrice: string;
    let nirentanPopular: string;
    let nirenpukuPrice: string;
    let nirenpukuPopular: string;
    const refundTable = document.querySelectorAll('.is-w495')[2];
    const refundTableTbody = refundTable.querySelectorAll('tbody');
    refundTableTbody.forEach((tbody, index) => {
      if (index == 0) {
        sanrentanPrice = tbody.querySelector('.is-payout1').innerHTML.slice(1).replace(',', '');
        sanrentanPopular = tbody.querySelectorAll('td')[3].innerHTML;
      } else if (index == 1) {
        sanrenpukuPrice = tbody.querySelector('.is-payout1').innerHTML.slice(1).replace(',', '');
        sanrenpukuPopular = tbody.querySelectorAll('td')[3].innerHTML;
      } else if (index == 2) {
        nirentanPrice = tbody.querySelector('.is-payout1').innerHTML.slice(1).replace(',', '');
        nirentanPopular = tbody.querySelectorAll('td')[3].innerHTML;
      } else if (index == 3) {
        nirenpukuPrice = tbody.querySelector('.is-payout1').innerHTML.slice(1).replace(',', '');
        nirenpukuPopular = tbody.querySelectorAll('td')[3].innerHTML;
      }
    });

    // 水面気象要素
    const climate: Element = document.querySelector('.weather1_body.is-type1__3rdadd');
    const temperature: string = climate
      .querySelector('.weather1_bodyUnit.is-direction')
      .querySelector('.weather1_bodyUnitLabelData')
      .innerHTML.replace('℃', '')
      .replace(/\s+/g, '');

    const weather: string = climate
      .querySelector('.weather1_bodyUnit.is-weather')
      .querySelector('.weather1_bodyUnitLabelTitle')
      .innerHTML.replace(/\s+/g, '');

    const wind: string = climate
      .querySelector('.weather1_bodyUnit.is-wind')
      .querySelector('.weather1_bodyUnitLabelData')
      .innerHTML.replace('m', '')
      .replace(/\s+/g, '');

    const windDirectionClassName: string = climate
      .querySelector('.weather1_bodyUnit.is-windDirection')
      .querySelector('.weather1_bodyUnitImage')
      .className.split(/\s+/)[1];

    let windDirection: string = '';
    if (windDirectionClassName == 'is-wind1') {
      windDirection = '右横';
    } else if (windDirectionClassName == 'is-wind2') {
      windDirection = '追い風右横斜め';
    } else if (windDirectionClassName == 'is-wind3') {
      windDirection = '追い風右斜め';
    } else if (windDirectionClassName == 'is-wind4') {
      windDirection = '追い風右後ろ斜め';
    } else if (windDirectionClassName == 'is-wind5') {
      windDirection = '追い風';
    } else if (windDirectionClassName == 'is-wind6') {
      windDirection = '追い風左後ろ斜め';
    } else if (windDirectionClassName == 'is-wind7') {
      windDirection = '追い風左斜め';
    } else if (windDirectionClassName == 'is-wind8') {
      windDirection = '追い風左横斜め';
    } else if (windDirectionClassName == 'is-wind9') {
      windDirection = '左横';
    } else if (windDirectionClassName == 'is-wind10') {
      windDirection = '向い風左横斜め';
    } else if (windDirectionClassName == 'is-wind11') {
      windDirection = '向い風左斜め';
    } else if (windDirectionClassName == 'is-wind12') {
      windDirection = '向い風左前斜め';
    } else if (windDirectionClassName == 'is-wind13') {
      windDirection = '向い風';
    } else if (windDirectionClassName == 'is-wind14') {
      windDirection = '向い風右前斜め';
    } else if (windDirectionClassName == 'is-wind15') {
      windDirection = '向い風右斜め';
    } else if (windDirectionClassName == 'is-wind16') {
      windDirection = '向い風右横斜め';
    } else if (windDirectionClassName == 'is-wind17') {
      windDirection = '無風';
    }

    const waterTemperature: string = climate
      .querySelector('.weather1_bodyUnit.is-waterTemperature')
      .querySelector('.weather1_bodyUnitLabelData')
      .innerHTML.replace('℃', '')
      .replace(/\s+/g, '');

    const wave: string = climate
      .querySelector('.weather1_bodyUnit.is-wave')
      .querySelector('.weather1_bodyUnitLabelData')
      .innerHTML.replace('cm', '')
      .replace(/\s+/g, '');

    // 文字列を返却
    // 2号艇と5号艇が変換ならば「010010」のような文字列。返還艇のビットを立たせる
    // DBのカラムなをreturn_boatにする
    let return_boat = '000000';
    const return_boat_table: NodeListOf<Element> = document
      .querySelector('.is-w243.is-h168')
      .querySelectorAll('.numberSet1_row');

    return_boat_table.forEach((numberSet1_row) => {
      // numberSet1_row.innerHTML が　''だったらへんかんない
      if (numberSet1_row.innerHTML.replace(/\s+/g, '') != '') {
        numberSet1_row.querySelectorAll('.numberSet1_number').forEach((numberSet1_number) => {
          let last_char: string = numberSet1_number.className.split(/\s+/)[1]
            ? numberSet1_number.className.split(/\s+/)[1].slice(-1)
            : '';
          if (last_char == '1') {
            return_boat = return_boat.slice(0, -1) + '1';
          } else if (last_char == '2') {
            return_boat = return_boat.slice(0, -2) + '1' + return_boat.slice(-1);
          } else if (last_char == '3') {
            return_boat = return_boat.slice(0, -3) + '1' + return_boat.slice(-2);
          } else if (last_char == '4') {
            return_boat = return_boat.slice(0, -4) + '1' + return_boat.slice(-3);
          } else if (last_char == '5') {
            return_boat = return_boat.slice(0, -5) + '1' + return_boat.slice(-4);
          } else if (last_char == '6') {
            return_boat = '1' + return_boat.slice(1);
          } else {
            return;
          }
        });
      }
    });

    const decision: string = document
      .querySelector('.is-w243.is-h108__3rdadd')
      .querySelector('.is-fs16').innerHTML;

    const result = {
      raceGrade,
      raceEventDate,
      // raceSeriesは別URLで取得
      raceTitle,
      raceLabel,
      firstPlace,
      firstRacerRegistrationNumber,
      firstRacerName,
      firstRacerDisqualification,
      secondPlace,
      secondRacerRegistrationNumber,
      secondRacerName,
      secondRacerDisqualification,
      thirdPlace,
      thirdRacerRegistrationNumber,
      thirdRacerName,
      thirdRacerDisqualification,
      fourthPlace,
      fourthRacerRegistrationNumber,
      fourthRacerName,
      fourthRacerDisqualification,
      fifthPlace,
      fifthRacerRegistrationNumber,
      fifthRacerName,
      fifthRacerDisqualification,
      sixthPlace,
      sixthRacerRegistrationNumber,
      sixthRacerName,
      sixthRacerDisqualification,
      startFirstCourse,
      startTimingFirstCourse,
      startSecondCourse,
      startTimingSecondCourse,
      startThirdCourse,
      startTimingThirdCourse,
      startFourthCourse,
      startTimingFourthCourse,
      startFifthCourse,
      startTimingFifthCourse,
      startSixthCourse,
      startTimingSixthCourse,
      sanrentanPrice,
      sanrentanPopular,
      sanrenpukuPrice,
      sanrenpukuPopular,
      nirentanPrice,
      nirentanPopular,
      nirenpukuPrice,
      nirenpukuPopular,
      temperature,
      weather,
      wind,
      windDirection,
      waterTemperature,
      wave,
      url,
      return_boat,
      decision,
    };
    console.log('result', result);

    // オブジェクトの形で返却すれば受け取る側が分割代入で使える
    return result;
  }
}
