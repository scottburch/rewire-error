var RewirePlugin = require("rewire-webpack");
var path = require('path');
var glob = require('glob');
var fs = require('fs');
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var BeepPlugin = require('webpack-beep-plugin');

var definePlugin = new webpack.DefinePlugin({
    PRODUCTION: process.env.NODE_ENV === 'production'
});


var commonsChunkPlugin = new CommonsChunkPlugin({
    name: "vendor",
    filename: 'vendor.js',
     minChunks: Infinity,
});

var sourceMap = new webpack.SourceMapDevToolPlugin({
    test:/\.js$/,
    exclude: 'vendor.js',
});

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'react-bootstrap', 'reactive-store', 'lodash', 'jquery', 'properties'],
        component: glob.sync(__dirname+'/entry.js')
    },
    output: {
        filename: '[name].tests.js'
    },
    module: {
        loaders: [
            { test: /.*messagebundles.*/, loader: 'raw'},
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    },
    node: {
        fs: "empty"
    },
    plugins: [
        new RewirePlugin(),
        definePlugin,
        sourceMap,
        commonsChunkPlugin,
        new BeepPlugin()
    ]
};
