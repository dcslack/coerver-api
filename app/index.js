const Restle = require('restle');
const schemas = require('./schemas');

// setup
const namespace = 'api';
const port = process.env.PORT;
const app = new Restle({ namespace, port });

app.register('card', schemas.card);
app.register('coach', schemas.coach);
app.register('curriculum', schemas.curriculum);
app.register('grade', schemas.grade);
app.register('group', schemas.group);
app.register('participant', schemas.participant);
app.register('session', schemas.session);
app.register('stat', schemas.stat);
app.register('user', schemas.user);

app.on('ready', () => console.log(`Coerver API running at port ${app.port}`));
