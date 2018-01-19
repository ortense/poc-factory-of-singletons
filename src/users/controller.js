const userModel = require('./model')

const privates = {}

exports.createController = (model = userModel) => {
  if (privates.controller) return privates.controller

  privates.controller = {
    async create (request, response, next) {
      try {
        const { email, password, firstName, lastName } = request.body
        const user = await model.create({ email, password, firstName, lastName })
        return response.status(201).json(user)
      }
      catch (error) { return next(error) }
    }
  }

  return privates.controller
}
