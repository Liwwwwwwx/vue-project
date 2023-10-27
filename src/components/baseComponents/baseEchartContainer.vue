<!--
 * @Author: Liwwwwwwx 1076843408@qq.com
 * @Date: 2023-10-14 12:50:08
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-10-25 18:18:14
 * @FilePath: /vue-project/src/components/echarts/baseEchartContainer.vue
 * @Description: 图表组件
-->
<template>
  <div :id="echartContainerId" class="echart_container" v-show="echartConfig.show">
    <div
      class="echart_header"
      @mousedown="drag($event, echartContainerId, echartStyle, isDragChart)"
    >
      <div class="echart_title">
        {{ echartConfig.title }}
        <div class="title_bg"></div>
        <div class="echart_subtitle">- {{ echartConfig.subTitle }}</div>
      </div>
      <div class="echart_operate">
        <Delete v-show="isDragChart" class="echart_set"></Delete>
        <Setting class="echart_set"></Setting>
      </div>
    </div>
    <div :id="myEchartId" ref="myEcahrtDom" class="echart_content"></div>
    <div class="echart_text"></div>
    <base-div-corner
      class="corner"
      @mousedown.stop="flex($event, echartContainerId, echartStyle, myEcahrts[index])"
    ></base-div-corner>
  </div>
</template>

<script setup lang="ts">
import baseDivCorner from "./baseDivCorner.vue";
import * as echarts from "echarts";
import { useEchartsDatasStore } from "@/stores/echartDatasStore";
import { drag, flex, getIdStyle } from "@/tools";
import { divStyle } from "@/type";
import { Delete, Setting } from "@element-plus/icons-vue";
import { commentOptions, getCommentEchartConfig } from "@/tools/echartConfig";
import type { PropType } from "vue";

const { setMyEchartDom } = useEchartsDatasStore();
const { myEcahrts, isDragChart } = storeToRefs(useEchartsDatasStore());

declare interface echartContentDataType {
  title: string;
  subTitle: string;
  type: string;
  keys: string[];
  datas: number[];
  show: boolean;
}

const props = defineProps({
  echartConfig: {
    type: Object as PropType<echartContentDataType>,
    required: true,
  },
  echartStyle: {
    type: Object as PropType<divStyle>,
    required: true,
  },
  echartContainerId: {
    type: String,
    required: true,
  },
  myEchartId: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

// echartDom
const myEcahrtDom = ref();
const echartConfig: any = reactive({});
watch(
  () => props.echartConfig,
  (newValue, oldValue) => {
    Object.assign(echartConfig, newValue);
  },
  {
    immediate: true,
    deep: true,
  }
);
onMounted(() => {
  const myChart = echarts.init(myEcahrtDom.value);
  setMyEchartDom(props.index, myChart);
  setInterval(() => {
    const option: any = getCommentEchartConfig(echartConfig);
    myChart.setOption(option, false);
  }, 1000);
  myChart.setOption(commentOptions, false);
});

// echart样式
const echartContainerStyle = reactive(props.echartStyle);
watch(
  () => props.echartStyle,
  (newValue, oldValue) => {
    Object.assign(echartContainerStyle, newValue);
  }
);
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
    margin: 0.5rem 0 0 1.2rem;
    font-family: Alibaba PuHuiTi;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: space-between;
    position: relative;
    .echart_title {
      width: 10rem;
      display: flex;
      align-items: flex-end;
      background: var(--home-linear-color);
      -webkit-background-clip: text;
      color: transparent;
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
    }
    .echart_operate {
      margin: 0 0.5rem 0 auto;
      display: flex;
      align-items: flex-end;
      .echart_set {
        width: 1.3rem;
        height: 1.3rem;
        margin-left: 0.3rem;
        color: #ffffff;
        transition: all 0.5s ease-in-out;
      }
      .echart_set:hover {
        cursor: pointer;
        color: var(--text-error-color);
        transition: all 0.5s ease-in-out;
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
    height: v-bind("props.echartStyle.height");
    text-align: center;
    line-height: v-bind("props.echartStyle.height");
    font-size: 8rem;
    background: var(--echart-text-color);
    -webkit-background-clip: text;
    color: transparent;
    font-family: Alibaba PuHuiTi;
  }
}
[id^="echart_container"] {
  left: v-bind("props.echartStyle.left");
  top: v-bind("props.echartStyle.top");
  width: v-bind("props.echartStyle.width");
  height: v-bind("props.echartStyle.height");
  z-index: v-bind("props.echartStyle.zIndex");
}
</style>
