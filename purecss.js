const purify = require('purify-css');
var content = ['./src/js/*.js'];
var css = ['./default-styles/*.scss'];

var options = {
  // Will write purified CSS to this file.
  output: './src/scss/purified.css'
};

purify(content, css, options);