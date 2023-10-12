<!--
 * @Author: “Liwwwwwwx” 1076843408@qq.com
 * @Date: 2023-09-15 10:41:18
 * @LastEditors: Liwwwwwwx 1076843408@qq.com
 * @LastEditTime: 2023-10-10 23:02:17
 * @FilePath: \vue-project\src\views\index.vue
 * @Description: 布局
-->

<template>
  <div class="base_container">
    <div class="container">
      <login-sim-config></login-sim-config>
    </div>
  </div>
</template>

<script setup lang="ts">
import loginSimConfig from "@/pages/login/loginSimConfig.vue";
import { generatorDefaultOptions, getTransferOptions } from "@/tools";
import { TransferOptionsType } from "@/type";

const testOptions = generatorDefaultOptions(10);

const states = [
  "California",
  "Illinois",
  "Maryland",
  "Texas",
  "Florida",
  "Colorado",
  "Connecticut ",
];

const options = ref<TransferOptionsType[]>(getTransferOptions(states));

function getTransgetValue(value: any) {
  console.log(value);
}
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
  z-index: 999;
  .container {
    width: 80%;
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
  }
}
</style>
