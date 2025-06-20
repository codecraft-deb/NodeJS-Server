const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    summary: {
        type: String
    },
    publicationYear: {
        type: Number
    }
});

module.exports = mongoose.model('Books', BooksSchema);
