const { defineConfig } = require('@vue/cli-service')
module.exports = {
	configureWebpack: {
    performance: {
    maxEntrypointSize: 10000000,
    maxAssetSize: 10000000
    }
	},
	publicPath: '/PJ-lofi'
	// transpileDependencies:true
}