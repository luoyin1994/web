<style lang="scss">
    .h2 {
        color: yellow
    }
</style>
<template>
    <div>
        <h2 class="h2">我是tar</h2>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        mounted() {
            console.log(this.$store.state.count, 'tar');
            this.$store.commit('increment');
        },
    };
</script>

