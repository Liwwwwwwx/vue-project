<!--
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-09-21 18:01:41
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-10-03 11:34:15
 * @FilePath: /vue-project/src/components/element/WxInput.vue
 * @Description: 带标题的输入框
-->
<template>
  <div class="wx_input_container">
    <div class="wx_input_title">
      <span>·</span>
      <p class="title">{{ title }}</p>
    </div>
    <el-input
      type="text"
      v-model="inputValue"
      @change="inputValueChange"
      placeholder="请输入"
    ></el-input>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["title", "width"]);
const emit = defineEmits(["emitInputValue"]);
const inputValue = ref("");

function inputValueChange(value: string) {
  emit("emitInputValue", value);
}
</script>

<style lang="scss" scoped>
.wx_input_container {
  display: flex;
  align-items: center;
  .wx_input_title {
    display: flex;
    width: 120px;
    height: 32px;
    line-height: 32px;
    color: var(--text-color);
    .title {
      width: 85px;
      font-size: 30px;
      margin-left: 8px;
    }
  }
  :deep(.el-input) {
    width: v-bind("props.width");
    height: 40px;
    font-size: 20px;
  }
  :deep(.el-input__wrapper) {
    border-radius: 0.15rem;
    padding: 1px 10px;
    .el-input__inner {
      color: var(--text-color);
      height: 35px;
    }
  }
  :deep(.el-input__wrapper.is-focus) {
    box-shadow: none;
  }
  
}
</style>
