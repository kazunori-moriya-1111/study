import { GoogleSpreadsheet } from "google-spreadsheet";
import env from 'dotenv';
env.config({ path: '../../../.env' });
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const secrets = require('../../udemy-spread-sheet-f5eada302ada.json');

(async () => {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
        client_email: secrets.client_email,
        private_key: secrets.private_key
    });

    await doc.loadInfo();

    // await doc.addSheet({ title: 'persons', headerValues: ['name', 'age', 'gender'] })

    const personSheet = doc.sheetsByTitle['persons'];
    const rows = await personSheet.addRows([
        {
            name: 'Tom',
            age: 18,
            gender: 'M'
        },
        {
            name: 'Hanako',
            age: 20,
            gender: 'F'
        },
        {
            name: 'John',
            age: 25,
            gender: 'M'
        }
    ]);

    rows.forEach(row => async () => await row.save())
})();