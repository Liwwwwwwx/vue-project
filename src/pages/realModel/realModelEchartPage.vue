<!--
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-10-25 10:25:38
 * @LastEditors: Liwwwwwwx hbsd_lwx@163.com
 * @FilePath: \vue-project\src\pages\realModel\realModelEchartPage.vue
 * @Description: 图表页面
-->
<template>
  <div class="echart_pages_container">
    <base-echart-container
      v-for="(item, index) in echartDatas[0]"
      :echart-config="item.config"
      :echart-container-id="item.id"
      :echart-style="item.style"
      :my-echart-id="myEchartId + index"
      :index="index"
    >
    </base-echart-container>
    <echart-setting v-show="isDragChart"></echart-setting>
  </div>
</template>

<script setup lang="ts">
import baseEchartContainer from "@/components/baseComponents/baseEchartContainer.vue";
import echartSetting from "@/components/echarts/echartSetting.vue";
import { useEchartsDatasStore } from "@/stores/echartDatasStore";

const { echartDatas, isDragChart } = storeToRefs(useEchartsDatasStore());
const { setEchartDatas } = useEchartsDatasStore();
const myEchartId = "my_chart_id_";
setInterval(() => {
  setEchartDatas();
}, 1000);
</script>

<style scoped lang="scss">
.echart_pages_container {
  width: 100%;
  height: 100%;
}
</style>
