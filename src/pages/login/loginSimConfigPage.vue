<!--
 * @Author: Liwwwwwwx 1076843408@qq.com
 * @Date: 2023-10-12 21:35:03
 * @LastEditors: Liwwwwwwx hbsd_lwx@163.com
 * @LastEditTime: 2023-10-16 21:00:47
 * @FilePath: \vue-project\src\pages\login\loginSimConfigPage.vue
 * @Description: 登录页面仿真信息配置
-->
<template>
  <div class="sim_config_form">
    <sim-read-excel v-show="simConfigStep == 0"></sim-read-excel>
    <sim-history-config-info></sim-history-config-info>
    <sim-switches-config v-show="simConfigStep == 1"></sim-switches-config>
    <el-steps :active="simConfigStep" finish-status="success" align-center>
      <el-step
        v-for="(item, index) in simConfigStepInfo"
        :title="item"
        @click="changeSimConfigStep(index)"
      />
    </el-steps>
  </div>
</template>

<script lang="ts" setup>
import simReadExcel from "@/components/loginSimConfig/simReadExcel.vue";
import simSwitchesConfig from "@/components/loginSimConfig/simSwitchesConfig.vue";
import simHistoryConfigInfo from "@/components/loginSimConfig/simHistoryConfigInfo.vue";
import { ElMessageBox } from "element-plus";

// 仿真配置步骤条
const simConfigStep = ref(0);

// 仿真配置信息提示
const simConfigStepInfo = ["仿真基本信息", "集装箱和场景设置信息", "船舶计划信息"];

const changeSimConfigStep = (index: number) => {
  if (index !== simConfigStep.value) {
    ElMessageBox({
      title: "温馨提示",
      message: "确定要切换到第" + (index + 1) + "步吗？",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "确定",
      cancelButtonText: "取消",
    })
      .then(() => {
        simConfigStep.value = index;
      })
      .catch(() => {});
  }
};
</script>

<style scoped lang="scss">
.sim_config_form {
  :deep(.el-step__icon:hover) {
    cursor: pointer;
  }
}
</style>
