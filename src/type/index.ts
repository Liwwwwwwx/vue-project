/*
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-08-24 11:48:32
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-09-27 10:02:24
 * @FilePath: /vue-project/src/type/index.ts
 * @Description: 数据类型
 */
declare interface socket {
  url: string;
  ws: WebSocket;
  connect(): void;
  send(data: any): void;
  heartBeat(): void;
}

declare interface exportContainerType {
  fieldYard: string;
  startLocation: string;
  endLocation: string;
  weight: string;
  type: string;
  ship: string;
  weightType: string;
  shipTime: string;
}
declare interface transitContainerType {
  fieldYard: string;
  startLocation: string;
  endLocation: string;
  weight: string;
  type: string;
  receivedShip: string;
  weightType: string;
  dischargedShip: string;
}
declare interface importContainerType {
  fieldYard: string;
  startLocation: string;
  endLocation: string;
  weight: string;
  type: string;
  dischargedShip: string;
}

declare interface divStyle {
  width: string,
  height: string,
  left: string,
  top: string,
  zIndex: number,
}

declare interface DateType {
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
}

export {
  socket,
  exportContainerType,
  transitContainerType,
  importContainerType,
  divStyle,
  DateType
};
