/*
 * @Description:新增监听用户缩放事件
 * @Author: wenxuan.li1
 * @Date: 2023-08-15 09:23:48
 * @FilePath: \vue-project\src\main.ts
 * @LastEditTime: 2023-10-26 21:52:46
 * @LastEditors: Liwwwwwwx hbsd_lwx@163.com
 */
import "./assets/main.css";
import "@/assets/element.scss";
import "default-passive-events";
import "element-plus/dist/index.css";

import { createApp } from "vue";
import pinia from "@/stores/index";
import ElementPlus from "element-plus";
import { getScreenSize } from "@/tools";

import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const rem = getScreenSize();
document.documentElement.style.fontSize = rem + "px";

app.use(pinia);
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});

app.mount("#app");
