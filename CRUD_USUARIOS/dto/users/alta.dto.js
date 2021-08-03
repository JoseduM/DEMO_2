const Joi = require("joi");

module.exports.altaUserDTO = Joi.object().keys({
  nombre: Joi.string().alphanum().min(6).max(50),
  apellido: Joi.string().alphanum().min(6).max(50).required(),
  correo: Joi.string().email(),
  usuario: Joi.string().alphanum().min(6).max(16).required(),
  password:  Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required()
})