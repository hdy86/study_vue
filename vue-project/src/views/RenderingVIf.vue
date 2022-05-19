<template>
    <div>
        <p v-if="bRender">bRender가 true이면, 화면에 보임</p>
        <p v-else>bRender가 true가 아니면, 화면에 보임</p>

        <p v-if="type=='A'">A</p>
        <p v-else-if="type=='B'">B</p>
        <p v-else>C</p> <!-- v-if=" ... " / v-else-if=" ... " / v-else -->

        <p v-show="bShow">bShow가 true이면, 화면에 보임</p> <!-- v-show=" ... " -->
    </div>
</template>
<script>
    export default {
        data() {
            return {

                bRender: true,
                type: 'A',

                bShow: true
            };
        }
    }
</script>