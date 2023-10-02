<!--
 * @Author: “Liwwwwwwx” 1076843408@qq.com
 * @Date: 2023-09-15 10:41:18
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-09-27 17:27:13
 * @FilePath: /vue-project/src/views/index.vue
 * @Description: 布局
-->
<template>
  <div class="login">
    <SimSwitchesConfig></SimSwitchesConfig>
    <SimReadExcel></SimReadExcel>
  </div>
</template>

<script setup lang="ts">
import SimSwitchesConfig from "@/components/SimConfig/SimSwitchesConfig.vue";
import SimReadExcel from '@/components/SimConfig/SimReadExcel.vue'
</script>

<style scoped lang="scss">
.login {
  background: url(../assets/img/login_bg.png);
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
