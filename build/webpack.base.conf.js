// base module
const webpack = require('webpack');

// own module
const pathConf         = require('./path.conf');
const vueLoaderOptions = require('./vueLoaderOptions');
const config           = require('./config');

// variable
const hash = config.prod.envHash ? '?[hash:5]' : '';

// plugins
// extract css
// https://github.com/webpack-contrib/extract-text-webpack-plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// extract commonChunk
// https://webpack.js.org/plugins/commons-chunk-plugin/
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
// auto create html
const HtmlWebpackPlugin  = require('html-webpack-plugin');
// copy custom assets
// https://github.com/webpack-contrib/copy-webpack-plugin
// use gracefulFs to avoid "EMFILE: too many open files" or "ENFILE: file table overflow"
// https://github.com/webpack-contrib/copy-webpack-plugin#emfile-too-many-open-files-or-enfile-file-table-overflow
const fs         = require('fs');
const gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(fs);
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: pathConf.src,
    entry  : {
        main     : './main.js',
        // vendors
        lodash   : 'lodash',
        vue      : 'vue',
        vuexRoute: ['vuex', 'vue-router'],
    },
    output : {
        filename     : `[name].js${hash}`,
        chunkFilename: `[name].js${hash}`,
    },
    module : {
        rules: [
            {
                test   : /\.vue$/,
                loader : 'vue-loader',
                options: vueLoaderOptions,
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
                            name: `static/images/[name].[ext]${hash}`,
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
                    name: `static/fonts/[name].[ext]${hash}`,
                },
            },
        ],
    },
    resolve: {
        // https://webpack.js.org/configuration/resolve/
        alias: {
            // http://www.imooc.com/article/17868
            // 'vue$': 'vue/dist/vue.esm.js',
        },
    },
    plugins: [
        // use module everywhere
        // https://webpack.js.org/plugins/provide-plugin/
        new webpack.ProvidePlugin({
            _: 'lodash',
        }),
        new ExtractTextPlugin({
            filename : `static/css/[name].css${hash}`,
            // set the following option to `true` if you want to extract CSS from codesplit chunks into this main css file as well.
            // This will result in *all* of your app's CSS being loaded upfront.
            allChunks: false,
        }),
        // extract vendors
        new CommonsChunkPlugin({
            names   : ['lodash', 'vue', 'vuexRoute'],
            filename: `vendors/[name].js${hash}`,
        }),
        // extract runtime and manifest
        new CommonsChunkPlugin({
            name     : ['runtime'],
            minChunks: Infinity,
        }),
        // auto create html
        // the entry point "id=app" is necessary in the template html
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename      : `index.html${hash}`,
            template      : 'index.html',
            inject        : true,
            minify        : {
                removeComments    : true,
                collapseWhitespace: true,
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
                to  : 'static/assets',
            },
        ]),
    ],
};