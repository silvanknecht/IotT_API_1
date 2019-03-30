const express = require("express");
//const router = require('express-promise-router');
const router = express.Router();
const pfio = require("piface");
pfio.init();

// import controllers
const LedController = require("../controllers/LedController");

router.get("/leds", (req, res, next) => {
  res.send("all states of the leds");
});

router.post("/leds/on/:id", (req, res, next) => {
  let id = req.params.id;
  if ((id >= 0) & (id < 8)) {
    turnOn(id);
    res.send("Led with Id: " + id + "turned on");
  } else {
    res.status(400).send("Invalid Id");
  }
});
router.post("/leds/off/:id", (req, res, next) => {
  let id = req.params.id;
  if ((id >= 0) & (id < 8)) {
    turnOff(id);
    res.send("Led with Id: " + id + "turned off");
  } else {
    res.status(400).send("Invalid Id");
  }
});


function turnOn(id) {
  pfio.digital_write(id, 1);
  console.log("turn on: " + pfio.digital_read(id));
}

function turnOff(id) {
  pfio.digital_write(id, 0);
  console.log("turn off: " + pfio.digital_read(id));
}

module.exports = router;
