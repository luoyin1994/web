<style>
</style>

<template>
    <div>
        <h1>{{title}}</h1>
        <button @click="testclick">change</button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '我是各模块基础main组件',
            };
        },
        methods: {
            testclick() {
//                console.log(_);
//                let a = () => import('lodash').then(_ => console.log(_));
                this.title = (() => 5 + 6)();
            },
        },
    };
</script>
