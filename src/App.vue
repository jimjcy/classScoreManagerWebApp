<script setup>
import ColorButton from "./components/colorButton.vue";
const menuStatus = ref("menuFold");
const featureList = {
  "/": "主页",
  "/login": "登录"
};
</script>

<template>
  <header class="header">
    <colorButton
      text="菜单"
      class="menuButton"
      @click="
        menuStatus = menuStatus === 'menuFold' ? 'menuUnfold' : 'menuFold'
      "
    />
  </header>
  <div class="content">
    <aside class="menu" :class="menuStatus">
      <RouterLink v-for="(value, key) in featureList" :key="key" :to="key"
        ><ColorButton class="menuListButton" :text="value"></ColorButton
      ></RouterLink>
    </aside>
    <div class="view">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 75px;
  background-color: #596164;
  color: white;
  position: sticky;
  top: 0;
  align-items: center;
  display: flex;
}
.content {
  display: flex;
  height: calc(100% - 75px);
}
.menuButton {
  height: 100%;
  width: 90px;
  font-size: 19px;
}
.menuButton:hover {
  background-color: white;
}
.menu {
  height: 100%;
  overflow: hidden;
  background-color: #596164;
  transition: all 0.5s ease-in-out;
}
.menuFold {
  width: 0px;
}
.menuUnfold {
  width: 200px;
}
.menuListButton {
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  height: 70px;
  width: 180px;
  border-radius: 15px;
  font-size: 19px;
}
/* .view {
  height: 100%;
  width: 100%;
} */
</style>
