/*
 * @Author: Liwwwwwwx hbsd_lwx@163.com
 * @Date: 2023-10-14 12:52:51
 * @LastEditors: Liwwwwwwx hbsd_lwx@163.com
 * @LastEditTime: 2023-10-26 21:51:32
 * @FilePath: \vue-project\src\stores\echartDatasStore.ts
 * @Description: echart图表数据
 */
import { defineStore } from "pinia";
import { getIdStyle } from "@/tools";

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
    id:"echart_container_1_1",
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
    id:"echart_container_1_2",
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
  const setEchartDatas = (): void => {
    echartDatas.value[0].forEach((item: any) => {
      item.config.datas = generatorRandomNumber(9)
    })
  }

  // 点击图表设置时，此时的所有图表演示信息
  const oldEchartStyles = ref<any[]>([]);
  const setOldEchartStyles = (pageIndex: number) => {
    echartDatas.value[pageIndex].forEach((item: any, index: number) => {
      oldEchartStyles.value[index] = JSON.parse(JSON.stringify(item.style))
    });
  }
  /**
   * @description: 保存当前标签页的图表信息
   * @param {number} pageIndex 标签页下脚标
   * @return {*}
   */
  const saveEchartStyle = (pageIndex: number): void => {
    const chartStyles = echartDatas.value[pageIndex]
    chartStyles.forEach((item: any) => {
      if(getIdStyle(item.style)){
        item.style = getIdStyle(item.id)
      }
    });
  }

  const notSaveEchartStyle = (pageIndex: number): void => {
    const chartStyles = echartDatas.value[pageIndex]
    console.log(oldEchartStyles.value);
    chartStyles.forEach((item:any,index:number) => {
      item.style = oldEchartStyles.value[index]
    });
  }

  // 所有的echart初始化dom
  const myEcahrts = ref<any>([]);
  /**
   * @Description: 赋值给myEcharts
   * @param {number} index
   * @param {any} value
   * @return {*}
   */
  const setMyEchartDom = (index: number, value: any): void => {
    myEcahrts.value[index] = value
  }

  // 图表是否可拖拽
  const isDragChart = ref<boolean>(false);
  const setIsDragChart = (value: boolean): void => {
    isDragChart.value = value
  }

  return {
    echartDatas,
    setEchartDatas,
    myEcahrts,
    setMyEchartDom,
    isDragChart,
    setIsDragChart,
    setOldEchartStyles,
    saveEchartStyle,
    notSaveEchartStyle
  };
});