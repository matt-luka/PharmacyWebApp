const CracoLessPlugin = require('craco-less');

module.exports = {
  // webpack: {
  //   configure: (webpackConfig, {
  //     env, paths
  //   }) => {
  //     webpackConfig.output = {
  //       ...webpackConfig.output,
  //       publicPath: '/admin'
  //     }
  //     return webpackConfig
  //   }
  // },
  devServer: {
    port: 8080,
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 'primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}