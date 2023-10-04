/*
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-09-06 14:32:10
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-09-19 18:55:02
 * @FilePath: /vue-project/src/stores/home.ts
 * @Description: pinia全局测试数据
 */

import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", () => {
  const tableData = ref([
    {
      date: "2016-05-03",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-04",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-01",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
  ]);

  return {
    tableData,
  };
});
