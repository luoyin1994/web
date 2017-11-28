<style>
    @import "../static/styles/css/reset.css";
    /*@import "../static/styles/css/main.css";*/
    /*@import "../static/styles/scss/a.scss";*/
    /*@import "../static/styles/sass/b.sass";*/
    /*@import "../static/styles/styl/test.styl";*/
</style>

<template>
    <div id="app">
        <h1>我是入口app</h1>
        <side-bar></side-bar>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        components: {
            'side-bar': require('./common/side-bar.vue').default,
        },
        data() {
            return {};
        },

    };
</script>
