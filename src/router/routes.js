export default [
    {
        path     : '/foo',
        component: () => import(/* webpackChunkName: 'foo.vue' */'../views/foo/foo.vue'),
    },
    {
        path     : '/bar',
        component: () => import(/* webpackChunkName: 'bar.vue' */'../views/bar/bar.vue'),
    },
];

