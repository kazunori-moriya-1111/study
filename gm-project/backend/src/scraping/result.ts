import { JSDOM } from 'jsdom';
import { ResultType } from './types/ResultType';

export default class insertResult {
  async scraping(registrationNumber: number): Promise<any> {
    const url = `https://www.boatrace.jp/owpc/pc/race/raceresult?rno=8&jcd=04&hd=20231111`;

    // dom取得
    const dom = await JSDOM.fromURL(url);
    const document = dom.window.document;

    // 選手名取得
    // const name = document.querySelector('.racer1_bodyName').innerHTML;
    // const nameKana = document.querySelector('.racer1_bodyKana').innerHTML;

    // // 選手情報取得
    // const elementsArray = [...document.querySelectorAll('.list3 dd')].map(
    //   (node) => {
    //     return node.innerHTML;
    //   },
    // );

    // console.log('elementsArray', elementsArray);
    const result = {
      a: 1,
    };
    console.log('result', result);

    // オブジェクトの形で返却すれば受け取る側が分割代入で使える
    return result;
  }
}
