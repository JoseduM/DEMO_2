
class Usuarios {
    constructor(usuario, contrasena){
        this.usuario = usuario,
        this.pass = contrasena,
        this.token = ""
    }

    static async guardaUsuario (usuario) {
        localStorage.setItem("dataUsuario1", JSON.stringify(usuario))
    }

    static async recuperaUsuario () {
        let resultado = await JSON.parse(localStorage.getItem('dataUsuario1'))
        return resultado
    }
}

async function nuevoUsuario (usrNuevo) {
    Usuarios.guardaUsuario(new Usuarios (usrNuevo.usuario, usrNuevo.pass))
    console.log(usrNuevo)
    try {
        let resultado = await fetch("http://localhost:3000/nuevousuario", {
            method: 'post',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify( {
                "nombres": usrNuevo.nombres,
                "apellidos": usrNuevo.apellidos,
                "mail": usrNuevo.mail,
                "usuario": usrNuevo.usuario,
                "pass": usrNuevo.pass
            })
        })
        let vuelta = await resultado.json()
        return vuelta

    }catch(err){
        console.log(err)
        throw new Error ('algo raro paso')
    }
}