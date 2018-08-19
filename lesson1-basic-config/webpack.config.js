'use strict'
var path = require('path');

module.exports = {
  entry: "./home",    //entry point - what to build
  output: {
    path: path.resolve(__dirname, ''),  //path where to safe
    filename: "build.js"   // where to save or export
  }
};
