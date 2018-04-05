const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

console.log(__dirname);

module.exports = {
    entry: './src/index.js' ,
    output: {
        path: path.join(__dirname + '/dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),       
        port: 8000
    },
    plugins: [
       new CleanWebpackPlugin(['dist']),
       new HtmlWebpackPlugin({
           template: './src/index.html'
       })
    ]

};
