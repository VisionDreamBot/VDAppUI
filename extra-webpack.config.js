// JavaScript source code
const webpack = require('webpack');

module.exports = {
  plugins: [new webpack.DefinePlugin({
    'process.env': {
      HOST_SECRETE: JSON.stringify(process.env.HOST_SECRETE),
      VDAPP_UI_NAME: JSON.stringify(process.env.VDAPP_UI_NAME),
      VDAPP_DEV_URL: JSON.stringify(process.env.VDAPP_DEV_URL),
      VDAPP_PRD_URL: JSON.stringify(process.env.VDAPP_PRD_URL)
    }
  })]
}
