module.exports = {
    sourceMapType: 'eval-source-monitoring',
    dev          : {
        server        : 'http://192.168.1.153',
        port          : 8099,
        sourceMap     : true,
        bundleAnalyzer: {
            open   : false,
            // https://github.com/webpack-contrib/webpack-bundle-analyzer
            options: {analyzerPort: '9998'},
        },
    },
    prod         : {
        sourceMap     : false,
        bundleAnalyzer: {
            open   : false,
            // https://github.com/webpack-contrib/webpack-bundle-analyzer
            options: {analyzerPort: '9999'},
        },
        envHash       : true,
    },
};