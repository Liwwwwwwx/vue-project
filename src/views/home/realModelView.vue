<!--
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-10-25 20:30:08
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @FilePath: /vue-project/src/views/home/realModelView.vue
 * @Description: 实时模式
-->
<template>
  <div class="base_container">
    <home-header></home-header>
    <div class="container">
      <echart-page></echart-page>
    </div>
  </div>
</template>

<script setup lang="ts">
import homeHeader from "@/pages/homePages/homeHeader.vue";
import echartPage from "@/pages/realModel/realModelEchartPage.vue";
</script>

<style scoped lang="scss">
.base_container {
  background-image: url(../../assets/img/home_bg.png);
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  .container {
    width: 100%;
    height: calc(100vh - 9rem);
  }
}
</style>
