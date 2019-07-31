const express = require('express');

const Vendors = require('./vendors-model.js')

const router = express.Router();

router.get('/vendors', (req, res) => {
    vendors
    .find()
    .then(() => {
        res.status(200).json(vendors)
    })
    .catch(err => {
        res.status(500).json(err);
    });
});


router.get('/vendors/:id', async (req, res) => {
    try {
        const vendor = await Vendors.findById(req.params.id);

    if (vendor) {
        res.status(200).json(vendor);
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

router.post('/vendors', (req, res) => {
        const vendorInfo = req.body;
        console.log(vendorInfo);
        
        Vendors.add(vendorInfo).then(vendor => {
            res.status(201).json(vendor);
        })
        .catch(error => {
            res.status(500).json(error)
        })
    });

router.put('/vendors/:id', (req, res) => {
        const id = req.params.id;
        const changes = req.body;
    
        Vendors.update(id, changes).then(updated => {
            if (updated) {
                res.status(200).json(updated);
            } else {
                res.status(404).json({ message: 'The vendor could not be found' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        })
    });


router.delete('/vendors/:id', (req, res) => {
    const { id } = req.params;
    
    Vendors.remove(id)
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


module.exports = router;