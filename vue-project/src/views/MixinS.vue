<script>
    import ApiMixin from '../api.js';
    export default {
        mixins: [ApiMixin], // 사용할 믹스인 파일을 배열로 등록
        data() {
            return {
                productList: []
            };
        },
        async mounted() {
            this.productList = await this.$callAPI("https://05061a3f-d606-4f45-b048-448db1846b75.mock.pstmn.io/list", "get");
            console.log(this.productList);
        }
    }
</script>
