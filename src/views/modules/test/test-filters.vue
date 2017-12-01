<style lang="scss">
    .h2 {
        color: #fff06d
    }
</style>
<template>
    <div>
        <h2 class="h2">测试filters</h2>
        <p>我是{{msg}}，我使用了filter魔法把我变成了：{{msg | changeToHello}} 。。。</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: '张三'
            };
        }
    };
</script>

