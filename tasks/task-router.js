const express = require('express');

const Tasks = require('./tasks-model.js');

const router = express.Router();

router.put('/tasks/:id', (req, res) => {
        const id = req.params.id;
        const changes = req.body;
    
        Tasks.update(id, changes).then(updated => {
            if (updated) {
                res.status(200).json(updated);
            } else {
                res.status(404).json({ message: 'The task could not be found' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        })
});

router.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    
    Tasks.remove(id)
    .then(deleted => {
        if(deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({message: "can't find that task"})
        }
    })
    .catch(error => {
        res.status(500).json(error);
    })
});


module.exports = router;