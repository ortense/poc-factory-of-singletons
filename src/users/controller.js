const userModel = require('./model')

const local = {}

exports.createController = (model = userModel) => {
  if (local.controller) return local.controller

  local.controller = {
    async create (request, response) {
      const { email, password, firstName, lastName } = request.params
      const user = await model.create({ email, password, firstName, lastName })
      return response.status(201).json(user)
    }
  }

  return local.controller
}
