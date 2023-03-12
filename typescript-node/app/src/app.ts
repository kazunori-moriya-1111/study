import express, { Request, Response, NextFunction } from 'express'
const app = express()
app.use('/', (req, res, next) => {
  console.log("test")
  next()
})
app.get('/', (req, res, next) => {
  res.send('<h1>Hello0</h1>')
})
app.use('/', (err: Error, req: Request, res: Response, next: NextFunction) => {

})
app.listen(3000)