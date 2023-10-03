<!--
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-10-02 19:25:18
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-10-03 11:30:18
 * @FilePath: /vue-project/src/components/element/WxTransfer.vue
 * @Description: 穿梭框
-->
<template>
  <div class="transfer_container">
    <el-transfer
    v-model="value"
    filterable
    :filter-method="filterMethod"
    filter-placeholder="State Abbreviations"
    :data="data"
  />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Option {
  key: number
  label: string
  initial: string
}

const generateData = () => {
  const data: Option[] = []
  const states = [
    'California',
    'Illinois',
    'Maryland',
    'Texas',
    'Florida',
    'Colorado',
    'Connecticut ',
  ]
  const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT']
  states.forEach((city, index) => {
    data.push({
      label: city,
      key: index,
      initial: initials[index],
    })
  })
  return data
}

const data = ref<Option[]>(generateData())
const value = ref([])

const filterMethod = (query:any, item:any) => {
  return item.initial.toLowerCase().includes(query.toLowerCase())
}
</script>
<style scoped lang="scss">
.transfer_container{
  width: 100%;
  margin-top: 2rem;
  .el-transfer {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: var(--card-bg-color);
    :deep(.el-transfer-panel) {
      background-color: var(--card-bg-color);
      color: var(--text-color);
      .el-transfer-panel__header,.el-transfer-panel__body{
        background-color: var(--card-bg-color);
        border: none;
      }
      .el-checkbox,.el-checkbox__label{
        color: var(--text-color);
      }
    }
    :deep(.el-transfer__buttons){
      display: flex;
      flex-direction: column;
      padding: 0;
    }
    :deep(.el-transfer__button){
      margin: 0 0 1rem 0;
    }
  }
}
</style>
