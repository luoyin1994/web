export default {
    namespaced: true,
    state     : {},
    getter    : {},
    mutations : {},
    actions   : {},
    modules   : {
        testVuex : require('./testVuex.store').default,
        testVuex2: require('./testVuex2.store').default,
    },
};