<!--
 * @Author: “Liwwwwwwx” hbsd_lwx@163.com
 * @Date: 2023-10-25 20:38:53
 * @LastEditors: “Liwwwwwwx” hbsd_lwx@163.com
 * @FilePath: /vue-project/src/pages/homePages/homeHeader.vue
 * @Description: 顶部导航栏
-->
<template>
  <div class="home_header_container">
    <div class="header_operate">
      <!-- logo -->
      <div class="logo"></div>
      <!-- 值班信息 -->
      <div class="duty_container">
        <div class="duty_info">
          <span>今日带班领导:</span>
          <input class="input" type="text" v-model="dutyInfos.leader" />
        </div>
        <div class="duty_info">
          <span>今日值班人员:</span>
          <input class="input" type="text" v-model="dutyInfos.person" />
        </div>
      </div>
      <!-- 左侧操作栏 -->
      <div class="operate">
        <header-button
          v-for="(item, index) in btnInfosLeft"
          :img-src="item.imgSrc"
          :btn-text="item.text"
          :more="item.more"
          @click="handleLeftBtnClick(index)"
        ></header-button>
      </div>
    </div>
    <div class="header_text">实时模式</div>
    <div class="header_operate">
      <div class="operate">
        <header-button
          v-for="(item, index) in btnInfosRight"
          :img-src="item.imgSrc"
          :btn-text="item.text"
          :more="item.more"
        ></header-button>
      </div>
      <div class="time_info">
        <div class="time">2023-10-24</div>
        <div class="time">12:00:00</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import headerButton from "@/components/home/headerButton.vue";
import tb_logo_src from "@assets/img/tb_logo.png";
import tb_logo_checked_src from "@assets/img/tb_logo_checked.png";
import element from "@assets/img/element.png";
import element_checked from "@assets/img/element_checked.png";
import setting from "@assets/img/setting.png";
import setting_checked from "@assets/img/setting_checked.png";
import scene from "@assets/img/scene.png";
import view from "@assets/img/view.png";
import view_checked from "@assets/img/view_checked.png";
import recover from "@assets/img/recover.png";
import recover_checked from "@assets/img/recover_checked.png";
import { useEchartsDatasStore } from "@/stores/echartDatasStore";
const { setIsDragChart, setOldEchartStyles } = useEchartsDatasStore();

const dutyInfos = reactive({
  leader: "xxx",
  person: "xxx xxx",
});

// 左右两侧的按钮信息
const btnInfosLeft = [
  {
    imgSrc: tb_logo_src,
    imgCheckedSrc: tb_logo_checked_src,
    text: "图表设置",
    more: false,
  },
  {
    imgSrc: element,
    imgCheckedSrc: element_checked,
    text: "要素筛选",
    more: true,
  },
  {
    imgSrc: setting,
    imgCheckedSrc: setting_checked,
    text: "全局设置",
    more: false,
  },
];

const handleLeftBtnClick = (index: number) => {
  if (index === 0) {
    setIsDragChart(true);
    setOldEchartStyles(0); // 保存历史样式信息
  }
};
const btnInfosRight = [
  {
    imgSrc: scene,
    imgCheckedSrc: scene,
    text: "场景漫游",
    more: true,
  },
  {
    imgSrc: view,
    imgCheckedSrc: view_checked,
    text: "视角设定",
    more: true,
  },
  {
    imgSrc: recover,
    imgCheckedSrc: recover_checked,
    text: "初始视角",
    more: false,
  },
];
</script>

<style scoped lang="scss">
.home_header_container {
  background-image: url(../../assets/img/nav_bg.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 4.5rem;
  display: flex;
  .header_operate {
    width: 37.5%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .logo {
      background-image: url(../../assets/img/logo_no_margin.png);
      background-size: cover;
      background-position: center;
      width: 8rem;
      height: 100%;
    }
    .duty_container {
      display: flex;
      flex-direction: column;
      font-size: 0.9rem;
      .duty_info {
        display: flex;
        color: var(--text-color);
        margin-top: 0.5rem;
        .input {
          background: var(--text-color);
          -webkit-background-clip: text;
          color: transparent;
          box-shadow: none;
          font-size: 1.2rem;
          margin: 0;
          padding: 0;
          border: none;
          width: 4.5rem;
        }
      }
    }
    .operate {
      display: flex;
      align-items: center;
    }
    .time_info {
      width: 30%;
      height: 70%;
      margin-top: 0.5rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .time {
        width: 50%;
        color: var(--text-color);
        font-size: 1rem;
      }
    }
  }
  .header_text {
    width: 25%;
    height: 4.5rem;
    color: #fff;
    text-align: center;
    font-family: Alibaba PuHuiTi;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
