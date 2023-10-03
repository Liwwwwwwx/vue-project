<!--
 * @Author: “Liwwwwwwx” 1076843408@qq.com
 * @Date: 2023-09-15 10:41:18
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-10-03 12:58:55
 * @FilePath: /vue-project/src/views/index.vue
 * @Description: 布局
-->
<template>
  <div class="base_container">
    <div class="container">
      <SimReadExcel></SimReadExcel>
      <WxTransfer :options="options" @emit-transfer-value="getTransgetValue"></WxTransfer>
      <WxCheckBox :options="testOptions" direction="row"></WxCheckBox>
      <WxInputVue title="标题" width="20"></WxInputVue>
    </div>
  </div>
</template>

<script setup lang="ts">
import SimReadExcel from "@/components/SimConfig/SimReadExcel.vue";
import WxCheckBox from "@/components/element/WxCheckBox.vue";
import WxTransfer from "@/components/element/WxTransfer.vue";
import WxInputVue from "@/components/element/WxInput.vue";
import { generatorDefaultOptions,getTransferOptions } from "@/tools";
import { TransferOptionsType } from "@/type";

const testOptions = generatorDefaultOptions(10)


  const states = [
    'California',
    'Illinois',
    'Maryland',
    'Texas',
    'Florida',
    'Colorado',
    'Connecticut ',
  ]


const options = ref<TransferOptionsType[]>(getTransferOptions(states))
function getTransgetValue(value:any) {
  console.log(value);
}
</script>

<style scoped lang="scss">
.base_container {
  background: url(../assets/img/home_bg.png) no-repeat no-repeat center;
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
