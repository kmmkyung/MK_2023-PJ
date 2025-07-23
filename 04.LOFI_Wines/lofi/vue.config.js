const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  publicPath: '/PJ-LOFI',
  configureWebpack: {
    performance: {
      maxEntrypointSize: 10000000,
      maxAssetSize: 10000000
    },
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, // 👈 이거 넣어야 경고 사라짐!
      })
    ]
  },
  // transpileDependencies: true, // 필요 시 주석 해제
})