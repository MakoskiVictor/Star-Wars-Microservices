module.exports = (fn) => (req, res, next) => {
  // Si hay error lo paso al manejador de errores de Express
  fn(req, res).catch((err) => next(err))
}
