// plugins
// extract css
// https://github.com/webpack-contrib/extract-text-webpack-plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports          = {
    loaders: {
        css: ExtractTextPlugin.extract({
            use       : [
                'css-loader',
                'stylus-loader',
                // 'sass-loader'
            ],
            fallback  : 'vue-style-loader', // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
            publicPath: '../',
        }),
    },
};
