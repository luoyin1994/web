export default [
    {
        path     : '/main',
        component: () => import(/*webpackChunkName: 'main.vue'*/'../views/modules/main.vue'),
        children : [
            {
                path     : 'foo',
                component: () => import(/*webpackChunkName: 'foo.vue'*/'../views/modules/foo/foo.vue'),
            },
            {
                path     : 'bar',
                component: () => import(/*webpackChunkName: 'bar.vue'*/'../views/modules/bar/bar.vue'),
            },
            {
                path     : 'tar',
                component: () => import(/*webpackChunkName: 'tar.vue'*/'../views/modules/tar/tar.vue'),
            },
            {
                path     : 'bootstrap',
                component: () => import(/*webpackChunkName: 'bootstrap.vue'*/'../views/modules/bootstrap/bootstrap.vue'),
            },
            {
                path     : 'map/testVuex',
                component: () => import(/*webpackChunkName: 'testVuex.vue'*/'../views/modules/map/testVuex.vue'),
            },
            {
                path     : 'map/testVuex2',
                component: () => import(/*webpackChunkName: 'testVuex2.vue'*/'../views/modules/map/testVuex2.vue'),
            },

            {
                path     : 'testApi/testApi',
                component: () => import(/*webpackChunkName: 'testVuex2.vue'*/'../views/modules/testApi/testApi.vue'),
            },
        ],
    },

];

