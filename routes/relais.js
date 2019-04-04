const express = require("express");
const router = express.Router();


// import controllers
const RelaisController = require("../controllers/RelaisController");

router.get("/", (req, res, next) => {
  res.send("all states of the relais");
});

router.post("/on/:id", (req, res, next) => {
  let id = req.params.id;
  if ((id >= 0) & (id < 2)) {
    RelaisController.turnOn(id);
    res.send("Relais with Id: " + id + "turned on");
  } else {
    res.status(400).send("Invalid Id");
  }
});
router.post("/off/:id", (req, res, next) => {
  let id = req.params.id;
  if ((id >= 0) & (id < 2)) {
    RelaisController.turnOff(id);
    res.send("Relais with Id: " + id + "turned off");
  } else {
    res.status(400).send("Invalid Id");
  }
});

module.exports = router;
