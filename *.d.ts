/*
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-09-19 20:34:30
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-09-19 20:34:36
 * @FilePath: /vue-project/*.d.ts
 * @Description:
 */
declare module "*.vue" {
  import { DefineComponent } from "vue";

  const component: DefineComponent<{}, {}, any>;

  export default component;
}
