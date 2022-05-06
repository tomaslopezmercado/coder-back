const express = require('express')
const routerProducts = express.Router()
const Products = require('./Class')

const PORT = 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/products', routerProducts)
app.use(express.static('public'))

const storeProducts = new Products()

routerProducts.get('/', (req, res) => {
    res.json(storeProducts.allProducts)
})

routerProducts.get('/:idProduct', (req, res) => {
    const product = storeProducts.getProductById(req.params.idProduct)
    if(product){
    return res.json(product)
    }else{
        res.json({error: 'producto no encontrado'})
    }
})

routerProducts.post('/', (req, res) => {
    const product = storeProducts.saveProduct(req.body)
    res.json(product)
})


app.listen(PORT, () => {
	console.log(`Servidor corriendo en puerto ${PORT}`);
});