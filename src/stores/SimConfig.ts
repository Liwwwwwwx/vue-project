/*
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-09-27 14:49:40
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-09-27 16:15:23
 * @FilePath: /vue-project/src/stores/SimConfig.ts
 * @Description: 仿真配置
 */
import { defineStore } from "pinia";
import { ShipPlanType } from "@/type/SimConfigType";

export const useSimConfigStore = defineStore("SimConfig", () => {
  const simId = new Date().valueOf().toString();

  // 是否显示仿真配置窗口
  let isShowSimConfig = false;

  /**
   * @description: 更改isShowSimConfig值
   * @param {boolean} value
   * @return {*}
   */  
  function changeIsShowSimConfig(value: boolean):void {
    isShowSimConfig = value;
  }

  // 开关设置
  const switches = reactive({
    light_effective: true,
    roadgate_effective: true
  })

  /**
   * @description: 更改开关属性值
   * @param {string} key
   * @param {boolean} value
   * @return {*}
   */  
  function changeSwitches(key: string, value: boolean):void {
    switches[key] = value;
  }


  // 集装箱
  const blocks = reactive({
    export_blocks: [
      "I01",
      "I02",
      "I03",
      "I04",
      "I05",
      "I06",
      "I07",
      "I08",
      "I09",
    ],
    import_blocks: [
      "I01",
      "I02",
      "I03",
      "I04",
      "I05",
      "I06",
      "I07",
      "I08",
      "I09",
    ]
  });

  /**
   * @description: 更改集装箱属性值
   * @param {string} key
   * @param {string} value
   * @return {*}
   */  
  function changeBlocks(key: string, value: string[]):void {
    blocks[key] = value;
  }

  // 船舶计划
  const shipplans:ShipPlanType = reactive({
    "T+0":[
      {
        ship_work_type:"",
        ship_type:"",
        ship_berth:"",
        ship_name:"",
        quay_number:0,
        ship_bay_config:[],
      }
    ],
    "T+1":[
      {
        ship_work_type:"",
        ship_type:"",
        ship_name:"",
        quay_number:0,
        container_groups:[],
      }
    ],
    "T+2":[
      {
        ship_work_type:"",
        ship_type:"",
        ship_name:"",
        quay_number:0,
        container_groups:[],
      }
    ],
    "T+3":[
      {
        ship_work_type:"",
        ship_type:"",
        ship_name:"",
        quay_number:0,
        container_groups:[],
      }
    ],
    "T-1":[
      {
        ship_work_type:"",
        ship_type:"",
        ship_name:"",
        quay_number:0,
        container_groups:[],
      }
    ],
    "T-2":[
      {
        ship_work_type:"",
        ship_type:"",
        ship_name:"",
        quay_number:0,
        container_groups:[],
      }
    ],
    "T-3":[
      {
        ship_work_type:"",
        ship_type:"",
        ship_name:"",
        quay_number:0,
        container_groups:[],
      }
    ],
  })

  return {
    simId,
    isShowSimConfig,
    switches,
    blocks,
    changeBlocks,
    changeIsShowSimConfig,
    changeSwitches
  }
});