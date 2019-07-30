const express = require('express');

const router = express.Router();

router.put('/tasks/:id', (req, res) => {
    res.send('Update task details')
});

router.delete('/tasks/:id', (req, res) => {
    res.send('Remove task')
});



module.exports = router;