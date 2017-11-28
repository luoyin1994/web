<style>
</style>

<template>
    <div>
        <h1>{{title}}</h1>
        <button @click="addSync">increment sync</button>
        <button @click="addAsync">increment async</button>
        <span>{{count}}</span>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '我是各模块基础main组件',
            };
        },
        mounted() {
            this.addAsync.then(() => {
                console.log('add async');
            });
        },
        computed: {
            ...require('vuex').mapState({
                count: 'count',
            })
        },
        methods : {
            testclick() {
//                console.log(_);
//                let a = () => import('lodash').then(_ => console.log(_));
                this.title = (() => 5 + 6)();
            },
            ...require('vuex').mapMutations({
                addSync: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
            }),
            ...require('vuex').mapActions({
                addAsync: 'incrementAsync' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
            })
        },
    };
</script>
