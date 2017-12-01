<style lang="stylus" scoped>
    ul
        margin-left 20px
</style>
<template>
    <ul>
        <router-link tag="li" to="/main/foo"><a>Go to Foo</a></router-link>
        <router-link tag="li" to="/main/bar"><a>Go to Bar</a></router-link>
        <router-link tag="li" to="/main/bootstrap"><a>Go to bootstrap</a></router-link>
        <router-link tag="li" to="/main/test/test-filters"><a>Go to testFilters</a></router-link>
        <router-link tag="li" to="/main/test/test-vuex"><a>Go to testVuex</a></router-link>
        <router-link tag="li" to="/main/test/test-api"><a>Go to testApi</a></router-link>
        <router-link tag="li" to="/main/test/test-api2"><a>Go to testApi2</a></router-link>
    </ul>
</template>
<script>
    export default {
        data() {
            return {};
        }
    };
</script>