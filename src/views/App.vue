<style>
    /*@import "../css/main.css";*/
</style>

<template>
    <div id="app">
        <h1>{{title}}</h1>
        <img src="../images/bird.jpg">
        <button @click="testclick"></button>
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
                this.title = (() => 5 + 6)();
            },
        },
    };
</script>

<style>
</style>
