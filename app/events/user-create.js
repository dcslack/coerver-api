const bcrypt = require('bcrypt');

module.exports = (req, res, next) => {
  console.log('lolz yay!!!');

  const numRounds = 10;
  const password = req.body.data.attributes.password;

  bcrypt.hash(password, numRounds, (err, hash) => {
    if (err) {
      return res.status(500).json(err);
    }

    req.body.data.attributes.password = hash;
    return next();
  });
};
