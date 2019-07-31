const express = require('express');

const Events = require('./events-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Events
    .find()
    .then((events) => {
      res.status(200).json(events);
    })
    .catch(err => {
      res.status(500).json({err: 'failed!!!!'});
    });
});

router.get('/:id', async (req, res) => {
  try {
    const event = await Events.findById(req.params.id);

    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ message: 'Vendor not found' });
    }
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the vendor',
    });
  }
});

router.post('/', (req, res) => {
  const eventInfo = req.body;
  
  Events.add(eventInfo)
    .then(event => {
      res.status(201).json(event);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  Events.update(id, changes)
    .then(updated => {
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'The event could not be found' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Events.remove(id)
    .then(deleted => {
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "can't find that event" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id/tasks', (req, res) => {
  res.send('List event tasks ');
});

router.post('/:id/tasks', (req, res) => {
  res.send('Add task to event');
});

router.get('/:id/purchases', (req, res) => {
  res.send('Event completed purchases ');
});

router.post('/:id/purchases', (req, res) => {
  res.send('Add item to shopping cart');
});

router.get('/:id/cart', (req, res) => {
  res.send('Shopping List for the Event');
});

module.exports = router;
