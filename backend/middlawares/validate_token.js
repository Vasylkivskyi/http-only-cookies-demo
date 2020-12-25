const { SECRET_TOKEN } = require('../constants');

module.exports = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(400).send('Token not provided 🤭');
    return ;
    const err = new Error('Token not provided 🤭');
    next();
  }
  if (token !== SECRET_TOKEN) {
    res.status(400).json('Token not provided 🤭');
    return;
  }
  next();
}