const ctrl = {}

ctrl.index = (req,res) => {
  res.render('login')
}

ctrl.signin = (req,res) => {
  res.render('signin')
}

module.exports = ctrl;