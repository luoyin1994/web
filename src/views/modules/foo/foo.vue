<style scoped>
    h3 {
        color: #ff5d67;
    }

    .move {
        transform: translateY(50%);
    }


</style>

<template>
    <div>
        <h3 class="h3">我是foo</h3>
        <div class="move"></div>
        <img src="./img1.jpg"> <img src="./bird.jpg">
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        mounted() {
            console.log(this.$store.state.count, 'foo');
            this.$store.commit('increment');
        },
    };
</script>

