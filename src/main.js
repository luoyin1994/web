import Vue from 'vue';

import App from './views/App.vue';

import router from './router/router';

// import store from './vuex/store';

new Vue({
    el    : '#app',
    router,
    // store,
    render: h => h(App),
});