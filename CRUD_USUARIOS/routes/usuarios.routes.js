const midd = require('../middlewares/midd.usuario')
const usuariosService = require('../services/usuarios.services')
const cors = require('cors')

//Exporto los modulos
module.exports = (app)=> {

    app.post('/login', midd.checkDatosLogin, midd.usuarioValido, async (req,res)=>{
        let usuario = req.body
        try {
            let resultado = await usuariosService.chequearUsrValido(usuario)
            if (resultado) {
                let validacion = await usuariosService.generaToken(usuario)
                res.status(200).json(validacion)
            }
        }catch (err){
            console.log(err)
            res.status(400).send('Usuario no registrado')
        }
    })
    
    app.get('/token', async (req,res) => {
        let usuario = req.body;

        const userFromDB = await usuariosService.chequearUsrValido(usuario)
        const token = await usuariosService.generaToken(userFromDB)
        res.status(200).json(token)
        try {
    
        }catch (error) {
    
        }
    } )
    app.get('/usuarios',  async (req,res)=>{
        try {
            let resultado = await usuariosService.listaUsuarios()
            res.status(200).json(resultado)
        }catch (err){
            console.log(err)
            res.status(400).send('Ocurrio un error inesperado')
        }
    })

    app.post('/nuevousuario',  midd.checkDatosAlta, async (req,res)=>{

        try{
            const usuario = req.body
            let resultado = usuariosService.crearUsuarios(usuario)
            res.status(200).send('usuario creado')

        }catch(err){
            console.log(err)
            res.status(400).send('Ocurrio un error inesperado')  
        }
    })

}