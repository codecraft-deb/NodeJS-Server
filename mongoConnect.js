const mongoose = require('mongoose');

const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb+srv://debparna2006:i7ercptTueaKYxqz@cluster0.sbb6w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connected to MongoDB successfully');
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToMongo;
