<!--
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-09-45 19:22:06
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-09-45 19:32:46
 * @FilePath: /vue-project/src/components/normal/divCorner.vue
 * @Description: 
-->
<template>
  <div>
    <div class="point top"></div>
    <div class="point left"></div>
    <div class="point right"></div>
    <div class="point bottom"></div>
    <div class="point top_left"></div>
    <div class="point top_right"></div>
    <div class="point bottom_left"></div>
    <div class="point bottom_right"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.point {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
}
.top {
  top: -4px;
  left: 50%;
}
.top:hover {
  cursor: n-resize;
}
.bottom {
  bottom: -4px;
  left: 50%;
}
.bottom:hover {
  cursor: s-resize;
}
.left {
  left: -4px;
  top: 50%;
}
.right {
  right: -4px;
  top: 50%;
}
.left:hover,
.right:hover {
  cursor: w-resize;
}

.top_left {
  top: -4px;
  left: -4px;
}
.top_left:hover {
  cursor: nw-resize;
}

.bottom_left {
  bottom: -4px;
  left: -4px;
}
.bottom_left:hover {
  cursor: sw-resize;
}

.top_right {
  top: -4px;
  right: -4px;
}
.top_right:hover {
  cursor: ne-resize;
}

.bottom_right {
  bottom: -4px;
  right: -4px;
}
.bottom_right:hover {
  cursor: se-resize;
}
</style>
