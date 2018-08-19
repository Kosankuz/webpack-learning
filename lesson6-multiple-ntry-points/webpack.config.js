'use strict'
var path = require('path');



module.exports = {
  context: __dirname + '/frontend',        // we have used context to reflect the home , about etc dir

  entry: {
    home: "./home",                      // 1 entry point
    about: "./about"                     // 2 entry point
  },
  output: {
    path: path.resolve(__dirname, './public'),  //path where to safe
    filename: "[name].js" ,  // where to save or export
    library: "[name]"  // added a libiriary in order to export home.js
  },
  watch: true,         //this additional config set auto build
  watchOptions: {
    aggregateTimeout: 100   // after this miliseconds webpack is building bundle after module is updated
  },
  devtool: "source-map",

//  module: {
  //         loaders: [
    //           {
      //             test: /\.js$/,
        //           loader: 'babel-loader'  // babel makes code of the page readeble for older browsers
          //     }
           // ]
       // },
};
