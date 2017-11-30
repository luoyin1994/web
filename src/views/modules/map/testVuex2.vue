<style lang="stylus" scoped>
    p
        padding-left 15px
</style>
<template>
    <div>
        <h1>{{title}}</h1>
        <button @click="changeMsgAsync('改变的msg: 123')">点击1s后改变msg</button>
        <p>{{msg}}</p>
        <p>我是组件testApi中的education：{{education}}</p>
    </div>
</template>
<script>
    import {createNamespacedHelpers} from 'vuex';

    const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('map/testVuex2');

    const {
              mapState    : testApiMapState,
              mapGetters  : testApiMapGetters,
              mapMutations: testApiMapMutations,
              mapActions  : testApiMpMutations
          } = createNamespacedHelpers('testApi/testApi');

    export default {
        data() {
            return {};
        },
        mounted() {
        },
        computed: {
            ...testApiMapState([
                'education'
            ]),
            ...mapState([
                'title',
                'msg'
            ])
        },
        methods : {
            ...mapActions([
                'changeMsgAsync'
            ])
        }
    };
</script>