var RewirePlugin = require("rewire-webpack");

module.exports = {
    entry: './entry.js',
    output: {
        filename: 'entry.out.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    },
    plugins: [new RewirePlugin()]
};
