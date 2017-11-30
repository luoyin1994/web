export default {
    namespaced: true,
    state     : {},
    getter    : {},
    mutations : {},
    actions   : {},
    modules   : {
        testApi : require('./testApi.store').default,
        testApi2: require('./testApi2.store').default,
        testVuex: require('./testVuex.store').default
    }
};