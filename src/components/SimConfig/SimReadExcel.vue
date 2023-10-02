<!--
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-09-27 17:21:34
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-10-02 18:31:27
 * @FilePath: /vue-project/src/components/SimConfig/SimReadExcel.vue
 * @Description: 读取excel
-->
<template>
  <div>
    <el-card>
      <template #header>
        <div class="upload_container">
          <p>船舶配置</p>
          <el-upload class="upload"
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
import { useSimConfigStore } from "@/stores/SimConfig";
import { storeToRefs } from "pinia";
import * as xlsx from "xlsx";
import { ElMessage } from "element-plus"

const { setSimShipExcelData }  = useSimConfigStore()
const { simShipExcelData } = storeToRefs(useSimConfigStore())

function upload(file:any,) {
  const files = { 0: file.raw }
  readExcel(files)
}

function readExcel(files:any):any {
  if(!files) {
    return false;
  } else if( !/\.(xls|xlsx|csv)$/.test(files[0].name.toLowerCase()) ) {
    ElMessage({
      message: '文件格式不正确',
      type: 'error'
    })
  }

  const fileReader = new FileReader();
  fileReader.readAsBinaryString(files[0]);
  fileReader.onload = (e:any) => {
    const data = e.target.result;
    const excel = xlsx.read(data, {
      type: 'binary'
    });
    const excelName = excel.SheetNames[0];
    const excelDatas = xlsx.utils.sheet_to_json(excel.Sheets[excelName]);
    setSimShipExcelData(excelDatas)
  }
}
</script>

<style lang="scss" scoped>

</style>