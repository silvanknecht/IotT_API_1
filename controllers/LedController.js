const pfio = require("piface");
pfio.init();

function turnOn(id) {
  console.log("turn on: " + pfio.digital_read(id));
  pfio.digital_write(id, 1);
}

function turnOff(id) {
  console.log("turn off: " + pfio.digital_read(id));
  pfio.digital_write(id, 0);
}

module.exports.turnOn = turnOn;
module.exports.turnOff = turnOff;
