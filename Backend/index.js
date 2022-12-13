const {queso1, queso2, queso3, queso4} = require('./database')

class ProductManager {
    constructor(){
        this.products = [];
        this.product = Product;
    }
}

class Product extends ProductManager {
    constructor (title, description, price, thumbnail, code, stock){
        super()
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;  
    }


    addProduct(product){
        if (this.getProducts().find((p) => p.code == product.code)) return console.log(`El producto con el codigo ${product.code} ya existe`) 
        else product.id = this.getProducts().length + 1; this.products.push(product);
    }

    getProducts(){
        return this.products;
    }
    getProductById(){
        if (this.getProducts().find((p) => p.id == product.id)) return console.log(`El producto con el id es ${product.id}`) 
        else return console.log(`Not found`);
    }
}

const newProductManager = new ProductManager();

newProductManager.addProduct(queso1)
console.log(newProductManager.getProducts());
