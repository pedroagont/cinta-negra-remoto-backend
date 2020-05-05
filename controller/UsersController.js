const { UsersService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      const user = await UsersService.create(req.body);
      res.status(201).send(user);
    } catch (err) {
      res.status(400).send({ message: 'Error creating user', err })
    }
  },
  find: async (req, res) => {
    try {
      const user = await UsersService.find();
      res.status(201).send(user);
    } catch (err) {
      res.status(400).send({ message: 'Users not found', err })
    }
  }
}
