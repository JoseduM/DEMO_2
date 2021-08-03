
const login = async () => {
  const usuarioNuevo = {
    usuario: document.getElementById('GET-usuario').value,
    pass: document.getElementById('GET-pass').value
  }
  console.log(usuarioNuevo);

  try {
    validarTxt(usuarioNuevo.usuario);
    validarTxt(usuarioNuevo.pass);
    console.log('usuario validado y creacion en proceso');
    let resultado = await loginUser(usuarioNuevo);
  } catch (err) {
    console.log(err)

    alert(`Error: ${err.message}`)
  }
}


let botonLogin = document.getElementById('enviarLogin');
botonLogin.addEventListener('click', login )