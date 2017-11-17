// base module
const webpack         = require('webpack');
const merge           = require('webpack-merge');
// own module
const pathConf        = require('../configs/path.conf');
const webpackBaseConf = require('./webpack.base.conf');

// plugins
// clean output dir
// https://github.com/johnagan/clean-webpack-plugin
const CleanWebpackPlugin = require('clean-webpack-plugin');
// minify js
// current webpack.optimize.UglifyJsPlugin cant support es6
// https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
const UglifyJsPlugin    = require('uglifyjs-webpack-plugin');
// auto create html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// copy custom assets
// https://github.com/webpack-contrib/copy-webpack-plugin
// use gracefulFs to avoid "EMFILE: too many open files" or "ENFILE: file table overflow"
// https://github.com/webpack-contrib/copy-webpack-plugin#emfile-too-many-open-files-or-enfile-file-table-overflow
const fs         = require('fs');
const gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(fs);
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(webpackBaseConf, {
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            // https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional
            root: pathConf.root,
        }),
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
                // removeAttributeQuotes: true,
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency',
        }),
        // copy custom assets
        new CopyWebpackPlugin([
            {
                from: pathConf.assets,
                to  : 'assets',
            },
        ]),
    ],
});
