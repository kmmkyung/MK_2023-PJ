// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
// })

module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/PJ-LOFI/'
    : '/'
}