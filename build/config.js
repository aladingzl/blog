module.exports = {
  admin: {
    dev: {
      env: "development",
      publicPath: "/",
      host: "localhost",
      port: "8090",
      assetsSubDirectory: "static",
      devtoolType: "eval-cheap-module-source-map",
      proxyTable: {
        "/admin_api": {
          // TO-DO
          target: "",
          changeOrigin: true,
          pathRewrite: {
            "^/admin_api": "/",
          }
        }
      }
    },
    build: {
      env: "production",
      publicPath: "./", // html 引用资源目录
      assetsPath: "static", // 静态资源目录
      assetsSubDirectory: "static", // html资源存放目录
      devtoolType: "source-map", // 代码位置信息
    },
  }
}