/*
 * @Description: 路由
 * @Author: wenxuan.li1
 * @Date: 2023-08-15 09:23:49
 * @FilePath: /vue-project/src/router/index.ts
 * @LastEditTime: 2023-09-21 18:15:07
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 */
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { ElNotification } from "element-plus";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/index.vue"),
    },
    // beforeEnter: (to: any, from: any, next: any) => {
    //   if (from.name !== "loading") {
    //     next({
    //       path: "/loading",
    //     });
    //   } else {
    //     next();
    //   }
    // },
  ],
});

// 全局路由守卫，阻止用户未登录进入页面
// router.beforeEach((to, from, next) => {
//   if (to.name !== "login") {
//     if (window.localStorage.getItem("UserStatus") == "true") {
//       next();
//     } else {
//       ElNotification({
//         title: "Error",
//         message: "请输入账号密码",
//         type: "error",
//       });
//       next({
//         path: "/",
//       });
//     }
//   } else {
//     next();
//   }
// });

export default router;
