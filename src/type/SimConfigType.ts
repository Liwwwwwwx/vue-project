/*
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-09-27 15:54:32
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-09-27 16:18:48
 * @FilePath: /vue-project/src/type/SimConfigType.ts
 * @Description: 仿真配置信息类型
 */


export declare interface ShipBayConfigType {
  size: string;
  type: string;
  destination: string;
  E_F_ID: string;
  owner: string;
  number: number;
  yardcrane_twin_flag: boolean;
  quaycrane_twin_flag: boolean;
  cntr_class:string;
}

export declare interface TodayShipPlanType {
  ship_work_type: string;
  ship_type: string;
  ship_name: string;
  ship_berth: string;
  quay_number: number;
  ship_bay_config:ShipBayConfigType[] | [];
}

export declare interface ContainerGroupsType {
  size: string;
  type: string;
  destination: string;
  E_F_ID: string;
  owner: string;
  number: number;
  yardcrane_twin_flag: boolean;
  cntr_class:string;
}
export declare interface NotTodayShipPlanType {
  ship_work_type: string;
  ship_type: string;
  ship_name: string;
  quay_number: number;
  container_groups:ContainerGroupsType[] | [];
};

export declare interface ShipPlanType {
  "T+0":TodayShipPlanType[],
  "T+1":NotTodayShipPlanType[],
  "T+2":NotTodayShipPlanType[],
  "T+3":NotTodayShipPlanType[],
  "T-1":NotTodayShipPlanType[],
  "T-2":NotTodayShipPlanType[],
  "T-3":NotTodayShipPlanType[],
}