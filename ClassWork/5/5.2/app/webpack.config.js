"use strict";

module.exports = {
    entry: './src/main.jsx',

    output: {
        filename: 'bundle.js',
        path: './build'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: "babel-loader",

                query:
                {
                    presets: ["es2015","react"]
                }
            }
        ]
    }
};