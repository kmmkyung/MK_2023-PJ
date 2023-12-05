const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true
// publicPath:'/PJ-LOFI'
publicPath: process.env.NODE_ENV === 'production'
? '/production-sub-path/'
: '/'
})