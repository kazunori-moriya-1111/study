import { JSDOM } from 'jsdom';

export default class getRacerInfo {
  async scraping(registrationNumber: number): Promise<Object> {
    const url = `https://www.boatrace.jp/owpc/pc/data/racersearch/profile?toban=${registrationNumber}`;

    // dom取得
    const dom = await JSDOM.fromURL(url);
    const document = dom.window.document;

    // 要素取得
    const elementsArray = [...document.querySelectorAll('.list3 dd')].map(
      (node) => {
        return node.innerHTML;
      },
    );

    console.log('elementsArray', elementsArray);

    // オブジェクトの形で返却すれば受け取る側が分割代入で使える
    return document;
  }
}
