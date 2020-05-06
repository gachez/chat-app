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
},
{timestamps: true});
 
module.exports = mongoose.model('Message', Message);