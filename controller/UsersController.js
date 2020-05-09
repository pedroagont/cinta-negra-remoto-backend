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
      res.status(200).send(user);
    } catch (err) {
      res.status(400).send({ message: 'Users not found', err })
    }
  },
  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UsersService.findById(id);
      res.status(200).send(user);
    } catch (err) {
      res.status(400).send({ message: 'User not found', err })
    }
  },
  findByIdAndUpdate: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const user = await UsersService.findById(id);
      const updatedUser = await UsersService.update(user, body);
      res.status(200).send(updatedUser);
    } catch (err) {
      res.status(400).send({ message: 'User not found', err })
    }
  },
  findByIdAndDelete: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UsersService.findById(id);
      await UsersService.update(user, { is_active: false });
      res.status(204).send();
    } catch (err) {
      res.status(400).send({ message: 'User not found', err })
    }
  },
  signup: async (req, res) => {
    try {
      const user = await UsersService.create(req.body);
      res.status(201).send({ message: 'Sign up successful', user });
    } catch (err) {
      res.status(400).send({ message: 'Failed to sign up', err })
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UsersService.findByEmail(email);
      if (!user) res.status(404).send({ message: 'User not found', err });
      const isMatch = UsersService.comparePassword(password, user.password);
      if (!isMatch) res.status(400).send({ message: 'Invalid credentials', err });
      // TODO: Devolver el JWT
      res.status(201).send({ message: 'Log in successful', user });
    } catch (err) {
      res.status(400).send({ message: 'Failed to log in', err })
    }
  },
}
