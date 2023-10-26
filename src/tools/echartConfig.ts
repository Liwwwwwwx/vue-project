/*
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-10-25 10:34:39
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @FilePath: /vue-project/src/tools/echartConfig.ts
 * @Description: echartp配置
 */
import { getScreenSize } from "./index";
import * as echarts from "echarts";
const rem: number = getScreenSize();

// 图表颜色
const color_for_axis_lable = "#B3E7F2";
const color_for_text = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  { offset: 0, color: "#FFF" },
  { offset: 0.5347, color: "#74B2EB" },
  { offset: 1, color: "#0C408E" },
]);
const color_for_axis_line = "rgba(255,255,255,0.4)";
const color_for_bars = new echarts.graphic.LinearGradient(0, 1, 0, 0, [
  { offset: 0, color: "#29B8D7" },
  { offset: 1, color: "#B3E7F2" },
]);
const color_for_bars_hover = new echarts.graphic.LinearGradient(0, 1, 0, 0, [
  { offset: 0, color: "rgba(1, 167, 127, 0.5)" },
  { offset: 1, color: "#9EE4D3" },
]);

const color_for_bars_vertical = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
  { offset: 0, color: "#29B8D7" },
  { offset: 1, color: "#B3E7F2" },
]);
const color_for_bars_vertical_hover = new echarts.graphic.LinearGradient(
  0,
  0,
  1,
  0,
  [
    { offset: 0, color: "rgba(1, 167, 127, 0.5)" },
    { offset: 1, color: "#9EE4D3" },
  ],
);
const color_for_pie = [
  "rgba(134, 184, 242, 1)",
  "rgba(97, 103, 255, 1)",
  "rgba(210, 214, 255, 0.91)",

  "rgba(0,137,167,0.85)",

  "rgba(159,53,58,0.85)",
  "rgba(252,159,77,0.85)",

  "rgb(40,67,174)",
  "rgb(193,67,71)",
  "rgb(243,142,88)",

  "rgb(235,163,209)",
  "rgb(8,229,220)",
  "rgb(194,242,46)",

  "rgb(151,227,253)",
  "rgb(243,148,248)",

  "rgb(200,244,37)",
  "rgb(247,177,128)",
  "rgb(245,145,147)",
  "rgb(74,66,175)",
  "rgb(0,30,45)",
  "rgb(248,254,42)",

  "rgb(254,131,38)",
  "rgb(247,217,145)",
  "rgb(194,241,49)",
  "rgb(8,229,220)",
  "rgba(17,50,133,0.85)",
];

// 基本配置
export const commentOptions = {
  textStyle: {
    color: color_for_axis_lable,
    fontSize: 0.9 * rem,
  },
  legend: {
    textStyle: {
      color: "#FFF0BA",
      fontSize: 1 * rem,
    },
    itemHeight: 0.7 * rem,
    itemWidth: 1.3 * rem,
    type: "scroll",
    y: "bottom",
  },
  grid: {
    show: false,
    top: "20%",
    x: 2.8 * rem,
    y: 0,
    x2: 1.7 * rem,
    y2: 2.5 * rem,
    borderWidth: 0,
    // containLabel:true
  },
}


interface echartConfig {
  type: string,
  keys: string[],
  datas: number[],
}
export const getCommentEchartConfig = (config: echartConfig) => {
  const { type,keys,datas } = config
  if(type === "bar") {
    return {
      xAxis: {
        type: "category",
        data: keys,
        axisLabel: {
          inside: false,
          rotate: 0, //倾斜
          fontSize: 0.9 * rem,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: color_for_axis_line,
          },
        },
        textStyle: {
          color: "#ffffff",
          fontSize: 0.9 * rem,
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: true,
          lineStyle: {
            color: color_for_axis_line,
          },
        },
        axisLabel: {
          fontSize: 1 * rem,
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: color_for_axis_line,
          },
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: color_for_axis_line,
          },
        },
        grid: {
          left: 10,
          containLabel: true,
        },
      },
      series: [
        {
          data: datas,
          type: "bar",
          showBackground: false,
          barWidth: 1.2 * rem,
          label: {
            show: true, //开启显示
            position: "top", //在上方显示
            fontSize: 1.5 * rem,
            color: "#fffff",
          },
          color: color_for_bars,
          emphasis: {
            itemStyle: {
              color: color_for_bars_hover,
            },
          },
        },
      ],
    };
  }
}