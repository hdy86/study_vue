<template>
    <div>
        <h1>Hello, {{title}}!</h1> <!-- 텍스트 : {{ ... }} -->
        <div v-html="htmlString"></div> <!-- html 태그 : v-html=" ... " -->

        <input type="text" v-model="valueModel" /><br><br> <!-- input text 의 value 값 : v-model=" ... " -->
        <input type="number" v-model.number="numberModel" /><br><br> <!-- input number 의 value 값 : v-model.number=" ... " -->

        <textarea v-model="message"></textarea><br><br> <!-- textarea 의 value 값 : v-model=" ... " -->

        <select v-model="city"> <!-- select 의 value 값 : v-model=" ... " -->
            <option value="02">서울</option>
            <option value="031">경기도</option>
            <option value="21">부산</option>
            <option value="064">제주</option>
        </select><br><br>

        <label><input type="checkbox" v-model="checked" v-bind:value="checked" true-value="yes" false-value="no"> {{checked}}</label><br><br>
        <!-- input checkbox 의 check : v-model=" ... " / value 값 : v-bind:value=" ... " / 
        true-value="yes" false-value="no" 로 기본값 설정 -->

        <label><input type="checkbox" value="서울" v-model="checked2"> 서울</label>
        <label><input type="checkbox" value="부산" v-model="checked2"> 부산</label>
        <label><input type="checkbox" value="제주" v-model="checked2"> 제주</label><br>
        <span>체크한 지역: {{checked2}}</span><br><br>
        <!-- input checkbox 에 v-model="..." 하고, 스크립트에 ...: [] 와 같이 배열로 해두면 checked 된 value 값이 배열에 저장됨 -->

        <label><input type="radio" v-bind:value="radioValue1" v-model="picked"> 서울</label>
        <label><input type="radio" v-bind:value="radioValue2" v-model="picked"> 부산</label>
        <label><input type="radio" v-bind:value="radioValue3" v-model="picked"> 제주</label><br>
        <span>선택한 지역: {{picked}}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'World',
            htmlString: '<p style="color:red;">This is a red string.<p>',

            valueModel: 'South Korea',
            numberModel: 3,
            message: "여러 줄을 입력할 수 있는 textarea 입니다.",
            city: "064",
            
            checked: true,
            checked2: [],

            picked: '',
            radioValue1: '서울',
            radioValue2: '부산',
            radioValue3: '제주'
        };
    }
}
</script>