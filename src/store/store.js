import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

let debug = process.env.NODE_ENV !== 'production';

let modules = {
    state    : {
        configFile: null,
        pageSize  : 10
    },
    getter   : {},
    mutations: {
        setConfigFile(state, file) {
            state.configFile = file;
        },
        setPageSize(state, size) {
            state.pageSize = size;
        }
    },
    actions  : {},
    modules  : {
        test: require('./modules/test/index').default
    }
};

export default new Vuex.Store(Object.assign(modules, {
    // 严格模式
    // https://vuex.vuejs.org/zh-cn/strict.html
    strict : debug,
    plugins: debug ? [
        // https://vuex.vuejs.org/zh-cn/plugins.html
        // 控制台打印出vuex改变
        // 如果正在使用 vue-devtools，你可能不需要此插件。
        createLogger()
    ] : []
}));
