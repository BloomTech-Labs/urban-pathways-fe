const config = require('./src/styles/theme-overrides.js');
const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: config,
             modifyVars:{
              hack: `true; @import "${path.resolve( __dirname, "./src/styles", "theme-overrides.less" )}";`
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
