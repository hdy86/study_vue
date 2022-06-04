const { defineConfig } = require('@vue/cli-service')
const target = 'http://127.0.0.1:3000'; // proxy 요청을 보낼 서버 주소

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: config => {
    config.plugins.delete('prefetch'); // prefech 삭제
  },
  devServer: {
    port: 8080,
    proxy: {
      '^/api': { // proxy 요청을 보낼 api 시작 부분
        target,
        changeOrigin:true
      },
      '/oauth2.0': {
        target: 'https://nid.naver.com'
      }
    }
  }
})