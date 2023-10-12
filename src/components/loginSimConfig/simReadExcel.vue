<!--
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-09-27 17:21:34
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-10-02 18:58:26
 * @FilePath: /vue-project/src/components/SimConfig/SimReadExcel.vue
 * @Description: 读取excel
-->
<template>
  <div>
    <el-card>
      <template #header>
        <div class="upload_container">
          <p class="title">船舶配置</p>
          <el-upload
            class="upload"
            ref="upload"
            accept=".xls,.xlsx,.csv"
            action="https://localhost"
            :on-change="upload"
            :show-file-list="false"
            :auto-upload="false"
          >
            <el-button slot="trigger" size="large" type="primary">
              导入船舶配置
            </el-button>
          </el-upload>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useSimConfigStore } from "@/stores/simConfigStore";
import { storeToRefs } from "pinia";
import { readExcel } from "@/tools";

const { setSimShipExcelData, getSimShipExcelData } = useSimConfigStore();
const { simShipExcelData } = storeToRefs(useSimConfigStore());

/**
 * @description: 上传excel文件
 * @param {*} file
 * @return {*}
 */
function upload(file: any): void {
  const files = { 0: file.raw };
  readExcel(files, setSimShipExcelData);
}

const excelData = getSimShipExcelData();
</script>

<style lang="scss" scoped>
.upload_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 16px;
  }
}
</style>
