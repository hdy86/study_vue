<template>
    <div>
        <a id="custom-login-btn" @click="kakaoLogin()">
            <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222" />
        </a><br>
        <a id="custom-logout-btn" @click="kakaoLogout()">
            카카오 로그아웃
        </a>
    </div>
</template>
<script>
    export default {
        methods: {
            kakaoLogin() { // 카카오 계정으로 로그인
                window.Kakao.Auth.login({
                    scope: 'profile_nickname, profile_image, account_email',
                    success: this.getKakaoAccount
                });
            },
            kakaoLogout() {
                window.Kakao.Auth.logout((response) => {
                    // 로그아웃
                    console.log(response);
                    alert("로그아웃 성공!");
                });
            },
            getKakaoAccount() {
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: res => {
                        const kakao_account = res.kakao_account;
                        const nickname = kakao_account.profile.nickname; // 카카오 닉네임
                        const image = kakao_account.profile.profile_image_url; // 카카오 프로필사진
                        const email = kakao_account.email; // 카카오 이메일

                        console.log('nickname', nickname);
                        console.log('image', image);
                        console.log('email', email);
                        // console.log(kakao_account);

                        alert("로그인 성공!"); // 로그인 처리 구현
                    },
                    fail: error => {
                        console.log(error);
                    }
                })
            }
        }
    }
</script>