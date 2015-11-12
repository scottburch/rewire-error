var RewirePlugin = require("rewire-webpack");

module.exports = {
    entry: './entry.js',
    output: {
        filename: 'entry.out.js'
    },
    plugins: [new RewirePlugin()]
};
