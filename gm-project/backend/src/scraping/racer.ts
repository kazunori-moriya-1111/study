import { Browser, Page, webkit } from 'playwright';

export default class getRacerInfo {
  async scraping(registrationNumber: number): Promise<Object> {
    // ブラウザの起動
    const browser: Browser = await webkit.launch({ headless: true });

    // 新しいページを開く
    const page: Page = await browser.newPage();

    // 特定のサイトに移動
    await page.goto(
      'https://www.boatrace.jp/owpc/pc/data/racersearch/profile?toban=3941',
    );

    // タイトルを取得
    const pageTitle: string = await page.title();
    console.log('ページのタイトル:', pageTitle);

    const cardLocator = await page.locator('.list3');
    const cardCount = await cardLocator.innerText();
    console.log(cardCount);

    // ブラウザを閉じる
    await browser.close();
    // オブジェクトの形で返却すれば受け取る側が分割代入で使える
    return cardCount;
  }
}
