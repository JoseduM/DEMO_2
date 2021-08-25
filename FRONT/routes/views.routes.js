const express = require('express');
const router = express.Router()
const viewsController = require('../controllers/views.controllers');


module.exports = (app) => {

  router.get('/', viewsController.index);

  router.get('/signin', viewsController.signin)


  
  app.use(router)
}