// base module
const webpack         = require('webpack');
const merge           = require('webpack-merge');
// own module
const pathConf        = require('./path.conf');
const webpackBaseConf = require('./webpack.base.conf');
const config          = require('./config');
// plugins
// clean output dir
// https://github.com/johnagan/clean-webpack-plugin
const CleanWebpackPlugin = require('clean-webpack-plugin');
// minify js
// current webpack.optimize.UglifyJsPlugin cant support es6
// https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(webpackBaseConf, {
    devtool: config.dist.sourceMap ? 'source-map' : false,
    output : {
        path: pathConf.dist,
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            // https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional
            root: pathConf.root,
        }),
        // https://doc.webpack-china.org/guides/production/
        // https://vue-loader.vuejs.org/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
        // https://github.com/webpack-contrib/uglifyjs-webpack-plugin
        new UglifyJsPlugin({
            test: /\.js($|\?)/i,
        }),
    ],
})
;
