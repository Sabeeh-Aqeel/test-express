const fs = require('fs')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000 


app.get('/', (req, res) => {

  fs.readFile('html/index.html', 'utf-8', (err, html) => {

    if (err) {
      console.log(err)
      res.status(500).send("server error")
    }

    res.send(html)

  })
})

app.listen(port, () => {
  
  console.log(`Example app listening on port ${port}`)
})
