<!--
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-09-27 14:54:57
 * @LastEditors: Liwwwwwwx 1076843408@qq.com
 * @LastEditTime: 2023-10-06 18:46:50
 * @FilePath: \vue-project\src\components\SimConfig\SimSwitchesConfig.vue
 * @Description: 开关配置
-->
<template>
  <div>
    {{ switches.light_effective }}
  </div>
</template>

<script setup lang="ts">
import { useSimConfigStore } from "@/stores/SimConfig";
import { storeToRefs } from "pinia"

const { switches } = storeToRefs(useSimConfigStore());
const { changeSwitches } = useSimConfigStore();
changeSwitches("light_effective",false)
</script>

<style lang="scss" scoped></style>
