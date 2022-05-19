<template>
    <div>
        <p>{{firstName + ' ' + lastName}}</p> <!-- 텍스트로 노출 -->
        <p>{{getFullName()}}</p><br> <!-- 함수 만들어서 노출 -->

        <!-- Watch -->
        <p>Full Name : {{fullName}}</p>
        <button type="button" @click="changeName">변경</button><br><br>

        <label>First Name : <input type="text" v-model="name01"></label>
        <label>Last Name : <input type="text" v-model="name02"></label>
        <p>Full Name : {{name}}</p>
        <button type="button" @click="changeName2">이름변경</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                firstName: 'Da Young',
                lastName: 'Hong',
                fullName: '',

                name01: '',
                name02: '',
                name: ''
            };
        },
        methods: {
            getFullName(){
                return this.firstName + ' ' + this.lastName;
            },
            changeName(){
                this.firstName = 'Min Kyung';
            },
            changeName2(){
                this.name01 = 'Min Kyung';
            }
        },
        watch: {
            firstName(){
                this.fullName = this.firstName + ' ' + this.lastName;
            },
            lastName(){
                this.fullName = this.firstName + ' ' + this.lastName;
            },

            name01(){
                this.name = this.name01 + ' ' + this.name02;
            },
            name02(){
                this.name = this.name01 + ' ' + this.name02;
            }
        }
    }
</script>
<style scoped>
    label{display:block; margin:1em 0;}
</style>