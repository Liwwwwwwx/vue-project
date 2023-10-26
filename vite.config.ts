/*
 * @Description:
 * @Author: wenxuan.li1
 * @Date: 2023-07-11 11:08:22
 * @FilePath: \vue-project\vite.config.ts
 * @LastEditTime: 2023-10-18 21:09:23
 * @LastEditors: Liwwwwwwx hbsd_lwx@163.com
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  const modes = loadEnv(mode, process.cwd()).VITE_APP_MODE;

  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router", "pinia"],
        dts: "src/auto-import.d.ts", // 路径下自动生成文件夹存放全局指令
      }),
      vueJsxPlugin()
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
    },
    base: modes === "development" ? "/" : "/scripts/",
    build: {
      outDir: "scripts",
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
        },
      },
    },
  });
};
