const express = require('express')
const ProductManager = require('./Backend/ProductManager')
const app = express()
const PORT = 8080;

const productManager = new ProductManager('./Backend/products.json')

app.get("/products", async (req, res) => {
  const products = await productManager.getProducts();
  const { limit } = req.query;

  if (limit) return res.json(products.slice(0, limit))
  else return res.json(products);
});

app.get("/products/:pid", async (req, res) => {
  const products = await productManager.getProducts();
  const { pid } = req.params;
  const product = products.find(p => p.id === pid);

  if (product) return res.status(200).json(product);
  else return res.status(404).json({ message: "Product not found" });

});

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
})