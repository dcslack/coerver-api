module.exports = function(req, res, next) {
  const curriculum = req.query.curriculum;

  app.model('registrations').find({ firstName: 'Dylan' }).then(registrations => {
    return res.json(registrations.serialize());
  });
};
