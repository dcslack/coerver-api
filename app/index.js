const Restle = require('restle');
const schemas = require('./schemas');

// setup
const namespace = 'api';
const port = process.env.PORT;
const app = new Restle({ namespace, port });

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
app.route('/export', require('./routes/export'));
