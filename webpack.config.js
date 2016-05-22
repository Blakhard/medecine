'use strict';
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
module.exports = {
    context: __dirname + '/src',
    entry: {
        'js/app':"./scripts/app.js",
        'style/style':"./style/style.scss"
    },
    output: {
        path: __dirname + '/public',
        filename: "[name].js"
    },
    resolve:{
      extensions: ['', '.js', '.scss', '.png']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: path.join(__dirname, 'src/style'),
                loaders: ["react-hot", "babel?presets[]=react,presets[]=es2015,plugins[]=transform-object-rest-spread"]
            },
            {
                test: /\.scss$/,
                exclude: 'img',
                loader: ExtractTextPlugin.extract("css!postcss!sass")
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'file?name=img/[name].[ext]'
            }
        ]
    },
    postcss:[ autoprefixer({browsers: ['last 2 versions']})],
    resolveLoader:{
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader','*'],
        extensions: ['','.js']
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {allChunks: true})
    ],
    watch: true


};