# webpack-learning
Basic Web Pack Setup:

Before we begin, make sure you have a fresh version of Node.js installed.


mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev


We also need to adjust our package.json file in order to make sure we mark our package as private, as well as removing the main entry. This is to prevent an accidental publish of your code.

package.json

  {
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
+   "private": true,
-   "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.0.1",
      "webpack-cli": "^2.0.9"
    },
    "dependencies": {}
  }

To run:

webpack js_file1.js js_file2.js  

Bundle is going to be exported to /dist/main.js
