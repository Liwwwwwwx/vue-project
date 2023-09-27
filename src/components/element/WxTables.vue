<!--
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-09-19 18:22:52
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-09-21 14:48:06
 * @FilePath: /vue-project/src/components/element/WxTables.vue
 * @Description: 
-->
<template>
  <div class="wx_tables_container">
    <el-table
      :data="tableData"
      header-cell-class-name="table_header_cell"
      cell-class-name="table_cell"
      style="width: 100%"
    >
      <el-table-column prop="date" align="center" label="Date" />
      <el-table-column prop="name" align="center" label="Name" />
      <el-table-column prop="address" align="center" label="Address" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { useHomeStore } from "@/stores/home";
import { storeToRefs } from "pinia";
const home_store = useHomeStore();
const { tableData } = storeToRefs(home_store);
</script>

<style scoped lang="scss"></style>
