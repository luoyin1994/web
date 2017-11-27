// base module
const webpack         = require('webpack');
const merge           = require('webpack-merge');
// own module
const pathConf        = require('./path.conf');
const webpackBaseConf = require('./webpack.base.conf');
const config          = require('./config');

let webpackDevConf = merge(webpackBaseConf, {
    devtool  : config.dev.sourceMap ? config.sourceMapType : false,
    devServer: {
        // https://doc.webpack-china.org/configuration/dev-server/#devserver
        contentBase: pathConf.dev,
        port       : config.dev.port,
    },
});

// whether need WebpackBundleAnalyzer
if (config.dev.bundleAnalyzer.open) {
    webpackDevConf.plugins.push(new WebpackBundleAnalyzer(config.dev.bundleAnalyzer.options));
}

module.exports = webpackDevConf;