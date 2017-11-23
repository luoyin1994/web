<style>
    @import "../static/css/main.css";
</style>

<template>
    <div id="app">
        <h1>{{title}}</h1>
        <button @click="testclick">change</button>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'title xxx',
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
