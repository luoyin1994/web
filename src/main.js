import Vue from 'vue';

import App from './views/app.vue';

import router from './conf/router';

import store from './store/store';

// bind filters
import './lib/filters';

// vue plugins

new Vue({
    el    : '#app',
    router,
    store,
    render: h => h(App)
});