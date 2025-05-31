const express = require('express');

const router = express.Router();
const Books = require('./mongoSchema');

// read
router.get('/', async (req, res) => {
    try {
        const data = await Books.find();
        return res.status(200).json({data: data});
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// create
router.post('/', async (req, res) => {
    try {
        const data =  new Books(req.body);
        await data.save();
        return res.status(201).json({message: 'Book created successfully'});
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;

