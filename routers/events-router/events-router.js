const express = require('express');

const Events = require('./events-model.js');

const router = express.Router();

router.get('/events', (req, res) => {
    events
    .find()
    .then(() => {
        res.status(200).json(events)
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res)  => {
    
    res.send(' View event details')
});

router.post('/events', (req, res) => {
    const eventInfo = req.body;
    console.log(eventInfo);
    
    Events.add(eventInfo).then(event => {
        res.status(201).json(event);
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

router.put('/events/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Events.update(id, changes).then(updated => {
        if (updated) {
            res.status(200).json(updated);
        } else {

        }
    })
    .catch(error => {
        res.status(500).json(error);
    })
});

router.delete('/events/:id', (req, res) => {
    const { id } = req.params;
    
    Events.remove(id)
    .then(deleted => {
        if(deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({message: "can't find that event"})
        }
    })
    .catch(error => {
        res.status(500).json(error);
    })
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