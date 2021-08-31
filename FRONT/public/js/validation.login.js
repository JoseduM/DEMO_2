
let botonLogin = document.getElementById('buttonAcceptLogin');

botonLogin.addEventListener('click', async (event)  => {
  const usuarioNuevo = {
    usuario: document.getElementById('usernameLoginInput').value,
    pass: document.getElementById('passwordLoginInput').value
  }
  console.log(usuarioNuevo);

  try {
    validarTxt(usuarioNuevo.usuario);
    validarTxt(usuarioNuevo.pass);
    console.log('usuario validado y creacion en proceso');
    let resultado = await loginUser(usuarioNuevo);
    event.preventDefault()
  } catch (err) {
    console.log(err)

    alert(`Error: ${err.message}`)
  }
})