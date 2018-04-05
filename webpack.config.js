const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

console.log(__dirname);

module.exports = {
    entry: './src/index.js' ,
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
       new CleanWebpackPlugin(['dist']),
       new HtmlWebpackPlugin({
           template: './src'
       })
    ]

};
