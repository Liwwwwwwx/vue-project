<!--
 * @Author: “Liwwwwwwx” 1076843408@qq.com
 * @Date: 2023-09-15 17:09:37
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-10-02 20:56:03
 * @FilePath: /vue-project/src/components/element/WxCheckBox.vue
 * @Description: 多选框二次封装
-->

<template>
  <div class="wx_checkbox_container" :class="isScrollbar ? 'scrollbar_container' : ''">
    <el-checkbox-group
      @change="exportCheckedData"
      v-model="data"
      class="checkbox_box"
      :class="direction === 'row' ? 'checkbox_row' : 'checkbox_column'"
    >
      <el-checkbox
        class="checkbox_box_item"
        v-for="(item, index) in options"
        :label="item.label"
      >
        {{ item.value }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["options", "direction", "isScrollbar"]);
const emit = defineEmits(["exportCheckedData"]);
const data = ref([]);

/**
 * @description: 传递数据给父组件
 * @return {*}
 */
function exportCheckedData(): void {
  emit("exportCheckedData", data.value);
}
</script>

<style scoped lang="scss">
.wx_checkbox_container {
  width: 500px;
  height: 160px;
  overflow-y: auto;
  .checkbox_box {
    display: flex;
    .checkbox_box_item {
      padding: 4px 10px 4px 4px;
      margin: 0 16px 16px 0;
      height: 32px;
    }
    .checkbox_box_item:hover {
      background-color: var(--text-hover-background-color);
      border-radius: 3.2px;
    }
  }
  .checkbox_row {
    flex-direction: row;
  }
  .checkbox_column {
    flex-direction: column;
  }
}

</style>
