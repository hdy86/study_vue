<template>
    <div></div>
</template>
<script>
    export default {
        inject: ['itemLength'], // ProvideInject.vue 에서 전달받음
        mounted() {
            console.log(this.itemLength);
        }
    }
</script>