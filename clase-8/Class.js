class Products {

    constructor(){
        this.products = []
        this.id = 0
    }

    get allProducts(){
        return this.products
    }

    saveProduct(product){
        this.id++
        const newProduct = {
            title : product.title,
            price : product.price,
            thumbnail : '(URL al logo o foto del producto)',
            id : this.id
        }
        this.products.push(newProduct)
        return newProduct
    }

    getProductById(idProdcut){
        return this.products.find(product => product.id == idProdcut)
    }

}

module.exports = Products