var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const extractPost = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry:'./assets/src/webpack.entry.js',
    output: {
      path: path.resolve(__dirname, './assets/built'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/, 
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]'
              }
            },
            'postcss-loader'
          ]
        })
        },
      ]
    },
    plugins: [
        extractPost,
        new webpack.LoaderOptionsPlugin({
            options: {
            context: __dirname,
            postcss: [ autoprefixer ]
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            }
        }),
    ],
};