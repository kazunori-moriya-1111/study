import { JSDOM } from 'jsdom';
import { RacerGrade } from '@prisma/client';
import { racerInfoType } from './types/RacerInfoType';

export default class getRacerInfo {
  async scraping(registrationNumber: number): Promise<racerInfoType> {
    const url = `https://www.boatrace.jp/owpc/pc/data/racersearch/profile?toban=${registrationNumber}`;

    // dom取得
    const dom = await JSDOM.fromURL(url);
    const document = dom.window.document;

    // 選手名取得
    const name = document.querySelector('.racer1_bodyName').innerHTML;
    const nameKana = document.querySelector('.racer1_bodyKana').innerHTML;

    // 選手情報取得
    const elementsArray = [...document.querySelectorAll('.list3 dd')].map(
      (node) => {
        return node.innerHTML;
      },
    );

    console.log('elementsArray', elementsArray);
    const racerInfo: racerInfoType = {
      // スペース削除
      name: name.replace(/\s/g, ''),
      // スペース削除
      nameKana: nameKana.replace(/\s/g, ''),
      // date変換
      birthday: new Date(
        Number(elementsArray[1].split('/')[0]),
        Number(elementsArray[1].split('/')[1]),
        Number(elementsArray[1].split('/')[2]),
      ),
      // cm削除
      height: Number(elementsArray[2].replace('cm', '')),
      // kg削除
      weight: Number(elementsArray[3].replace('kg', '')),
      // 型削除
      bloodType: elementsArray[4].replace('型', ''),
      branch: elementsArray[5],
      birthPlace: elementsArray[6],
      // 期削除
      registrationPeriod: Number(elementsArray[7].replace('期', '')),
      // 級削除
      racerGrade: elementsArray[8].replace('級', '') as RacerGrade,
    };
    console.log('racerInfo', racerInfo);

    // オブジェクトの形で返却すれば受け取る側が分割代入で使える
    return racerInfo;
  }
}
