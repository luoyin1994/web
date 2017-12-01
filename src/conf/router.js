import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path     : '/main',
            component: () => import(/*webpackChunkName: 'main.vue'*/'../views/main.vue'),
            children : [
                {
                    path     : 'foo',
                    component: () => import(/*webpackChunkName: 'foo.vue'*/'../views/foo/foo.vue')
                },
                {
                    path     : 'bar',
                    component: () => import(/*webpackChunkName: 'bar.vue'*/'../views/bar/bar.vue')
                },
                {
                    path     : 'bootstrap',
                    component: () => import(/*webpackChunkName: 'bootstrap.vue'*/'../views/bootstrap/bootstrap.vue')
                },
                {
                    path     : 'test/test-filters',
                    component: () => import(/*webpackChunkName: 'test-filters.vue'*/'../views/test/test-filters.vue')
                },
                {
                    path     : 'test/test-vuex',
                    component: () => import(/*webpackChunkName: 'test-vuex.vue'*/'../views/test/test-vuex.vue')
                },
                {
                    path     : 'test/test-api',
                    component: () => import(/*webpackChunkName: 'test-api.vue'*/'../views/test/test-api.vue')
                },
                {
                    path     : 'test/test-api2',
                    component: () => import(/*webpackChunkName: 'test-api2.vue'*/'../views/test/test-api2.vue')
                }
            ]
        }

    ]
});