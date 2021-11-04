const { Router } = require('express');

const routerProducto = Router();
const Contenedor = require("../../contenedor/contpro.js")

const Pro = new Contenedor('./DB/producto.txt')


//////////////////////////// GET/POST/PUT/DELETE/////////////////////////

 ;
routerProducto.get('/', async (req, res) => {
    const PROD = await Pro.listarAll()
    res.send ( PROD);
})

routerProducto.get('/:id', (req, res) => {
   const { id } = req.params //le da la posicion de los objetos del array
    res.send({ buscada: Pro[parseInt(id) - 1] })
});

routerProducto.post('/post', (req, res) => {
    
    const { Unew} = req.body
    Pro.push(Unew)         // enpuja a la ultima posicion del array , el contenido del body, que pasa a la palabra.
    res.send({ agregada: Unew, posicion: Pro.length - 1 })
})

routerProducto.put('put/:id', (req, res) => {

    const { Pro } = req.body // recibe el objeto generado en el body
    const { id } = req.params   //le da la posicion de los objetos del array
    const proAnt = Pro[parseInt(id) - 1]
    Pro[parseInt(id) - 1] = Pro
    res.send({ actualizada: Pro, anterior: proAnt })
})

routerProducto.delete('/:id', (req, res) => {
 
    const { id } = req.params
    const newPro = Pro.splice(parseInt(id) - 1, 1)
    res.send({ borrada: newPro })
})


exports.routerProducto = routerProducto; 
