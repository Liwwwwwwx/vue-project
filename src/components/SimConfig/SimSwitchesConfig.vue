<!--
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-09-27 14:54:57
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-09-27 14:56:30
 * @FilePath: /vue-project/src/components/SimConfig/SimSwitchesConfig.vue
 * @Description: 开关配置
-->
<template>
  <div></div>
</template>

<script setup lang="ts">
import { useSimConfigStore } from "@/stores/SimConfig";
import { storeToRefs } from "pinia";

const { switches } = storeToRefs(useSimConfigStore());
const { changeSwitches } = useSimConfigStore();
console.log(switches);
</script>

<style lang="scss" scoped></style>
