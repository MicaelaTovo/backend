const express = require('express')
const ProductManager = require('./Backend/ProductManager')
const app = express()

// const productManager = new ProductManager('/Backend/products.json')

app.get("/", function (req, res) {
  const nombre = req.params.nombre;
  const respuesta = `
    <html>
      <body> 
        <h1 style= "color: red"> Bienvenido ${nombre}! </h1>
      </body>
    </html>
  `;
  res.send(respuesta)
});

app.get('/', function (req, res) {
res.send('Hola gente')
})


app.listen(3000)