<style>
</style>

<template>
    <div>
        <h1>{{title}}</h1>
        <button @click="addSync">increment sync</button>
        <button @click="addAsync">increment async</button>
        <button @click="addTodosAsync">addTodos async</button>
        <span>todoCount: {{todosCount}} </span> <span>increment: {{count}} </span>
        <router-view></router-view>
    </div>
</template>

<script>
    import {createNamespacedHelpers} from 'vuex';

    const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('test/test-vuex');
    export default {
        data() {
            return {
                title: '我是各模块基础main组件'
            };
        },
        mounted() {
        },
        computed: {
            ...mapState({
                count: 'count'
            }),
            ...mapGetters({
                todosCount: 'todosCount'
            })
        },
        methods : {
            testclick() {
//                console.log(_);
//                let a = () => import('lodash').then(_ => console.log(_));
                this.title = (() => 5 + 6)();
            },
            ...mapMutations({
                addSync: commit => {
                    commit('increment');
                    console.log('add sync');
                }// 将 `this.add()` 映射为 `this.$store.commit('increment')`
            }),
            ...mapActions({
                addAsync     : dispatch => dispatch('incrementAsync').then(() => console.log('add async')), // 将 `this.add()` 映射为 `this.$store.commit('increment')`
                addTodosAsync: 'addTodosAsync'
            })
        }
    };
</script>
