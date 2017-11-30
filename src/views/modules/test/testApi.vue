<style lang="stylus" scoped>
    p
        padding-left 15px
</style>
<template>
    <div>
        <h1>拉取数据例子</h1>
        <button @click="getTestApiData">点击拉取接口数据</button>
        <button @click="clearTestApiData">清掉数据</button>
        <p>{{JSON.stringify(education)}}</p>
    </div>
</template>
<script>
    import {createNamespacedHelpers} from 'vuex';

    const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('test/testApi');

    export default {
        data() {
            return {};
        },
        mounted() {
        },
        computed: {
            ...mapState([
                'education'
            ])
        },
        methods : {
            ...mapMutations([
                'clearTestApiData'
            ]),
            ...mapActions([
                'getTestApiData'
            ])
        }
    };
</script>