<style>
</style>

<template>
    <div>
        <h1>{{title}}</h1>
        <button @click="testclick">change</button>
        <router-link to="/main/foo">Go to Foo</router-link>
        <router-link to="/main/bar">Go to Bar</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '我是app下主vue文件',
            };
        },
        methods: {
            testclick() {
//                console.log(_);
                import('lodash').then(_ => console.log(_));
                this.title = (() => 5 + 6)();
            },
        },
    };
</script>
