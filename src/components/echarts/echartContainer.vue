<!--
 * @Author: Liwwwwwwx 1076843408@qq.com
 * @Date: 2023-10-14 12:50:08
 * @LastEditors: Liwwwwwwx hbsd_lwx@163.com
 * @LastEditTime: 2023-10-16 21:58:11
 * @FilePath: \vue-project\src\components\echarts\echartContainer.vue
 * @Description: 图表组件
-->
<template>
  <div :id="echartContainerId" class="echart_container">
    <div
      class="echart_header"
      @mousedown="drag($event, echartContainerId, echartsContainerStyle, true)"
    >
      {{ echartsContentData.title }}
      <div class="title_bg"></div>
      <div class="echart_subtitle">- {{ echartsContentData.subTitle }}</div>
      <div class="echart_operate">
        <Delete class="echart_set"></Delete>
        <Setting class="echart_set"></Setting>
      </div>
    </div>
    <div class="echart_content"></div>
    <div class="echart_text"></div>
    <div-corner
      class="corner"
      @mousedown.stop="flex($event, echartContainerId, echartsContainerStyle)"
    ></div-corner>
  </div>
</template>

<script setup lang="ts">
import divCorner from "../normal/divCorner.vue";
import type { PropType } from "vue";
import { drag, flex } from "@/tools";
import { divStyle } from "@/type";
import { Delete, Setting } from "@element-plus/icons-vue";

declare interface echartContentDataType {
  title: string;
  subTitle: string;
  type: string;
  keys: string[];
  datas: string[];
  show: boolean;
}

const props = defineProps({
  echartsContentData: {
    type: Object as PropType<echartContentDataType>,
    required: true,
  },
  echartsContainerStyle: {
    type: Object as PropType<divStyle>,
    required: true,
  },
  echartContainerId: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.echart_container {
  border-radius: 0.38rem;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  .echart_header {
    width: 10rem;
    margin: 0.5rem 0 0 1.2rem;
    font-family: Alibaba PuHuiTi;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: var(--home-linear-color);
    -webkit-background-clip: text;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: transparent;
    position: relative;
    .title_bg {
      width: 8rem;
      height: 60%;
      background: url("../../assets/img/echart_bg.png") center center no-repeat;
      background-size: cover;
      position: absolute;
      transform: skewX(293deg);
      top: 0.3rem;
      left: 0.1rem;
      z-index: -1;
    }
    .echart_subtitle {
      font-size: 1rem;
    }
    .echart_operate {
      display: none;
      .echart_set {
        width: 1.3rem;
        height: 1.3rem;
        z-index: 99;
        margin-left: 0.3rem;
      }
      .echart_set:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.4);
      }
    }
  }
  .echart_content {
    width: 95%;
    height: 90%;
    position: absolute;
    bottom: 0;
    left: 2.5%;
  }
  .echart_text {
    width: 100%;
    height: v-bind("props.echartsContainerStyle.height");
    text-align: center;
    line-height: v-bind("props.echartsContainerStyle.height");
    font-size: 8rem;
    background: var(--echart-text-color);
    -webkit-background-clip: text;
    color: transparent;
    font-family: Alibaba PuHuiTi;
  }
}
[id^="echart_"] {
  left: v-bind("props.echartsContainerStyle.left");
  top: v-bind("props.echartsContainerStyle.top");
  width: v-bind("props.echartsContainerStyle.width");
  height: v-bind("props.echartsContainerStyle.height");
  z-index: v-bind("props.echartsContainerStyle.zIndex");
}
</style>
