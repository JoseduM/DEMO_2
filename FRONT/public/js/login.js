
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

async function loginUser (loginUsr) {
  Usuarios.guardaUsuario(new Usuarios (loginUsr.usuario, loginUsr.pass))
  console.log(loginUsr)
  try {
      let resultado = await fetch("http://localhost:3000/login", {
          method: 'post',
          headers: {
              "Accept": "application/json, text/plain, *,*",
              "Content-Type": "application/json"
          },
          body: JSON.stringify( {
              "usuario": loginUsr.usuario,
              "pass": loginUsr.pass
          })
      })
      let vuelta = await resultado.json()
      return vuelta

  }catch(err){
      console.log(err)
      throw new Error ('algo raro paso')
  }
}