<!--
 * @Description: 仿真配置，场景配置
 * @Author: wenxuan.li1
 * @Date: 2023-08-29 14:15:30
 * @FilePath: \vue-project\src\components\loginSimConfig\simHistoryConfigInfo.vue
 * @LastEditTime: 2023-10-12 23:40:25
 * @LastEditors: Liwwwwwwx 1076843408@qq.com
-->
<template>
  <div>
    <el-card>
      <template #header>
        <div class="upload_history_container">
          <div class="title">历史参数</div>
          <el-upload
            class="upload"
            :show-file-list="false"
            :auto-upload="false"
            action="https://localhost"
            :on-change="handleUpload"
          >
            <el-button slot="trigger" type="primary">导入仿真配置信息</el-button>
          </el-upload>
        </div>
      </template>
      <div class="sim_history_infos"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { readJson } from "@/tools";
import { useSimConfigStore } from "@/stores/simConfigStore";
import type { UploadProps } from "element-plus";

const { setSimHistoryConfigInfo } = useSimConfigStore();
const { simHistoryConfigInfo } = storeToRefs(useSimConfigStore());

/**
 * @description: 处理JSON文件
 * @return {*}
 */
const handleUpload: UploadProps["onChange"] = (file): void => {
  const files = { 0: file.raw };
  readJson(files, setSimHistoryConfigInfo);
};
</script>

<style scoped lang="scss">
.upload_history_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 16px;
  }
}
</style>
@/stores/sim-config
