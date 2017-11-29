<style lang="stylus" scoped>
    p
        padding-left 15px
</style>
<template>
    <div>
        <h1>{{title}}</h1>
        <button @click="getTestApiData">点击msg和title</button>
        <p>{{msg}}</p>
    </div>
</template>
<script>
    import {createNamespacedHelpers} from 'vuex';

    const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('testApi/testApi');

    export default {
        data() {
            return {};
        },
        mounted() {
        },
        computed: {
            ...mapState([
                'title',
                'msg',
            ]),
        },
        methods : {
            ...mapActions([
                'getTestApiData',
            ])
        },
    };
</script>