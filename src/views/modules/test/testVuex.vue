<style lang="stylus" scoped>
    p
        padding-left 15px
</style>
<template>
    <div>
        <h1>测试vuex</h1>
        <p>{{'localComputed: ' + localComputed}}</p>
        <p>{{'countAlias: ' + countAlias}}</p>
        <p>{{'count: ' + count}}</p>
        <p>{{'countLocalState: ' + countLocalState}}</p>
        <p>{{'name: ' + name}}</p>
        <p>{{'doneTodos: ' + JSON.stringify(doneTodos)}}</p>
        <p>{{'doneTodosCount: ' + doneTodosCount}}</p>
        <p>{{'getTodoById(1) : ' + JSON.stringify(getTodoById(2))}}</p>
        <p>{{'todos : ' + JSON.stringify(todos)}}</p>
    </div>
</template>
<script>
    import {createNamespacedHelpers} from 'vuex';

    const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('test/testVuex');

    export default {
        data() {
            return {
                localCount: 5
            };
        },
        mounted() {
        },
        computed: {
            localComputed() {
                return 1 + 1;
            },
            ...mapState({
                // 箭头函数可使代码更简练
                count     : state => state.count,
                todos     : 'todos',
                // 传字符串参数 'count' 等同于 `state => state.count`
                countAlias: 'count',

                // 为了能够使用 `this` 获取局部状态，必须使用常规函数
                countLocalState(state) {
                    return state.count + this.localCount;
                },
                name: 'name'
            }),
            ...mapGetters([
                'doneTodos',
                'doneTodosCount',
                'getTodoById'
            ])
        }

    };
</script>