const cors = require('cors');
const { corsWhiteList } = require('../constants');

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || corsWhiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials : true
}

module.exports = cors(corsOptions);