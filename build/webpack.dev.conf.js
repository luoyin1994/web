// base module
const webpack         = require('webpack');
const merge           = require('webpack-merge');
// own module
const pathConf        = require('./path.conf');
const webpackBaseConf = require('./webpack.base.conf');
const config          = require('./config');

module.exports = merge(webpackBaseConf, {
    devtool  : 'source-map',
    devServer: {
        // https://doc.webpack-china.org/configuration/dev-server/#devserver
        contentBase: pathConf.dev,
        port       : config.dev.port,
    },
});
