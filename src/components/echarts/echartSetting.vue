<!--
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-10-25 18:52:08
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @FilePath: /vue-project/src/components/echarts/echartSetting.vue
 * @Description: 
-->
<template>
  <div class="echart_setting_container">
    <div class="echart_setting">新建图表</div>
    <div class="echart_setting">保存布局</div>
    <div class="echart_setting echart_quit" @click="handleQuit">退出编辑</div>
  </div>
</template>

<script setup lang="ts">
import { useEchartsDatasStore } from "@/stores/echartDatasStore";
const { setIsDragChart } = useEchartsDatasStore();

const handleQuit = () => {
  setIsDragChart(false);
};
</script>

<style scoped lang="scss">
.echart_setting_container {
  width: 30rem;
  position: absolute;
  left: 50%;
  top: 10rem;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
  z-index: 999;
  .echart_setting {
    padding: 0.5rem 1.25rem;
    color: var(--text-color);
    border-radius: 0.5rem;
    background: rgba(56, 55, 74, 0.8);
    transition: all 0.5s ease-in-out;
  }
  .echart_setting:hover {
    cursor: pointer;
    color: var(--bg-normal-color);
  }
  .echart_quit:hover {
    color: var(--text-error-color);
  }
}
</style>
