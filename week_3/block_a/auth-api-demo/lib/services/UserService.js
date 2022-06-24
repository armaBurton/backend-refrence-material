const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = class UserService {
  static async create({ username, password }) {
    const passwordHash = bcrypt.hashSync(
      password,
      Number(process.env.SALT_ROUNDS)
    );
    return User.insert({
      username,
      passwordHash,
    });
  }

  static async signIn({ username, password }) {
    // check for existing user
    const user = await User.findByUsername(username);
    if (!user) throw new Error('invalid username/password');

    // if user exists, compare hashed passwords
    const passwordsMatch = bcrypt.compareSync(password, user.passwordHash);
    if (!passwordsMatch) throw new Error('invalid username/password');

    // if passwords match, return user
    return user;
  }
};
