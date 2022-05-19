<template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>&nbsp; <!-- 1씩 증가 클릭 이벤트 -->
        <button type="button" @click="setCount(7)">Set 7</button>&nbsp; <!-- 7로 입력 클릭 이벤트 -->
        <button type="button" @click="one(), two()">Alert</button> <!-- 여러 개의 함수 호출 -->
        <p>The counter is : {{counter}}</p>

        <select v-model="selectedValue" @change="changeSelect"> <!-- 체인지 이벤트 -->
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select><br><br>

        <!-- KeyUp -->
        <input @keyup.enter="enter" placeholder="Enter"><br> <!-- Enter -->
        <input @keyup.alt.enter="altenter" placeholder="Alt + Enter"><br> <!-- Alt + Enter -->
        <input @keyup.ctrl.enter="ctrlenter" placeholder="Ctrl + Enter"><br> <!-- Ctrl + Enter -->
        <div @click.ctrl="ctrlclick">Ctrl + Click</div> <!-- Ctrl + Click -->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                counter: 0,
                selectedValue: ''
            };
        },
        methods: {
            increaseCounter(){
                this.counter = this.counter + 1;
                console.log(this, this.counter)
            },
            setCount(counter){
                this.counter = counter;
            },
            one(){
                alert('One');
            },
            two(){
                alert('Two');
            },

            changeSelect(){
                alert(this.selectedValue);
            },

            enter(){
                alert("enter")
            },
            altenter(){
                alert("Alt + Enter")
            },
            ctrlenter(){
                alert("Ctrl + Enter")
            },
            ctrlclick(){
                alert("Ctrl + Click")
            }
        }
    }
</script>