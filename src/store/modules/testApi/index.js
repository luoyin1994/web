export default {
    namespaced: true,
    state     : {},
    getter    : {},
    mutations : {},
    actions   : {},
    modules   : {
        testApi: require('./testApi.store').default,
    },
};