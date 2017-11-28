// base module
const webpack         = require('webpack');
const merge           = require('webpack-merge');
// own module
const pathConf        = require('./path.conf');
const webpackBaseConf = require('./webpack.base.conf');
const config          = require('./config');
const pkg             = require('../package.json');

// plugins
// FriendlyErrors
// https://github.com/geowarin/friendly-errors-webpack-plugin
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

let webpackDevConf = merge(webpackBaseConf, {
        devtool  : config.dev.sourceMap ? config.sourceMapType : false,
        devServer: {
            // https://doc.webpack-china.org/configuration/dev-server/#devserver
            contentBase: pathConf.dev,
            port       : config.dev.port,
            quiet      : true,
        },
        plugins  : [
            new FriendlyErrorsWebpackPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${config.dev.host}:${config.dev.port}`],
                },
                onErrors              : function() {
                    const notifier = require('node-notifier');

                    return (severity, errors) => {
                        if (severity !== 'error') {
                            return;
                        }
                        const error = errors[0];

                        const filename = error.file && error.file.split('!').pop();
                        notifier.notify({
                            title   : pkg.name,
                            message : severity + ': ' + error.name,
                            subtitle: filename || '',
                            icon    : pathConf.logoIcon,
                        });
                    };
                },
            }),
        ],
    })
;

// whether need WebpackBundleAnalyzer
if (config.dev.bundleAnalyzer.open) {
    // bundle Analysis
    // https://webpack.js.org/guides/code-splitting/#bundle-analysis
    const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackDevConf.plugins.push(new WebpackBundleAnalyzer(config.dev.bundleAnalyzer.options));
}

module.exports = webpackDevConf;