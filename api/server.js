const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const authRouter = require('../routers/auth/auth-router.js');
const userRouter = require('../routers/users/users-router.js');
const eventRouter = require('../routers/events-router/events-router.js');
const purchaseRouter = require('../routers/purchases/purchase-router.js');
const taskRouter = require('../routers/tasks/task-router.js');
const vendorRouter = require('../routers/vendors/vendors-router.js');

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
    res.send('Eventrs Assemble!!')
});


module.exports = server; 