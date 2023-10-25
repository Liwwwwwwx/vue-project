<!--
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-10-25 10:25:38
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @FilePath: /vue-project/src/pages/login/echartPage.vue
 * @Description: 图表页面
-->
<template>
  <div class="echart_pages_container">
    <base-echart-container
      v-for="(item, index) in echartDatas"
      :echart-config="item.config"
      :echart-container-id="baseContainerId + index"
      :echart-style="item.style"
      :my-echart-id="myEchartId + index"
      :index="index"
    >
    </base-echart-container>
    <div v-for="item in echartDatas">{{ item.config.datas }}</div>
  </div>
</template>

<script setup lang="ts">
import baseEchartContainer from "@/components/echarts/baseEchartContainer.vue";
import { useEchartsDatasStore } from "@/stores/echartDatasStore";

const { echartDatas } = storeToRefs(useEchartsDatasStore());
const { setEchartDatas } = useEchartsDatasStore();
const baseContainerId = "echart_container_id_";
const myEchartId = "my_chart_id_";
setInterval(() => {
  setEchartDatas();
}, 1000);
</script>

<style scoped lang="scss">
.echart_pages_container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
