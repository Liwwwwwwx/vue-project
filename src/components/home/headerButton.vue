<!--
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-10-25 21:33:28
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @FilePath: /vue-project/src/components/home/headerButton.vue
 * @Description: 
-->
<template>
  <div class="header_btn_container">
    <div class="header_btn">
      <img class="logo" :src="imgSrc" />
      <span>{{ btnText }}</span>
      <img class="triangle" src="@assets/img/triangle.png" v-if="more" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  btnText: {
    type: String,
    required: true,
  },
  more: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.header_btn_container {
  width: 8rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  background-color: rgba(56, 55, 74, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 0.3rem;
  .header_btn {
    display: flex;
    width: 90%;
    justify-content: space-around;
    align-items: center;
    .logo {
      width: 1.4rem;
      height: 1.4rem;
      margin-right: 0.4rem;
    }
    span {
      width: 80%;
      color: var(--text-color);
      font-size: 1.2rem;
    }
    .triangle {
      width: 0.35rem;
      height: 0.35rem;
    }
  }
}
.header_btn_container:hover {
  cursor: pointer;
  background: rgba(56, 55, 74, 0.6);
}
</style>
