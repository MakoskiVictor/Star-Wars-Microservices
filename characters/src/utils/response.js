module.exports = (res, statusCode = 200, data) => {
  res.status(statusCode).send({
    error: false,
    data
  })
}
