

function turnOn(id) {
    pfio.digital_write(id, 1);
    console.log("turn on: " + pfio.digital_read(id));
  }
  
  function turnOff(id) {
    pfio.digital_write(id, 0);
    console.log("turn off: " + pfio.digital_read(id));
  }



 module.exports.turnOn = turnOn;
 module.exports.turnOff = turnOff;
