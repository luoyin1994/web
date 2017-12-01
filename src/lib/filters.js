import Vue from 'vue';

let filters = {
    changeToHello: () => 'hello'
};

// Vue上全局注册filters
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
