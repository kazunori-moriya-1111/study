import { GoogleSpreadsheet } from "google-spreadsheet";
import env from 'dotenv';
env.config({ path: '../../../.env' });
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const secrets = require('../../udemy-spread-sheet-f5eada302ada.json');

/**
 * 問題：
 * 以下の値をシートを完成させてください。
 * * `cart` シートの作成、name, priceの挿入は手動で行ってください。
 * name   | price
 * Orange | 120
 * Banana | 50
 * Apple  | 100
 * 合計    | 270
 */
(async () => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: secrets.client_email,
    private_key: secrets.private_key,
  });

  await doc.loadInfo();
  const cartSheet = doc.sheetsByTitle['cart'];
  const rows = await cartSheet.addRows([
    {
      name: 'Orange',
      price: 120
    },
    {
      name: 'Banana',
      price: 50
    },
    {
      name: 'Apple',
      price: 100
    },
    {
      name: '合計',
      price: '=SUM(B2:B4)'
    }
  ]);

  rows.forEach(row => async () => await row.save())
})();
