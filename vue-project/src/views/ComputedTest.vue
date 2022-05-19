<template>
    <div>
        <p>{{firstName + ' ' + lastName}}</p> <!-- 텍스트로 노출 -->
        <p>{{getFullName()}}</p> <!-- 함수 만들어서 노출 -->

        <!-- Computed -->
        <p>Full Name : {{fullName}}</p><br><br>

        <label>First Name : <input type="text" v-model="name01"></label>
        <label>Last Name : <input type="text" v-model="name02"></label>
        <p>Full Name : {{name}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                firstName: 'Da Young',
                lastName: 'Hong',

                name01: '',
                name02: ''
            };
        },
        methods: {
            getFullName(){
                return this.firstName + ' ' + this.lastName;
            }
        },
        computed: {
            fullName(){
                return this.firstName + ' ' + this.lastName;
            },
            name(){
                return this.name01 + ' ' + this.name02;
            }
        }
    }
</script>
<style scoped>
    label{display:block; margin:1em 0;}
</style>