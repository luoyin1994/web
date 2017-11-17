// base module
const webpack = require('webpack');
const merge   = require('webpack-merge');

// own module
const pathConf = require('../configs/path.conf');

// plugins
const UglifyJsPlugin    = webpack.optimize.UglifyJsPlugin;
// auto create html
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackBaseConf = require('./webpack.base.conf');
module.exports        = merge(webpackBaseConf, {
    plugins: [
        // new UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        // }),
        // auto create html
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html?[hash:5]',
            template: 'index.html',
            inject  : true,
            minify  : {
                removeComments       : true,
                collapseWhitespace   : true,
                removeAttributeQuotes: true,
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
    ],
});
