// Very basic example use of translator node package

//
// Require 
// VSM Translator 
const translator = require('vsm-translator');
// CLI parser
const args = require('minimist')(process.argv.slice(2), { string: ['_'] });

//
// Constructing "fake" iotnode Object from command line arguments
let loraPort = args._[0]; // Port LoRa message was sent on
let loraHexData = args._[1]; // Message data in hex
let ts = 1 // Timestamp input not implemented, but input unix time format for output timestamps to make sense
let size = 256 // LoRa package size, should be grabbed from DR. Needed for large messages that are split up like WiFi etc to work properly.
let rules = args._[2]; // Rules CRC can be found by translating a port 15 message with any crc. Ideally should be saved for each individual node

let iotnode = { 
    encodedData : {
      port : loraPort,
      hexEncoded : loraHexData,
      timestamp : ts,
      maxSize : size,
    },
    vsm : {
      rulesCrc32 : rules,
    },
  }

//
// Run constructed iotnode through translator
let result = {}
try {
  const returned = translator.translate(iotnode);
  result = returned.result;
} catch (e) {
  console.log("Failed translation: ", e.message);
}

// Log result into console
console.log(result)