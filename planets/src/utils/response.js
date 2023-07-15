module.exports = (res, statusCode = 200, data) => {
  if (data) {
    res.status(statusCode).send({
      error: false,
      data
    })
  } else {
    res.status(statusCode).send({
      error: false
    })
  }
}
