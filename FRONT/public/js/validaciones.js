
function validarTxt(data) {
  if (data == null || data == 0 || /^\s+$/.test(data)) {
    throw new Error ('alguno de los valores ingresados no es correcto')
  } else {
    return 'ok'
  }
}

const validarMail = (data) => {
  if ((/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(data))) {
    throw new Error ('alguno de los valores ingresados no es correcto')   
  } else {
    return 'ok'
  }
}