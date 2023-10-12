<!--
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-10-08 11:51:56
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @LastEditTime: 2023-10-08 17:35:25
 * @FilePath: /vue-project/src/components/wasm/wasmTest.vue
 * @Description: 
-->
<template>
  <div></div>
</template>

<script setup lang="ts">
function loadWebAssembly(path: any, imports: any = {}): any {
  return fetch(path) // 加载文件
    .then((response) => response.arrayBuffer()) // 转成 ArrayBuffer
    .then((buffer) => WebAssembly.compile(buffer))
    .then((module) => {
      imports.env = imports.env || {};
      // 开辟内存空间
      imports.env.memoryBase = imports.env.memoryBase || 0;

      if (!imports.env.memory) {
        imports.env.memory = new WebAssembly.Memory({ initial: 256 });
      }
      // 创建变量映射表
      imports.env.tableBase = imports.env.tableBase || 0;

      if (!imports.env.table) {
        // 在 MVP 版本中 element 只能是 "anyfunc"
        imports.env.table = new WebAssembly.Table({
          initial: 0,
          element: "anyfunc",
        });
      }
      // 创建 WebAssembly 实例
      return new WebAssembly.Instance(module, imports);
    });
}

// 加载wasm文件
loadWebAssembly("/static/test.wasm").then((instance: any) => {
  //调用c里面的方法
  const toChar = instance.exports.toChar as CallableFunction;
  const add = instance.exports.add as CallableFunction;
  const square = instance.exports.square as CallableFunction;

  console.log("return:   ", toChar("12352324"));
  console.log("10 + 20 =", add(10, 20));
  console.log("3*3 =", square(3));
  console.log("(2 + 5)*2 =", square(add(2 + 5)));
});
</script>

<style lang="scss" scoped></style>
