/*
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-09-15 17:54:58
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-09-27 17:19:24
 * @FilePath: /vue-project/src/tools/index.ts
 * @Description: 通用方法
 */

import { divStyle, DateType } from "@/type";
import * as xlsx from "xlsx";
import { ElMessage } from "element-plus"

/**
 * @description: 鼠标点击拖拽函数
 * @param {MouseEvent} event 
 * @param {string} id
 * @param {string} style
 * @param {boolean} status
 * @return {*}
 */
export function drag(event: MouseEvent, id: string, style: divStyle, status: boolean = true): void {
  const dom: HTMLElement = document.getElementById(id) as HTMLElement;
  let disX = event.clientX - dom.offsetLeft;
  let disY = event.clientY - dom.offsetTop;
  style.zIndex = 9

  document.onmousemove = (event: MouseEvent) => {
    let left = event.clientX - disX;
    let top = event.clientY - disY;

    // 左右边界
    if (left < 0) {
      left = 0
    } else if (left > document.documentElement.clientWidth - dom.offsetWidth) {
      left = document.documentElement.clientWidth - dom.offsetWidth;
    }

    // 上下边界
    if (top < 0) {
      top = 0
    } else if (top > document.documentElement.clientHeight - dom.offsetHeight) {
      top = document.documentElement.clientHeight - dom.offsetHeight;
    }
    // 设置dom的left、top
    dom.style.left = left + 'px';
    dom.style.top = top + 'px';
  }
  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
  }
  document.ondragstart = (event: DragEvent) => {
    event.preventDefault();
  }
  document.ondragend = (event: DragEvent) => {
    event.preventDefault();
  }
}

/**
 * @description: 获取鼠标点击的方向
 * @param {Event} event
 * @return {string} dir
 */
function getDirection(event: Event): string {
  let dir: string = "";
  let ev = <HTMLElement>event.target
  if (!ev.className.indexOf) return "";
  if (ev.className.indexOf("top") >= 0) dir += "n";
  else if (ev.className.indexOf("bottom") >= 0) dir += "s";
  if (ev.className.indexOf("left") >= 0) dir += "w";
  else if (ev.className.indexOf("right") >= 0) dir += "e";

  return dir
}


/**
 * @description: div伸缩函数
 * @param {MouseEvent} event
 * @param {string} id
 * @param {divStyle} style
 * @param {ECharts} echart
 * @return {*}
 */
export function flex(event: MouseEvent, id: string, style: divStyle, echart: any = null): void {
  const dom = document.getElementById(id) as HTMLElement;
  let clientX: number, clientY: number;
  let disX = event.clientX - dom.offsetLeft;
  let disY = event.clientY - dom.offsetTop;

  let minWidth: number = 0;
  let minHeight: number = 0;

  let resizable: boolean = false;
  let direc: string = ""
  let d = getDirection(event)

  if (d !== "") {
    resizable = true;
    direc = d;
    clientX = event.clientX;
    clientY = event.clientY;
  }

  document.onmousemove = (event: MouseEvent) => {
    if (echart) {
      echart.resize();
    }

    let left = event.clientX - disX;
    let top = event.clientY - disY;
    // 左右边界
    if (left < 0) {
      left = 0
    } else if (left > document.documentElement.clientWidth - dom.offsetWidth) {
      left = document.documentElement.clientWidth - dom.offsetWidth;
    }

    // 上下边界
    if (top < 0) {
      top = 0
    } else if (top > document.documentElement.clientHeight - dom.offsetHeight) {
      top = document.documentElement.clientHeight - dom.offsetHeight;
    }

    if (resizable) {
      // 东
      if (direc.indexOf("e") !== -1) {
        if (direc === "ne") {
          style.top = top + "px";
        }
        style.width = Math.max(minWidth, dom.offsetWidth + (event.clientX - clientX)) + "px";
        clientX = event.clientX
      }
      // 北
      if (direc.indexOf("n") !== -1) {
        if (direc === "nw") {
          style.left = left + "px";
          style.top = top + "px";
        } else if (direc === "n") {
          style.top = top + "px";
        }
        style.height = Math.max(minHeight, dom.offsetHeight + (clientY - event.clientY)) + "px";
        clientY = event.clientY
      }
      // 南
      if (direc.indexOf("s") !== -1) {
        style.height = Math.max(minHeight, dom.offsetHeight + (event.clientY - clientY)) + "px";
        clientY = event.clientY
      }

      // 西
      if (direc.indexOf("w") !== -1) {
        if (direc === "sw") {
          style.left = left + "px";
        } else if (direc === "w") {
          style.left = left + "px";
        }
        style.width = Math.max(minWidth, dom.offsetWidth + (clientX - event.clientX)) + "px";
        clientX = event.clientX
      }
    }
  }

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
  }
  document.ondragstart = (event: DragEvent) => {
    event.preventDefault();
  }
  document.ondragend = (event: DragEvent) => {
    event.preventDefault();
  }
}

/**
 * @description: 获取根元素的fontSize
 * @return {number} rem / ratio
 */
