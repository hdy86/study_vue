<template>
    <div>
        <child-component @send-message="sendMessage" ref="child_component" />
        <button type="button" @click="changeChildData">Change Child Data</button>
    </div>
</template>
<script>
    import ChildComponent from './ChildComponent';
    export default {
        components: {ChildComponent},
        mounted(){
            this.$refs.child_component.$refs.btn.click();
            this.$refs.child_component.callFromParent();
        },
        methods: {
            changeChildData(){
                this.$refs.child_component.msg = "부모 컴포넌트가 변경한 데이터";
            },
            sendMessage(data) {
                console.log(data);
            }
        }
    }
</script>