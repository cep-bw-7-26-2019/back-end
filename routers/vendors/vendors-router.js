const express = require('express');

const router = express.Router();

router.get('/vendors', (req, res) => {
    res.send('List of active vendors')
});


router.get('/vendors/:id', (req, res) => {
    res.send('Vendor details')
});

router.post('/vendors', (req, res) => {
    res.send('Create a vendor')
});

router.put('/vendors/:id', (req, res) => {
    res.send('Update vendor information')
});

router.delete('/vendors/:id', (req, res) => {
    res.send('Inactivate a vendor')
})

module.exports = router;