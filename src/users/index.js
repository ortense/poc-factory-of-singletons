const model = require('./model')
const controller = require('./controller')

module.exports = {
  ...model,
  ...controller
}
