const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const eventsRouter = require('../events-router/events-router.js.js');
const purchaseRouter = require('../purchases/purchase-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/events', eventsRouter);
server.use('/api/purchases', purchaseRouter);

server.get('/', (req, res) => {
    res.send('Eventrs Assemble!!')
});


module.exports = server; 