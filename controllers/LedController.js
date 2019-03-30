const pfio = require("piface");
pfio.init();

function turnOn(id) {
  pfio.digital_write(id, 1);
}

function turnOff(id) {
  pfio.digital_write(id, 0);
}

module.exports.turnOn = turnOn;
module.exports.turnOn = turnOff;
