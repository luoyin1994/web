// base module
const webpack = require('webpack');

// own module
const pathConf = require('./path.conf');

// plugins
// extract css
// https://github.com/webpack-contrib/extract-text-webpack-plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// extract commonChunk
// https://webpack.js.org/plugins/commons-chunk-plugin/
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    context: pathConf.src,
    entry  : {
        main: './main.js',
    },
    output : {
        path         : pathConf.dist,
        filename     : '[name].js?[hash:5]',
        chunkFilename: '[name].js?[hash:5]',
    },
    module : {
        rules: [
            {
                test: /\.css$/,
                use : ExtractTextPlugin.extract({
                    fallback  : 'style-loader',
                    use       : ['vue-style-loader', 'css-loader'],
                    publicPath: '../',
                }),
            },
            {
                test: /\.vue$/,
                use : 'vue-loader',
            },
            // file-loader
            // https://github.com/webpack-contrib/file-loader
            // load image
            {
                test: /\.(png|svg|jpg|gif)$/,
                use : [
                    {
                        loader : 'file-loader',
                        options: {
                            // extract image
                            name: 'images/[name].[ext]?[hash:5]',
                        },
                    },
                    {
                        // compress image
                        // https://github.com/tcoopman/image-webpack-loader
                        loader : 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    },
                ],
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