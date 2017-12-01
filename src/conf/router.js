import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path     : '/main',
            component: () => import(/*webpackChunkName: 'main.vue'*/'../views/modules/main.vue'),
            children : [
                {
                    path     : 'foo',
                    component: () => import(/*webpackChunkName: 'foo.vue'*/'../views/modules/foo/foo.vue')
                },
                {
                    path     : 'bar',
                    component: () => import(/*webpackChunkName: 'bar.vue'*/'../views/modules/bar/bar.vue')
                },
                {
                    path     : 'bootstrap',
                    component: () => import(/*webpackChunkName: 'bootstrap.vue'*/'../views/modules/bootstrap/bootstrap.vue')
                },
                {
                    path     : 'test/test-filters',
                    component: () => import(/*webpackChunkName: 'test-filters.vue'*/'../views/modules/test/test-filters.vue')
                },
                {
                    path     : 'test/test-vuex',
                    component: () => import(/*webpackChunkName: 'test-vuex.vue'*/'../views/modules/test/test-vuex.vue')
                },
                {
                    path     : 'test/test-api',
                    component: () => import(/*webpackChunkName: 'test-api.vue'*/'../views/modules/test/test-api.vue')
                },
                {
                    path     : 'test/test-api2',
                    component: () => import(/*webpackChunkName: 'test-api2.vue'*/'../views/modules/test/test-api2.vue')
                }
            ]
        }

    ]
});