<!--
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-09-19 19:39:10
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-09-25 19:11:49
 * @FilePath: /vue-project/src/components/demo.vue
 * @Description: 
-->
<template>
  <div :id="id" class="demo">
    <divCorner @mousedown="flex($event, id, style)"></divCorner>
  </div>
</template>

<script setup lang="ts">
import { drag, flex } from "@/tools";
import { divStyle } from "@/type";
import divCorner from "@/components/normal/divCorner.vue";

const id = "demo";
const style: divStyle = reactive({
  width: "200px",
  height: "200px",
  top: "50px",
  left: "50px",
  zIndex: 99,
});
</script>

<style lang="scss" scoped>
.demo {
  position: absolute;
  width: v-bind("style.width");
  height: v-bind("style.height");
  left: v-bind("style.left");
  top: v-bind("style.top");
  background-color: red;
}
</style>
