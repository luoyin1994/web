// base module
const webpack = require('webpack');

// own module
const pathConfig = require('../configs/path.conf');

// plugins
// extract css
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
// extract commonChunk
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
// export webpack config
module.exports           = {
    context: pathConfig.src,
    entry  : {
        main: './main.js',
    },
    output : {
        path         : pathConfig.dist,
        filename     : '[name].js?[hash:5]',
        chunkFilename: '[name].js?[hash:5]',
    },
    module : {
        rules: [
            {
                test: /\.css$/,
                use : ExtractTextPlugin.extract({
                    fallback  : 'style-loader',
                    use       : 'css-loader',
                    publicPath: '../',
                }),
            },
            {
                test: /\.vue$/,
                use : 'vue-loader',
            },
            // load image
            {
                test   : /\.(png|svg|jpg|gif)$/,
                loader : 'file-loader',
                options: {
                    // extract image
                    name: 'images/[name].[ext]?[hash:5]',
                },
            },
            // load font
            {
                test   : /\.(woff|woff2|eot|ttf|otf)$/,
                loader : 'file-loader',
                options: {
                    // extract font
                    name: 'fonts/[name].[ext]?[hash:5]',
                },
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].css?[hash:5]',
        }),
        // extract runtime and manifest
        new CommonsChunkPlugin({
            name    : ['runtime'],
            filename: '[name].js?[hash:5]',
        }),
    ],
};