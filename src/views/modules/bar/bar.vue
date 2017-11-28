<style lang="sass">
    .h2
        color: yellow
</style>
<template>
    <div>
        <h2 class="h2">我是bar</h2>
        <img src="./img2.jpg"> <img src="../../../static/images/bird.jpg">
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        mounted() {
            console.log(this.$store.state.count, 'bar');
            this.$store.commit('increment');
        },
    };
</script>

