const express = require('express')
const app = express()


app.get("/", function (req, res) {
  res.send('Funcionando!')
});



app.listen(3000)