<style lang="stylus" scoped>
</style>
<template>
    <div>
        <h1>vuex test</h1>
        <!--<p>{{localComputed}}</p>-->
        <!--<p>{{'countAlias' + countAlias}}</p>-->
        <!--<p>{{'count' + count}}</p>-->
        <!--<p>{{'countPlusLocalState' + countPlusLocalState}}</p>-->
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data() {
            return {
                localCount: 5,
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
                count: state => state.count,

                // 传字符串参数 'count' 等同于 `state => state.count`
                countAlias: 'count',

                // 为了能够使用 `this` 获取局部状态，必须使用常规函数
                countPlusLocalState(state) {
                    return state.count + this.localCount;
                },
            })
        },
    };
</script>