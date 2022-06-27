const {createProxyMiddleware: proxy} = require('http-proxy-middleware')
 
module.exports = app => {
  app.use('/api', proxy({
    target: 'http://10.64.12.248:8080/',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }))
}

