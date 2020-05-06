const mongoose = require('mongoose');

const Message = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    }
});
 