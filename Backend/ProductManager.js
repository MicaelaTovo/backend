const fs = require('fs');

class ProductManager {
    constructor(filepath) {
        this.filepath = filepath;
        // this.products = this.readFile();
    }

    // readFile() {
    //     const data = JSON.parse(fs.readFileSync(this.filepath, 'utf8'));
    //     return data;
    // }

    // writeData(data){
    //     let dataString = JSON.stringify(data);
    //     fs.writeFileSync(`./${this.filepath}`, dataString);
    //     return dataString;
    // }

    // idGenerator() {
    //     if (this.products.length > 0) {
    //         let productsId = this.products.map(product => product.id);
    //         return Math.max(...productsId) + 1;
    // } else {
    //     let id = 1
    //     return id;
    //     }
    // }
    
    getProducts() {
        const product = fs.readFileSync(this.filepath, 'utf8');;
        return JSON.parse(product);
    }
}
//     addProduct(product){
//         if (this.products.find((p) => p.code == product.code)){
//             return console.log(`El producto con el codigo ${product.code} ya existe`)
//         } else if (!!!product.title || !!!product.description || !!!product.price || !!!product.thumbnail || !!!product.code || !!! product.stock) {
//             return console.log("Algun dato es nulo");
//         } else {
//             let data = this.readFile();
//             product.id = this.idGenerator();
//             data.push(product);
//             this.writeData(data);
//         }
//     }

//     getProductById(){
//         let data = this.readFile();
//         if (data.find(product => product.id === id)){ 
//             return console.log(`El producto con el id es ${product.id}`)
//         } else{ return console.log(`Not found`)
//             } 
//     }
    
//     deleteProduct(id){
//         let data = this.readFile();
//         if(data.find(product => product.id === id)){
//             let products = data.filter(product => product.id !== id)
//             this.writeData(products)
//             return products;
//         } else { return this.console.log(`Not found`)
//             }
//     }

//     updateProduct(id, product) {
//         let data = this.readFile();
//         if(data.find((p) => p.id === product.id)){
//             let productDelete = data.filter(product => product.id !== id)
//             product.id = id;
//             productDelete.push(product);
//             this.writeData(productDelete);
//             return productDelete;
//         } else { return console.log(`Not found`)
//         }
//     }
// }


    // const productManager = new ProductManager('./Backend/products.json')
    // console.log(productManager.getProducts());


//     productManager.addProduct()
//     productManager.getProductById()
//     productManager.deleteProduct()
//     productManager.updateProduct()


    module.exports = ProductManager;

