const express = require('express');
const devices = require('./routes/devices');
const leds = require('./routes/leds');
const leds = require('./routes/relais');


const app = express();
const path = require('path');

// middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('public'));


// index
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

// routes
app.use('/devices', devices);
app.use('/leds', leds);
app.use('/relais', relais);



// add the router
app.listen(process.env.port || 5000);
console.log('Running at Port 5000');