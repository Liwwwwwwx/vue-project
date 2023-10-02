<!--
 * @Author: “Liwwwwwwx” 1076843408@qq.com
 * @Date: 2023-09-15 10:41:18
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-10-02 19:30:02
 * @FilePath: /vue-project/src/views/index.vue
 * @Description: 布局
-->
<template>
  <div class="base_container">
    <div class="container">
      <SimReadExcel></SimReadExcel>
      <WxTransfer></WxTransfer>
      <WxCheckBox :options="testOptions" direction="row"></WxCheckBox>
    </div>
  </div>
</template>

<script setup lang="ts">
import SimReadExcel from "@/components/SimConfig/SimReadExcel.vue";
import WxCheckBox from "@/components/element/WxCheckBox.vue";
import WxTransfer from "@/components/element/WxTransfer.vue";
import { generatorDefaultOptions } from "@/tools";

const testOptions = generatorDefaultOptions(10)
</script>

<style scoped lang="scss">
.base_container {
  background: url(../assets/img/login_bg.png);
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .container {
    width: 80%;
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
  }
}
</style>
