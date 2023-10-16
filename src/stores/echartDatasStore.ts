/*
 * @Author: Liwwwwwwx hbsd_lwx@163.com
 * @Date: 2023-10-14 12:52:51
 * @LastEditors: Liwwwwwwx hbsd_lwx@163.com
 * @LastEditTime: 2023-10-16 21:06:27
 * @FilePath: \vue-project\src\stores\echartDatasStore.ts
 * @Description: echart图表数据
 */
import { defineStore } from "pinia";


export const useEchartsDatasStore = defineStore("echartDatas", () => {
  
  const echartContentDatas = ref([{
    title:"测试数据",
    subTitle:"副标题",
    type:"bar",
    keys:[],
    datas:[],
    show:true
  }])

  const echartStyleDatas = ref([{
    top: "10vh",
    left: "10vh",
    height: "22rem",
    width: "26rem",
    zIndex: 9
  }])
  return {
    echartContentDatas,
    echartStyleDatas
  };
});