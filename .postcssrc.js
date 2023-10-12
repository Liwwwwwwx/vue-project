/*
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-10-02 21:04:52
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-10-08 18:08:41
 * @FilePath: /vue-project/.postcssrc.js
 * @Description: px转vw
 */
module.exports = {
  plugins: {
    //autoprefixer 是一款自动管理浏览器前缀的插件
    autoprefixer: {},
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 3840, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: "vw", // 指定需要转换成的视窗单位，建议使用vw
      fontViewportUnit: "vw",
      selectorBlackList: [".ig-"], // <div class="ig-aa"></div> 指定不转换为视窗单位的类，在该类型名下写不会转换为vw，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // 允许在媒体查询中转换`px`
      replace: true,
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
    },
  },
};
