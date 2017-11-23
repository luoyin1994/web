export default [
    {
        path     : '/foo',
        component:() => import(/*webpackChunkName: 'foo.vue'*/'../views/modules/foo/foo.vue'),
    },
    {
        path     : '/bar',
        component:()=> import(/*webpackChunkName: 'bar.vue'*/'../views/modules/bar/bar.vue'),
    },
];

