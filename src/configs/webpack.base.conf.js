// require base module
const webpack = require('webpack');
const path    = require('path');

// require plugins
// auto create html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// extract css
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// export webpack config
module.exports = {
    entry  : {
        main: '',
    },
    output : {},
    module : {
        rules: {},
    },
    plugins: [],
};