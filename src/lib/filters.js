import Vue from 'vue';

let filters = {
    changeToHello: () => 'hello'
};

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
