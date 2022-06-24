const User = require('../models/User');
const { exchangeCodeForToken, getUserProfile } = require('../utils/github');

module.exports = class UserService {
  static async create(code) {
    // 2. exchange code for token
    const token = await exchangeCodeForToken(code);
    // token === 'MOCKED_ACCESS_TOKEN'

    // 3. get the user information from Github using the token
    const profile = await getUserProfile(token);
    // profile === { username: 'test_user', photoUrl: 'https://example.com/photo.png' }

    // 4. create (or fetch) a user in our database using the Github username
    let user = await User.findByUsername(profile.username);

    if (!user) {
      user = await User.insert(profile);
    }

    return user;
  }
};
