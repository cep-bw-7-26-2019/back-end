const express = require('express');

const Events = require('./events-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Events.find()
    .where({ user_id: req.user.id })
    .then(events => {
      res.status(200).json(events);
    })
    .catch(err => {
      res.status(500).json({ err: 'Could not retrieve the list of events' });
    });
});

router.get('/:id', async (req, res) => {
  try {
    const event = await Events.findById(req.params.id);

    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    // log error to server  
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the event',
    });
  }
});

router.post('/', (req, res) => {
  const eventInfo = { ...req.body, user_id: req.user.id };

  if (eventIsValid(eventInfo)) {
    Events.add(eventInfo)
      .then(event => {
        console.log('router event', event);
        res.status(201).json(event);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  } else {
    res
      .status(400)
      .json({ message: 'Please provide a name and a user id for the event' });
  }
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
  res.send('Add task to event');
});

router.post('/:id/tasks', (req, res) => {
  const taskInfo = { ...req.body, event_id: req.params.id };

  Events.findById(req.params.id).then(event => {
    if (event && event.user_id === req.user.id) {
      Events.addTask(taskInfo)
        .then(event => {
          res.status(201).json(event);
        })
        .catch(() => {
          res
            .status(500)
            .json({ message: 'Error adding the task to the event' });
        });
    } else {
      res.status(400).json({ message: 'You cannot add tasks to this event' });
    }
  });
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

function eventIsValid(event) {
  return event.name && event.user_id;
}

module.exports = router;
