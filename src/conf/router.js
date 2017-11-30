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
                    path     : 'test/testFilters',
                    component: () => import(/*webpackChunkName: 'testFilters.vue'*/'../views/modules/test/testFilters.vue')
                },
                {
                    path     : 'test/testVuex',
                    component: () => import(/*webpackChunkName: 'testVuex.vue'*/'../views/modules/test/testVuex.vue')
                },
                {
                    path     : 'test/testApi',
                    component: () => import(/*webpackChunkName: 'testApi.vue'*/'../views/modules/test/testApi.vue')
                },
                {
                    path     : 'test/testApi2',
                    component: () => import(/*webpackChunkName: 'testApi2.vue'*/'../views/modules/test/testApi2.vue')
                }
            ]
        }

    ]
});