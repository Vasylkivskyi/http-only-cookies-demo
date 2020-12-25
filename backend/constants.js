const SECRET_TOKEN = 'APP SUPER SECRET TOKEN';
const USER = {
  email: 'test@test.com',
  password: 'testPassword1234',
}

const corsWhiteList = ['http://localhost:3000'];
const EXPIRATION = 20 * 1000;

module.exports = {
  SECRET_TOKEN,
  USER,
  EXPIRATION,
  corsWhiteList,
}