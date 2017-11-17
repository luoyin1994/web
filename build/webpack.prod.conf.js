// base module
const webpack  = require('webpack');
const merge    = require('webpack-merge');
// own module
const pathConf = require('../configs/path.conf');

// plugins
// minify js
// current webpack.optimize.UglifyJsPlugin cant support es6
// see https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
const UglifyJsPlugin    = require('uglifyjs-webpack-plugin');
// auto create html
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackBaseConf = require('./webpack.base.conf');

module.exports = merge(webpackBaseConf, {
    plugins: [
        // https://github.com/webpack-contrib/uglifyjs-webpack-plugin
        new UglifyJsPlugin({
            test: /\.js($|\?)/i,
        }),
        // auto create html
        // the entry point "id=app" is necessary in the template html
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename      : 'index.html?[hash:5]',
            template      : 'index.html',
            inject        : true,
            minify        : {
                removeComments       : true,
                collapseWhitespace   : true,
                removeAttributeQuotes: true,
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency',
        }),
    ],
});
