<template>
    <div>
        <button type="button" @click="childFunc" ref="btn">click</button>&nbsp;
        <button type="button" @click="callFromParent" ref="btn">click</button><br>
        <h1>{{msg}}</h1>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: '빈 데이터',
                msg2: '자식 컴포넌트로부터 보내는 메시지'
            };
        },
        mounted() {
            this.$emit('send-message', this.msg2);
        },
        methods: {
            childFunc() {
                console.log('부모 컴포넌트에서 직접 발생시킨 이벤트');
            },
            callFromParent() {
                console.log('부모 컴포넌트에서 직접 발생시킨 이벤트');
            }
        }
    }
</script>