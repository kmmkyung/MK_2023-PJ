// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     transpileDependencies:true,
// 	publicPath: process.env.NODE_ENV === 'production'
//     ? '/test/'
//     : '/'
// })

module.exports = {
	configureWebpack: {
    performance: {
    maxEntrypointSize: 10000000,
    maxAssetSize: 10000000
    }
	},
	publicPath: process.env.NODE_ENV === 'production'
    ? '/test/'
    : '/'
		
}