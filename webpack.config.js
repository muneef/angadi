var path = require('path');  
var webpack = require('webpack');  
var autoprefixer = require('autoprefixer');

module.exports = {  
  entry: [
    path.join(__dirname, './assets/js/webpack.entry.js')
  ],
  output: {
   path: __dirname + '/assets/dist',
   filename: 'bundle.js'
  },
}
