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
    <el-card>
      <template #header>
        <div>场景设置</div>
      </template>
      <div class="sim_scene_set">
        <div class="sence_info">
          <el-checkbox
            v-model="switches.roadgate_effective"
            label="进出堆场道闸有效"
          ></el-checkbox>
          <el-checkbox
            v-model="switches.light_effective"
            label="红绿灯有效"
          ></el-checkbox>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useSimConfigStore } from "@/stores/simConfigStore";
import { storeToRefs } from "pinia";

const { switches } = storeToRefs(useSimConfigStore());
</script>

<style lang="scss" scoped>
.sim_scene_set {
  width: 85%;
  .sence_info {
    display: flex;
  }
}
</style>
