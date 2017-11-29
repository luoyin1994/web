<style lang="stylus" scoped>
    p
        padding-left 15px
</style>
<template>
    <div>
        <h1>{{title}}</h1>
        <button @click="changeMsgAsync('改变的msg: 123')">点击1s后改变msg</button>
        <p>{{msg}}</p>
    </div>
</template>
<script>
    import {createNamespacedHelpers} from 'vuex';

    const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('map/testVuex2');

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
                'changeMsgAsync',
            ])
        },
    };
</script>