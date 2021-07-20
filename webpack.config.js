const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var path = require('path')

module.exports = {
    entry: ['@babel/polyfill','./test/index.js'],
    resolve: {
        alias:{
            // vue: "@vue/runtime-dom"
        }
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './test/index.html',
        }),
        new VueLoaderPlugin(),
    ]
};