<style lang="stylus" scoped>
    ul
        margin-left 20px
</style>
<template>
    <ul>
        <router-link tag="li" to="/main/foo"><a>Go to Foo</a></router-link>
        <router-link tag="li" to="/main/bar"><a>Go to Bar</a></router-link>
        <router-link tag="li" to="/main/tar"><a>Go to Tar</a></router-link>
        <router-link tag="li" to="/main/bootstrap"><a>Go to bootstrap</a></router-link>
        <router-link tag="li" to="/main/vuex"><a>Go to vuex</a></router-link>
    </ul>
</template>
<script>
    export default {
        data() {
            return {};
        },
    };
</script>