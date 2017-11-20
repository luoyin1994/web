module.exports = {
    sourceMapType: 'eval-source-monitoring',
    dev          : {
        server        : 'http://192.168.1.153',
        port          : 8090,
        sourceMap     : true,
        bundleAnalyzer: {
            open   : false,
            // https://github.com/webpack-contrib/webpack-bundle-analyzer
            options: {analyzerPort: '9998'},
        },
    },
    dist         : {
        sourceMap     : false,
        bundleAnalyzer: {
            open   : false,
            // https://github.com/webpack-contrib/webpack-bundle-analyzer
            options: {analyzerPort: '9999'},
        },
    },
};