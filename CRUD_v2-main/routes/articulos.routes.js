const articulosServices = require('../services/articulos.services.js')

module.exports = (app) => {

    app.get('/articulos',async (req,res) => {
        try {
            let resultado = await articulosServices.listaProductos()
            res.status(200).json(resultado)
        } catch (error) {
            console.log(error.message)
        }
    })

    app.post('/articulos', async (req,res) => {
        let articulo = req.body
        console.log(articulo)
        try {
            let resultado = await articulosServices.nuevoArticulo(articulo)
            console.log(resultado)
            res.json(resultado)
        } catch (error) {
            console.log(error.message)
            res.status(500).json({error: error.message})
        }
    })
    app.delete('/articulo', async (req,res) => {
        let articulo = req.body;
        console.log(articulo);
        try{
            let resultado = await articulosServices.borrarArticulo(articulo)
            console.log(resultado)
            res.json('Articulo borrado')
        }catch(error){
            console.log('algo raro pasó');
            throw new Error('Error en el delete')
        }
    })
    app.post('/agregararticulo', async (req,res) => {
        let articulo = req.body
         try {
             let resultado = await articulosServices.agregarArticulo(articulo)
             console.log(resultado)
             res.json('Articulo agregado')
         } catch (error) {
             console.log(error.message)
             res.status(500).json({error:error.message})
         }
    })

    app.post('/actualizar', async (req,res) => {
        let articulo = req.body
        try {
            let resultado = await articulosServices.actualizarArticulo(articulo)
            console.log(resultado)
            res.json('Articulo Actualizado')
        } catch (error) {
            console.log(error.message)
            res.status(500).json({error:error.message})            
        }
    })

    app.post('/restararticulo', async (req,res) => {
        let articulo = req.body
         try {
             let resultado = await articulosServices.restarArticulo(articulo)
             console.log(resultado)
             res.json('Articulo restado')
         } catch (error) {
             console.log(error.message)
             res.status(500).json({error:error.message})
         }
    })
}