export function getScreenSize(): number {
  const ratio = window.devicePixelRatio;
  const screenWidth = window.screen.width * ratio;
  let rem = 0
  if (screenWidth > 3840) {
    rem = 32;
  } else if (screenWidth > 1920 && screenWidth <= 3840) {
    rem = 24;
  } else if (screenWidth <= 1920) {
    rem = 12;
  }
  document.documentElement.style.fontSize = rem / ratio + "px";
  return rem / ratio
}

/**
 * @description: 取localStorage
 * @param {string} key
 * @return {*}
 */
export function getLocalStorageItem(key: string): any {
  const value: string | null = localStorage.getItem(key);
  return value ? JSON.parse(value) : false
}

/**
 * @description: 存localStorage
 * @param {string} key
 * @return {*}
 */
export function setLocalStorage(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value))
}

/**
 * @description: 取sessionStorage
 * @param {string} key
 * @return {*}
 */
export function getSessionStorage(key: string): any {
  const value: string | null = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : false
}

/**
 * @description: 存localStorage
 * @param {string} key
 * @param {any} value
 * @return {*}
 */
export function setSessionStorage(key: string, value: any): void {
  sessionStorage.setItem(key, JSON.stringify(value))
}

/**
 * @description: 获取屏幕比例
 * @return {string}
 */
export function getScreenModel(): string {
  const rate = document.documentElement.clientWidth / document.documentElement.clientHeight;
  return rate > 3 ? "wide" : "normal"
}

/**
 * @description: 根据id存相应的style
 * @param {string} id
 * @param {divStyle} style
 * @return {*}
 */
export function setIdStyle(id: string, style: divStyle): void {
  const model = getScreenModel();
  const domId = `${id}_${model}`
  setLocalStorage(domId, style)
}

/**
 * @description: 根据id取相应的style
 * @param {string} id
 * @return {*}
 */
export function getIdStyle(id: string): any {
  const model = getScreenModel();
  const domId = `${id}_${model}`
  return getLocalStorageItem(domId)
}

/**
 * @description: 节流函数
 * @param {Function} func
 * @param {number} delay
 * @return {*}
 */
export function throttle(func: Function, delay: number): Function {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (...args: any[]): void {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func();
        timeoutId = undefined;
      }, delay);
    }
  };
}

/**
 * @description: 防抖函数
 * @param {Function} func
 * @param {number} delay
 * @return {*}
 */
export function debounce(func: Function, delay: number): Function {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (): void {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func();
    }, delay);
  };
}

/**
 * @description: 获取当前时间
 * @return {DateType} Date
 */

export function getDateInfo(): DateType {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return {
    year,
    month,
    day,
    hour,
    minute,
    second
  }
}

/**
 * @description: 获取今天占今年总天数的百分比
 * @param {Date} date
 * @return {number}
 */
export function getTodayOfYear(date: Date): number {
  const today = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 3600 * 24));
  const year = date.getFullYear();
  if (year % 100 !== 0 && year % 400 !== 0 && year % 4 === 0) {
    return (today / 366) * 100
  } else {
    return (today / 365) * 100
  }
}

/**
 * @description: 通过日期占比获得日期
 * @param {number} percent
 * @return {*}
 */
export function getNowDateFromPercents(percent: number): any {
  if (percent < 0 || percent > 100) return null;
  let monthList: number[] = [];
  let dayCount = 0;
  let month
  let year = new Date().getFullYear();
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    dayCount = 366;
    monthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  } else {
    dayCount = 365;
    monthList = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  }

  let day = Math.floor(dayCount * percent / 100);
  for (let i = 0; i < monthList.length; i++) {
    if(day - monthList[i] >= 0) {
      day -= monthList[i];
    } else {
      month = i + 1
      break;
    }
  }
  if(month == undefined) {
    month = 12;
    day = 30;
  }
  day++
  return { year, month, day}
}

/**
 * @description: 获取当前时间占今天总时间的百分比
 * @param {Date} date
 * @return {*}
 */
export function getTimeOfToday(date: Date): number {
  const hour = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()
  const timeSum = hour * 60 * 60 + min * 60 + sec
  const daySeconds = 24 * 60 * 60
  return timeSum / daySeconds
}

/**
 * @description: 根据百分比获取当前时间
 * @param {number} percents
 * @return {*}
 */
export function getNowTimeFromPercents(percents: number): any {
  const minCount = 24 * 60
  const currentMinuteCount = minCount * percents
  const hour = Math.trunc(currentMinuteCount / 60)
  const minute = Math.trunc(currentMinuteCount - hour * 60)
  return { hour, minute, second: 0 }
}

/**
 * @description: 读取excel表格内容
 * @param {any} files
 * @return {*}
 */
export function readExcel(files:any):any {
  if(!files) {
    return false;
  } else if( !/\.(xls|xlsx|csv)$/.test(files[0].name.toLowerCase()) ) {
    ElMessage({
      message: '文件格式不正确',
      type: 'error'
    })
  }

  const fileReader = new FileReader();
  fileReader.readAsBinaryString(files[0]);
  fileReader.onload = (e:any) => {
    const data = e.target.result;
    const excel = xlsx.read(data, {
      type: 'binary'
    });
    const excelName = excel.SheetNames[0];
    const excelDatas = xlsx.utils.sheet_to_json(excel.Sheets[excelName]);
    return excelDatas;
  }
}

