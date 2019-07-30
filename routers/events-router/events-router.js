const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('List of active events')
});

router.get('/:id', (req, res)  => {
    res.send(' View event details')
});

router.post('/events', (req, res) => {
    res.send('Create a new Event ')
});

router.put('/events/:id', (req, res) => {
    res.send('Update event details ')
});

router.delete('/events/:id', (req, res) => {
    res.send('Inactivate and event')
});

router.get('/events/:id/tasks', (req, res) => {
    res.send('List event tasks ')
});

router.post('events/:id/tasks', (req, res) => {
    res.send('Add task to event')
});

router.get('/events/:id/purchases', (req, res) => {
    res.send('Event completed purchases ')
});

router.post('/events:id/purchases', (req, res) => {
    res.send('Add item to shopping cart')
})

router.get('/events/:id/cart', (req, res) => {
    res.send('Shopping List for the Event')
})



module.exports = router;