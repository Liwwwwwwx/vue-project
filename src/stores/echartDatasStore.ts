/*
 * @Author: Liwwwwwwx hbsd_lwx@163.com
 * @Date: 2023-10-14 12:52:51
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-10-25 23:10:02
 * @FilePath: /vue-project/src/stores/echartDatasStore.ts
 * @Description: echart图表数据
 */
import { defineStore } from "pinia";

export const useEchartsDatasStore = defineStore("echartDatas", () => {

  /**
   * @Description: 生成随机数据
   * @param {number} length
   * @return {*}
   */  
  const generatorRandomNumber = (length: number): number[] => {
    let arr: number[] = []
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * (15 - 10) + 10))
    }
    return arr
  }
  // 图表数据
  const echartDatas = ref([[{
    config: {
      title: "测试数据",
      subTitle: "副标题",
      type: "bar",
      keys: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      datas: generatorRandomNumber(9),
      show: true
    },
    style: {
      top: "10vh",
      left: "10vh",
      height: "22rem",
      width: "26rem",
      zIndex: 9
    }
  }, {
    config: {
      title: "测试数据",
      subTitle: "副标题",
      type: "bar",
      keys: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      datas: generatorRandomNumber(9),
      show: true
    },
    style: {
      top: "10vh",
      left: "10vh",
      height: "22rem",
      width: "26rem",
      zIndex: 9
    }
  }]])
  /**
   * @Description: 赋值图标的Y轴数据为随机数据
   * @return {*}
   */  
  const setEchartDatas = ():void => {
    echartDatas.value[0].forEach((item: any) => {
      item.config.datas = generatorRandomNumber(9)
    })
  }

  // 所有的echart初始化dom
  const myEcahrts = ref<any>([]);
  /**
   * @Description: 赋值给myEcharts
   * @param {number} index
   * @param {any} value
   * @return {*}
   */  
  const setMyEchartDom = (index:number,value:any):void => {
    myEcahrts.value[index] = value
  }

  // 图表是否可拖拽
  const isDragChart = ref<boolean>(false);
  const setIsDragChart = (value:boolean):void => {
    isDragChart.value = value
  }

  const oldEchartStyles = ref<any[]>([]);
  const setOldEchartStyles = (pageIndex:number) => {
    echartDatas.value[pageIndex].forEach((item:any,index:number) => {
      oldEchartStyles.value[index] = item.style
    });
    console.log(oldEchartStyles.value);
  }
  return {
    echartDatas,
    setEchartDatas,
    myEcahrts,
    setMyEchartDom,
    isDragChart,
    setIsDragChart,
    setOldEchartStyles
  };
});