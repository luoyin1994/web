<style>
    @import "../css/main.css";
</style>

<template>
    <div id="app">
        <h1>{{title}}</h1>
        <img src="../images/bird.jpg">
        <button @click="testclick">change</button>
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
                console.log(123456);
                console.error(123456);
                debugger;
            },
        },
    };
</script>

<style>
</style>
