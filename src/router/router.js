import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import routes from './routes';

export default new VueRouter({
    routes // （缩写）相当于 routes: routes
});