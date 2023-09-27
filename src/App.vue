<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { provide } from "vue";

provide("$ec", echarts);
</script>

<style scoped></style>
