const express = require('express');
//const router = require('express-promise-router');
const router = express.Router();

// import controllers
const DeviceController = require('../controllers/DeviceController');

// require sensors
const tempSensor = require('../Devices/tempSensor');
const brightnessSensor = require('../Devices/brightnessSensor');

router.get('/', (req, res, next) =>{
    console.log(tempSensor);
    res.status(200).json({tempSensor,brightnessSensor});

});

module.exports = router;