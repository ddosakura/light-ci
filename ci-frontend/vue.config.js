const path = require("path");
const webpack = require("webpack");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

const publicPath =
  process.env.NODE_ENV === "production"
    ? "//cdn.jsdelivr.net/npm/@skrfont/ci-frontend/dist/"
    : "/";

module.exports = {
  publicPath,
  devServer: {
    port: 8080, // 端口号
    proxy: {
      // 配置跨域处理 可以设置多个
      "/": {
        target: "http://127.0.0.1:8088",
        ws: true,
        changeOrigin: true
      }
    }
  },
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        containers: "@/containers",
        utils: "@/utils",
        views: "@/views"
      }
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require("./vendor/element-manifest.json")
      }),
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require("./vendor/lodash-manifest.json")
      }),
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require("./vendor/rxjs-manifest.json")
      }),
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require("./vendor/vue-manifest.json")
      }),
      // 将 dll 注入到 生成的 html 模板中
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, "./vendor/*.js"),
        // dll 引用路径
        publicPath: publicPath + "vendor",
        // dll最终输出的目录
        outputPath: "./vendor"
      })
    ]
  }
};
