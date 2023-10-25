/*
 * @Author: Liwwwwwwx hbsd_lwx@163.com
 * @Date: 2023-10-14 12:52:51
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-10-25 14:53:40
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
  const echartDatas = ref([{
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
  }])

  
  const setEchartDatas = () => {
    echartDatas.value.forEach((item: any) => {
      item.config.datas = generatorRandomNumber(9)
    })
  }

  const myEcahrts = ref<any>([]);

  const setMyEchartDom = (index:number,value:any) => {
    myEcahrts.value[index] = value
  }

  return {
    echartDatas,
    setEchartDatas,
    myEcahrts,
    setMyEchartDom
  };
});