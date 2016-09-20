/// <binding />
"use strict";

module.exports = {
    entry: {
        //"ClassWork/1/1.1/build/bundle": "./ClassWork/1/1.1/jsx/main.jsx",
        //"ClassWork/1/1.2/build/bundle": "./ClassWork/1/1.2/jsx/main.jsx",
        //"ClassWork/1/1.3/build/bundle": "./ClassWork/1/1.3/jsx/main.jsx",
        //"HomeWork/1/1.1/build/bundle": "./HomeWork/1/1.1/jsx/main.jsx",
        //"HomeWork/1/1.2/build/bundle": "./HomeWork/1/1.2/jsx/main.jsx",
        //"HomeWork/1/1.3/build/bundle": "./HomeWork/1/1.3/jsx/main.jsx",
        //"ClassWork/2/2.1/build/bundle": "./ClassWork/2/2.1/jsx/main.jsx",
        //"ClassWork/2/2.2/build/bundle": "./ClassWork/2/2.2/jsx/main.jsx",
        //"ClassWork/2/2.3/build/bundle": "./ClassWork/2/2.3/jsx/main.jsx",
        //"HomeWork/2/2.1/build/bundle": "./HomeWork/2/2.1/jsx/main.jsx",
        //"HomeWork/2/2.2/build/bundle": "./HomeWork/2/2.2/jsx/main.jsx",
        //"HomeWork/2/2.3/build/bundle": "./HomeWork/2/2.3/jsx/main.jsx",
        //"ClassWork/3/3.1/build/bundle": "./ClassWork/3/3.1/jsx/main.jsx",
        //"ClassWork/3/3.2/build/bundle": "./ClassWork/3/3.2/jsx/main.jsx",
        //"ClassWork/3/3.3/build/bundle": "./ClassWork/3/3.3/jsx/main.jsx",
        //"HomeWork/3/3.1/build/bundle": "./HomeWork/3/3.1/jsx/main.jsx",
        //"HomeWork/3/3.2/build/bundle": "./HomeWork/3/3.2/jsx/main.jsx",
        //"HomeWork/3/3.3/build/bundle": "./HomeWork/3/3.3/jsx/main.jsx",
        //"ClassWork/4/4.1/build/bundle": "./ClassWork/4/4.1/jsx/main.jsx",
        //"ClassWork/4/4.2/build/bundle": "./ClassWork/4/4.2/jsx/main.jsx",
        //"ClassWork/4/4.3/build/bundle": "./ClassWork/4/4.3/jsx/main.jsx",
        //"HomeWork/4/4.1/build/bundle": "./HomeWork/4/4.1/jsx/main.jsx",
        //"HomeWork/4/4.2/build/bundle": "./HomeWork/4/4.2/jsx/main.jsx",
        //"HomeWork/4/4.3/build/bundle": "./HomeWork/4/4.3/jsx/main.jsx",
        //"ClassWork/5/5.2/app/build/bundle": "./ClassWork/5/5.2/app/src/main.jsx",
        //"ClassWork/6/6.1/build/bundle": "./ClassWork/6/6.1/jsx/main.jsx",
        //"ClassWork/6/6.2/build/bundle": "./ClassWork/6/6.2/jsx/main.jsx",
        //"ClassWork/6/6.3/build/bundle": "./ClassWork/6/6.3/jsx/main.jsx",
        //"HomeWork/6/6.1/build/bundle": "./HomeWork/6/6.1/jsx/main.jsx",
        //"HomeWork/6/6.2/build/bundle": "./HomeWork/6/6.2/jsx/main.jsx",
        //"HomeWork/6/6.3/build/bundle": "./HomeWork/6/6.3/jsx/main.jsx",
        //"ClassWork/7/7.1/build/bundle": "./ClassWork/7/7.1/src/main.jsx",
        //"ClassWork/7/7.2/build/bundle": "./ClassWork/7/7.2/src/main.jsx",
        //"ClassWork/7/7.3/build/bundle": "./ClassWork/7/7.3/src/main.jsx",
        //"HomeWork/7/7.1/build/bundle": "./HomeWork/7/7.1/src/main.jsx",
        //"HomeWork/7/7.2/build/bundle": "./HomeWork/7/7.2/src/main.jsx",
        "ClassWork/8/8.1/build/bundle": "./ClassWork/8/8.1/src/main.jsx",
        //"ClassWork/8/8.2/build/bundle": "./ClassWork/8/8.2/src/main.jsx",
        //"ClassWork/8/8.3/build/bundle": "./ClassWork/8/8.3/src/main.jsx",
      
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
                   presets: ['react', "es2015"],
                   plugins: ["transform-object-rest-spread"]

               },
                exclude: /node_modules/
            }
        ]
    }
};