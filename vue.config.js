const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "/portpolio-master",
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false
})
