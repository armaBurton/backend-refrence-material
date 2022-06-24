const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Password Hashing
const password = 'ilovechicken';
const hash = bcrypt.hashSync(password, 1);
const doPasswordsMatch = bcrypt.compareSync('ilovetuna', hash);
console.log('=========== HASH ===========');
console.log(hash);
console.log(doPasswordsMatch);

// JSON Web Tokens
/// Create a JWT:
const token = jwt.sign(
  { id: '1', username: 'ruby' },
  'f@#g9sfj@%!cva8sdf7!@$f0aa',
  {
    expiresIn: '1 day',
  }
);
console.log('=========== TOKEN ===========');
console.log(token);
/// Verify the contents and return the payload:
const payload = jwt.verify(token, 'f@#g9sfj@%!cva8sdf7!@$f0aa');
console.log('=========== PAYLOAD ===========');
console.log(payload);
