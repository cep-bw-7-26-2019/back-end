const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/users-router.js');
const eventRouter = require('../events/events-router.js');
const purchaseRouter = require('../purchases/purchase-router.js');
const taskRouter = require('../tasks/task-router.js');
const vendorRouter = require('../vendors/vendors-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/events', eventRouter);
server.use('/api/purchases', purchaseRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/vendors', vendorRouter);

server.get('/', (req, res) => {
    res.send('Eventrs Assemble!!');
});

module.exports = server;
