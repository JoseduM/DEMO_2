const registro = async () => {
  const usuarioNuevo = {
    nombres: document.getElementById('GET-nombres').value,
    appellidos: document.getElementById('GET-apellidos').value,
    mail: document.getElementById('GET-mail').value,
    usuario: document.getElementById('GET-usuario').value,
    pass: document.getElementById('GET-pass').value
  }
  console.log(usuarioNuevo);

  try {
    validarTxt(usuarioNuevo.nombres);
    validarTxt(usuarioNuevo.appellidos);
    validarMail(usuarioNuevo.mail);
    validarTxt(usuarioNuevo.usuario);
    validarTxt(usuarioNuevo.pass);
    console.log('usuario validado y creacion en proceso');
    let resultado = await nuevoUsuario(usuarioNuevo);
  } catch (err) {
    console.log(err)

    alert(`Error: ${err.message}`)
  }
}


let botonRegistro = document.getElementById('enviarRegistro');
botonRegistro.addEventListener('click', registro )


