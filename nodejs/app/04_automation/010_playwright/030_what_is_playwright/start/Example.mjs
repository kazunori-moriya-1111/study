import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto("http://localhost:3000")

  const inputLocator = page.locator('//*[@id="__next"]/div/div[1]/label/input')
  await inputLocator.type('美')

  const pager3Locator = page.locator('.page-link.page-number >> nth=2')
  await pager3Locator.click()

  const cardLocator = await page.locator('.cards.list-group-item')
  const cardCount = await cardLocator.count()
  console.log(cardCount)

  //文字列で要素を取得
  const textLocator = await page.locator('text=名刺管理アプリ')
  const pageText = await textLocator.innerText()
  // console.log(pageText)

  //xpathで要素を取得
  const xpathLocator = await page.locator('xpath=//*[@id="__next"]/nav/div/a')
  const xpathText = await xpathLocator.innerText()
  // console.log(xpathText)

  await browser.close()
})()