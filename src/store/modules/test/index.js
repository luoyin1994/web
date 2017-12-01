export default {
    namespaced: true,
    state     : {},
    getter    : {},
    mutations : {},
    actions   : {},
    modules   : {
        testApi : require('./test-api.store').default,
        testApi2: require('./test-api2.store').default,
        testVuex: require('./test-vuex.store').default
    }
};