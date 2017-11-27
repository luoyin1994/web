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
                component: () => import(/*webpackChunkName: 'bar.vue'*/'../views/modules/tar/tar.vue'),
            },
        ],
    },

];

