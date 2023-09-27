/*
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-09-27 14:49:40
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-09-27 17:11:00
 * @FilePath: /vue-project/src/stores/SimConfig.ts
 * @Description: 仿真配置
 */
import { defineStore } from "pinia";
import { ShipPlanType, ShipBayConfigType, TodayShipPlanType, ContainerGroupsType, NotTodayShipPlanType } from "@/type/SimConfigType";

export const useSimConfigStore = defineStore("SimConfig", () => {
  const simId = new Date().valueOf().toString();

  // 是否显示仿真配置窗口
  let isShowSimConfig = false;

  /**
   * @description: 更改isShowSimConfig值
   * @param {boolean} value
   * @return {*}
   */
  function changeIsShowSimConfig(value: boolean): void {
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
  function changeSwitches(key: string, value: boolean): void {
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
  function changeBlocks(key: string, value: string[]): void {
    blocks[key] = value;
  }

  // 船舶计划
  const shipplans: ShipPlanType = reactive({
    "T+0": [
      {
        ship_work_type: "",
        ship_type: "",
        ship_berth: "",
        ship_name: "",
        quay_number: 0,
        ship_bay_config: [],
      }
    ],
    "T+1": [
      {
        ship_work_type: "",
        ship_type: "",
        ship_name: "",
        quay_number: 0,
        container_groups: [],
      }
    ],
    "T+2": [
      {
        ship_work_type: "",
        ship_type: "",
        ship_name: "",
        quay_number: 0,
        container_groups: [],
      }
    ],
    "T+3": [
      {
        ship_work_type: "",
        ship_type: "",
        ship_name: "",
        quay_number: 0,
        container_groups: [],
      }
    ],
    "T-1": [
      {
        ship_work_type: "",
        ship_type: "",
        ship_name: "",
        quay_number: 0,
        container_groups: [],
      }
    ],
    "T-2": [
      {
        ship_work_type: "",
        ship_type: "",
        ship_name: "",
        quay_number: 0,
        container_groups: [],
      }
    ],
    "T-3": [
      {
        ship_work_type: "",
        ship_type: "",
        ship_name: "",
        quay_number: 0,
        container_groups: [],
      }
    ],
  })

  /**
   * @description: 新增一个船舶计划
   * @param {string} shipType
   * @return {*}
   */
  function addOneShipPlan(shipType: string): void {
    let shipObj: TodayShipPlanType | NotTodayShipPlanType
    if (shipType === "T+0") {
      shipObj = {
        ship_work_type: "",
        ship_type: "",
        ship_berth: "",
        ship_name: "",
        quay_number: 0,
        ship_bay_config: [],
      }
    } else {
      shipObj = {
        ship_work_type: "",
        ship_type: "",
        ship_name: "",
        quay_number: 0,
        container_groups: [],
      }
    }
    shipplans[shipType].push(shipObj)
  }

  /**
   * @description: 删除一个船舶计划
   * @param {string} shipType
   * @param {number} index
   * @return {*}
   */
  function deleteOneShipPlan(shipType: string, index: number): void {
    shipplans[shipType].splice(index, 1)
  }

  /**
   * @description: 更新当天某个船舶计划的贝位集装箱信息
   * @param {string} shipType
   * @param {number} index
   * @param {ShipBayConfigType} value
   * @return {*}
   */
  function editShipPlansShipBayConfig(shipType: string, index: number, value: ShipBayConfigType): void {
    shipplans[shipType][index].ship_bay_config = value
  }

  /**
   * @description: 新增不是当天某个船舶计划集装箱组
   * @param {string} shipType
   * @param {number} index
   * @param {ContainerGroupsType} value
   * @return {*}
   */
  function addOneShipPlanContainerGroup(shipType: string, index: number, value: ContainerGroupsType): void {
    shipplans[shipType][index].container_groups.push(value)
  }

  /**
   * @description: 删除不是当天某个船舶计划集装箱组
   * @param {string} shipType
   * @param {number} index
   * @return {*}
   */
  function deleteOneShipPlanContainerGroup(shipType: string, index: number): void {
    shipplans[shipType][index].container_groups.splice(index, 1)
  }

  /**
   * @description: 更新不是当天某个船舶计划集装箱租的某条信息
   * @param {string} shipType
   * @param {number} shipIndex
   * @param {number} groupIndex
   * @param {ContainerGroupsType} value
   * @return {*}
   */
  function editShipPlansContainerGroup(shipType: string, shipIndex: number, groupIndex: number, value: ContainerGroupsType): void {
    shipplans[shipType][shipIndex].container_groups[groupIndex] = value
  }

  // 外集卡参数
  const outtruck_appointments = reactive({
    type:"model_1",
    model_1: {
      DI_distribution:"triangular",
      RE_distribution:"uniform",
      night_decayrate:0.55,
    },
    mode_2:{
      min_truck_num:15
    }
  })
  /**
   * @description: 更新外集卡参数
   * @param {string} key
   * @param {string} value
   * @return {*}
   */
  function changeOuttruckAppointments(key: string, value: string): void {
    outtruck_appointments[outtruck_appointments.type][key] = value;
  }

  const equipment_parameters = reactive({

    HAV:{
      straight_speed:15,
      curve_speed:10,
      max_accelerated_speed:2,
      max_decelerated_speed:2,
    },
    Outtruck:{
      straight_speed:20,
      curve_speed:10,
      max_accelerated_speed:2,
      max_decelerated_speed:2,
    },
    quaycrane: {
      crane_speed:0.75,
      trolley_speed:3.33,
      empty_lifting_speed:3,
      heavy_lifting_speed:1.25
    },
    yardcrane: {
      crane_speed:2.5,
      trolley_speed:2,
      empty_lifting_speed:1.33,
      heavy_lifting_speed:0.67
    }
  })

  /**
   * @description: 更新设备参数
   * @param {string} equipmentType
   * @param {string} type
   * @param {number} value
   * @return {*}
   */  
  function changeEquipmentParameters(equipmentType:string, type:string, value:number):void {
    equipment_parameters[equipmentType][type] = value;
  }


  // HAV调度模式
  const hav_assign_mode = reactive({
    type:"work_line",
    work_line: {
      vehicle_num_list:[]
    },
    work_field:{
      vehicle_num_list:[],
      ship_name_list:[]
    },
    full_field_schedule:{
      vehicle_num:0
    }
  })

  /**
   * @description: 更改HAV某调度模式下的值
   * @param {any} value
   * @return {*}
   */  
  function changeHavAssignMode(value:any):void {
    hav_assign_mode[hav_assign_mode.type] = value;
  }

  /**
   * @description: 更新HAV调度模式下船舶数量
   * @param {number} value
   * @return {*}
   */
  function setHavAssignModeShipNameList(value:[]):void {
    hav_assign_mode.work_field.ship_name_list = value;
  }
  return {
    simId,
    isShowSimConfig,
    switches,
    blocks,
    shipplans,
    changeIsShowSimConfig,
    changeSwitches,
    changeBlocks,
    addOneShipPlan,
    deleteOneShipPlan,
    editShipPlansShipBayConfig,
    addOneShipPlanContainerGroup,
    deleteOneShipPlanContainerGroup,
    editShipPlansContainerGroup,
    changeOuttruckAppointments,
    changeEquipmentParameters,
    hav_assign_mode,
    changeHavAssignMode,
    setHavAssignModeShipNameList,
    outtruck_appointments,
    equipment_parameters,
  }
});