import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import modules from './modules/root';

Vue.use(Vuex);

export default new Vuex.Store(Object.assign(modules, {
    // 严格模式
    // https://vuex.vuejs.org/zh-cn/strict.html
    strict : process.env.NODE_ENV !== 'production',
    plugins: [
        // https://vuex.vuejs.org/zh-cn/plugins.html
        // 控制台打印出vuex改变
        // 如果正在使用 vue-devtools，你可能不需要此插件。
        createLogger(),
    ],
}));
