const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  return res.send('Hello World!')
})

app.get('/hello', (req, res) => {
    return res.send('Hi there....')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})