export default {
    namespaced: true,
    state     : {},
    getter    : {},
    mutations : {},
    actions   : {},
    modules   : {
        'test-api' : require('./test-api.store').default,
        'test-api2': require('./test-api2.store').default,
        'test-vuex': require('./test-vuex.store').default
    }
};