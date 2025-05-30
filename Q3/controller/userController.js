const User = require('../model/user');

function createUser(req, res) {
  const { name, email, password, phone, dob, address } = req.body;

  const newUser = new User({ name, email, password, phone, dob, address });

  newUser.save()
    .then(user => res.status(201).json({ message: ' User saved successfully', user }))
    .catch(err => res.status(500).json({ error: err.message }));
}

// GET: Get all users
function getAllUsers(req, res) {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
}

module.exports = {
  createUser,
  getAllUsers
};
