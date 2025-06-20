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

// update
router.patch('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const data = await Books.findById({ _id: id });
        if (data) {
            return res.status(200).json({message: 'Book updated successfully'});
        } else {
            return res.status(404).json({message: 'Book not found'});
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});

// delete
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const data = await Books.findByIdAndDelete({_id: id});
        if (data) {
            return res.status(200).json({message: 'Book deleted successfully'});
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;

