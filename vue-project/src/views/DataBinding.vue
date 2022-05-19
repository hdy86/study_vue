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
        <span>선택한 지역: {{picked}}</span><br><br>

        <img v-bind:src="imgSrc" /><br><br> <!-- img 의 src 속성 : v-bind:src=" ... " -->
        
        <input type="text" v-model="textValue">
        <button type="button" v-bind:disabled="textValue==''">Click</button><br><br> <!-- input text 에 값이 입력되면 button 이 활성화됨 -->

        <div class="container" v-bind:class="{'active': isActive, 'text-red': hasError}">Class Binding</div><br> <!-- class 를 true, false 로 설정 가능 -->
        <div class="container" v-bind:class="[activeClass, errorClass]">Class Binding2</div><br> <!-- class 를 배열로 담아서 사용 가능 -->
        <div class="container" v-bind:class="twoClass">Class Binding2-2</div><br><br>

        <div v-bind:style="styleObject">인라인 스타일 바인딩</div><br>
        <div v-bind:style="[baseStyle, addStyle]">인라인 스타일 바인딩2</div><br><br> <!-- 인라인 스타일을 배열로 담아서 사용 가능 -->

        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product, i) in productList"> <!-- :key="i" ??? -->
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.delivery_price}}</td>
                </tr>
            </tbody>
        </table>
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
                radioValue3: '제주',

                imgSrc: "https://kr.vuejs.org/images/logo.png",

                textValue: "",

                isActive: true,
                hasError: false,
                activeClass: 'active',
                errorClass: 'text-red',
                twoClass: 'active text-red',

                styleObject: {color:'blue', fontSize:'13px'},
                baseStyle: 'background-color:purple; width:100%; height:200px;',
                addStyle: 'color:white; font-weight:bold;',
                
                productList: [
                    {"product_name":"기계식키보드", "price":25000, "category":"노트북/태블릿", "delivery_price":5000},
                    {"product_name":"무선마우스", "price":12000, "category":"노트북/태블릿", "delivery_price":5000},
                    {"product_name":"아이패드", "price":725000, "category":"노트북/태블릿", "delivery_price":5000},
                    {"product_name":"태블릿거치대", "price":32000, "category":"노트북/태블릿", "delivery_price":5000},
                    {"product_name":"무선충전기", "price":42000, "category":"노트북/태블릿", "delivery_price":5000}
                ],
            };
        }
    }
</script>
<style scoped>
    .container{width:100%; height:200px;}
    .active{background-color:yellow; font-weight:bold;}
    .text-red{color:red;}

    table{font-family:arial, sans-serif; border-collapse:collapse; width:100%;}
    th, td{border:1px solid #ddd; text-align:left; padding:8px;}
</style>