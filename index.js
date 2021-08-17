const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');


app.get('/', (req, res) => {


let rawdata = fs.readFileSync('./frases.json');
let frases = JSON.parse(rawdata);
console.log(frases);
  res.send(frases)

  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
