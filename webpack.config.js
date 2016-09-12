"use strict";

module.exports = {
    entry: { "ClassWork/1/1.1/build/bundle": "./ClassWork/1/1.1/jsx/main.jsx" },
    output: {
        filename: "[name].js"
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
               {
                   presets: ['react']
               }
            }
        ]
    }
};