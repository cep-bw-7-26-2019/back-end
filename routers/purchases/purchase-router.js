const express = require('express');

const router = express.Router();

router.put('/purchases/:id', (req, res) => {
    res.send('Update purchase (used to mark as completed)')
});


router.delete('/purchases/:id', (req, res) => {
    res.send('Delete purchase')
});

module.exports = router;