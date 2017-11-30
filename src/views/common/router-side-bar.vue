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
        <router-link tag="li" to="/main/map/testVuex"><a>Go to testVuex</a></router-link>
        <router-link tag="li" to="/main/map/testVuex2"><a>Go to testVuex2</a></router-link>
        <router-link tag="li" to="/main/testApi/testApi"><a>Go to testApi</a></router-link>
    </ul>
</template>
<script>
    export default {
        data() {
            return {};
        }
    };
</script>