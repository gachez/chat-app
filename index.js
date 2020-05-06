const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Message = require('./models/message.model');

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

const dbUrl = "mongodb+srv://dbUser:dbPassword@cluster0-cu3wb.gcp.mongodb.net/test?retryWrites=true&w=majority";
//mongoose connection
mongoose.connect(dbUrl ,{useUnifiedTopology: true, useNewUrlParser: true}, (err) => { 
    if(err) {
        console.log(err);
    }
    console.log("mongoose connection succesful");
 });

app.listen(3003, () => {
    console.log('port listening at port 3003');
});