const { Router } = require('express');

const routerCarrito = Router();


const Contcar = require("../../contenedor/contcar.js")

const car = new Contcar('./DB/carts.txt')

//////////////////////////// GET/POST/DELETE/////////////////////////




routerCarrito.post('/', async (req, res) => {
    
})
routerProducto.delete('/:id', (req, res) => {
 
})
routerProducto.delete('/:id/producto', (req, res) => {
 
})
routerCarrito.post('/productos', async (req, res) => {
    
})
routerProducto.delete('/:id/productos/:id_prod', (req, res) => {
 
})






exports.routerCarrito = routerCarrito; 
