const express = require("express");
const router = express.Router();
const pfio = require("piface");
pfio.init();

// import controllers
const LedController = require("../controllers/LedController");

router.get("/", (req, res, next) => {
  res.send("all states of the leds");
});

router.post("/on/:id", (req, res, next) => {
  let id = req.params.id;
  if ((id >= 0) & (id < 8)) {
    LedController.turnOn(id);
    res.send("Led with Id: " + id + "turned on");
  } else {
    res.status(400).send("Invalid Id");
  }
});
router.post("/off/:id", (req, res, next) => {
  let id = req.params.id;
  if ((id >= 0) & (id < 8)) {
    LedController.turnOff(id);
    res.send("Led with Id: " + id + "turned off");
  } else {
    res.status(400).send("Invalid Id");
  }
});

module.exports = router;
