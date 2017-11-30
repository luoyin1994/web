import Vue from 'vue';

import App from './views/App.vue';

import router from './conf/router.conf';

import store from './store/store';

// bind filters
import * as filters from './lib/filters';
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

// vue plugins
// import './lib/vplugins/bootstrapVue';

new Vue({
    el    : '#app',
    router,
    store,
    render: h => h(App)
});