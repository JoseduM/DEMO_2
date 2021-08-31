const ctrl = {}

ctrl.index = (req,res) => {
  res.render('login')
}

ctrl.signin = (req,res) => {
  res.render('signin')
}

ctrl.administrador = (req,res) => {
  res.render('administrador')
}

module.exports = ctrl;