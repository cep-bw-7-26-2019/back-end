const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const restricted = require('../auth/restricted-middleware.js');
const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/users-router.js');
const eventRouter = require('../events/events-router.js');
const taskRouter = require('../tasks/task-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, userRouter);
server.use('/api/events', restricted, eventRouter);
server.use('/api/tasks', restricted, taskRouter);

server.get('/', (req, res) => {
  res.send('Eventrs Assemble!!');
});

module.exports = server;
