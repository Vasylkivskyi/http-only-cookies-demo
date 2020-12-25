const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { SECRET_TOKEN, USER } = require('./constants');
const corsMiddleware = require('./middlawares/allow_cross_domain');

const PORT = process.env.PORT || 7878;
const app = express();
app.use(corsMiddleware)
app.use(cookieParser());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (String(email) === USER.email && String(password) === USER.password) {
    res.status(200);
    res.cookie(
      'token', SECRET_TOKEN, {
      maxAge: 10000,
      httpOnly: true,
    });
    res.json('Token was sent');
  } else {
    res.statusCode = 404;
    res.json('User not found 😔');
  }
});

app.get('/secret', (req, res) => {
  res.status(200)
  res.json('Route "/secret" is working 😊');
});


app.listen(PORT, () => console.log(`Listening ${PORT}`));