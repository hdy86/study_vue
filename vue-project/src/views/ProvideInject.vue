<template>
    <div>
        <ProvideInjectChild />
    </div>
</template>
<script>
    import ProvideInjectChild from './ProvideInjectChild';
    export default {
        components: {ProvideInjectChild},
        data() {
            return {
                items: ['A', 'B']
            };
        },
        provide() { // ProvideInjectChild.vue 에 전달
            return {
                itemLength: this.items.length
            };
        }
    }
</script>