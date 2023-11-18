const fs = require('fs')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000 

let visits = fs.readFileSync('number.txt', "utf-8")


console.log(visits)

app.get('/', (req, res) => {
  visits++
  // fs.writeFileSync('number.txt', toString(visits))
  res.send("This website has been visited "+process.env.counter+" many times")
})

app.listen(port, () => {
  
  console.log(`Example app listening on port ${port}`)
})
