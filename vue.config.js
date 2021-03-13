const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "assets": path.resolve(__dirname, 'src/assets')
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
