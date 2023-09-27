/*
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-09-27 14:49:40
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-09-27 14:55:18
 * @FilePath: /vue-project/src/stores/SimConfig.ts
 * @Description: 仿真配置
 */
import { defineStore } from "pinia";

export const useSimConfigStore = defineStore("SimConfig", () => {
  const simId = new Date().valueOf().toString();
  
  let isShowSimConfig = false;
  function changeIsShowSimConfig(value: boolean) {
    isShowSimConfig = value;
  }

  const switches = reactive({
    light_effective: true,
    roadgate_effective: true
  })
  function changeSwitches(key: string, value: boolean) {
    switches[key] = value;
  }

  return {
    simId,
    isShowSimConfig,
    switches,
    changeIsShowSimConfig,
    changeSwitches
  }
});