const express = require('express');

const Purchase = require('./purchases-model.js');

const router = express.Router();

router.put('/purchases/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Purchases.update(id, changes).then(updated => {
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ message: 'The purchase id could not be found' });
        }
    })
    .catch(error => {
        res.status(500).json(error);
    })
});


router.delete('/purchases/:id', (req, res) => {
    const { id } = req.params;

    Purchase.remove(id)
    .then(deleted => {
        if(deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: "can't find that task" });
        }
    }) 
    .catch(error => {
        res.status(500).json(error);
    })
});

module.exports = router;