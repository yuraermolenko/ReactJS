"use strict";

module.exports = {
    entry: {
        "ClassWork/1/1.1/build/bundle": "./ClassWork/1/1.1/jsx/main.jsx",
        "ClassWork/1/1.2/build/bundle": "./ClassWork/1/1.2/jsx/main.jsx",
        "ClassWork/1/1.3/build/bundle": "./ClassWork/1/1.3/jsx/main.jsx",
        "HomeWork/1/1.1/build/bundle": "./HomeWork/1/1.1/jsx/main.jsx"
    },
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