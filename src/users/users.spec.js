const user = require('./index')

describe('User unit tests', () => {
  describe('.createController', () => {
    it('should be exist', () => {
      expect(user).toHaveProperty('createController')
    })

    it('should be a function', () => {
      expect(typeof user.createController).toBe('function')
    })

    it('should be create a singleton controller', () => {
      const controller1 = user.createController()
      const controller2 = user.createController()
      expect(controller2).toEqual(controller1)
    })
  })
})
