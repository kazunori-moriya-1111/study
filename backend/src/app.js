const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

const  connSettings = {
  host: 'db',
  user: 'user',
  password: 'password',
  database: 'extra'
};

console.log('Create mysql connection.');
const conn = mysql.createConnection(connSettings);

console.log('Connect to mysql server.');
conn.connect();

console.log('Execute query : get records from mydata table without any criterias.');


app.get('/', (req, res) => {
  res.send(conn)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})