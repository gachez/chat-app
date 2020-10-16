const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const Message = require('./models/message.model');

const app = express();


const http = require('http').Server(app);
const io = require('socket.io')(http);
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const dbUrl = "PLACE YOUR MONGODB URL HERE";
//mongoose connection
mongoose.connect(dbUrl ,{useUnifiedTopology: true, useNewUrlParser: true}, (err) => { 
    if(err) {
        console.log(err);
    }
    console.log("mongoose connection succesful");
 });

 //routes and their handlers
 app.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send( messages);
    })
  });

  io.on('connection', () =>{
    console.log('a user is connected')
   });

  app.post('/messages', (req, res) => {
    let message = new Message(req.body);
    message.save((err) =>{
      if(err){
        console.log('error: ' + err)  
        res.sendStatus(500);
      }
      res.sendStatus(200);
    })
  });

app.listen(3003, () => {
    console.log('port listening at port 3003');
});
