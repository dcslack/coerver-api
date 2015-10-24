const Restle = require('restle');
const Adapter = require('restle-mongodb');
const ObjectId = require('mongodb').ObjectId;
const Promise = require('bluebird');
const schemas = require('./schemas');
const _ = require('lodash');

// setup
const url = process.env.MONGOHQ_URL;
const adapter = new Adapter({ url })
const namespace = 'api';
const port = process.env.PORT;
const app = new Restle({ namespace, port, adapter });

// models
app.register('card', schemas.card);
app.register('coach', schemas.coach);
app.register('curriculum', schemas.curriculum);
app.register('grade', schemas.grade);
app.register('group', schemas.group);
app.register('participant', schemas.participant);
app.register('program', schemas.program);
app.register('record', schemas.record);
app.register('registration', schemas.registration);
app.register('scorecard', schemas.scorecard);
app.register('session', schemas.session);
app.register('stat', schemas.stat);
app.register('user', schemas.user);

// events
app.on('user.create', require('./events/user-create'));
app.on('ready', () => console.log(`Coerver API running at port ${app.port}`));

// routes
app.route('/export', 'get', function(req, res, next) {
  const query = req.query;

  app.model('participant').findOne(query)

  .then(participant => {
    return app.model('grade').find(null, { participant: participant.id });
  })

  .then(grades => {
    return res.json(grades.serialize());
  })

  .catch(err => {
    return res.status(404).json(err);
  });
});
