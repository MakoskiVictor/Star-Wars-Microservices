const { catchAsync } = require('../utils')
module.exports = {
  getList: catchAsync(require('./getList')),
  getById: catchAsync(require('./getById')),
  postItem: catchAsync(require('./postItem'))
}
