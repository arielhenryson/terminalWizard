import * as express from 'express'


const app = express()
const port = 23423


app.get('/', (req, res) => res.send('terminal wizard api server'))


app.listen(port, () => {
  console.log('starting server')
})
