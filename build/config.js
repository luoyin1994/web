module.exports = {
    // sourceMapType: 'eval-source-map',
    sourceMapType: 'source-map',
    dev          : {
        host          : 'localhost',
        port          : 8099,
        sourceMap     : true,
        bundleAnalyzer: {
            open   : false,
            // https://github.com/webpack-contrib/webpack-bundle-analyzer
            options: {analyzerPort: '9998'}
        }
    },
    prod         : {
        sourceMap     : false,
        bundleAnalyzer: {
            open   : false,
            // https://github.com/webpack-contrib/webpack-bundle-analyzer
            options: {analyzerPort: '9999'}
        },
        envHash       : true,
        gzip          : true
    }
};