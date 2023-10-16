<template>
  <div class="echart_pages_container">
    <echart-container
      v-for="(item, index) in echartContentDatas"
      :echarts-content-data="item"
      :echart-container-id="baseContainerId + index"
      :echarts-container-style="echartStyleDatas[index]"
    ></echart-container>
  </div>
</template>

<script setup lang="ts">
import echartContainer from "@/components/echarts/echartContainer.vue";
import { useEchartsDatasStore } from "@/stores/echartDatasStore";

const { echartContentDatas, echartStyleDatas } = storeToRefs(useEchartsDatasStore());
const baseContainerId = "echart_container_id_";
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
