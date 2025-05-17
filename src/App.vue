<script setup>
import ColorButton from "./components/colorButton.vue";
import axios from "axios";
const menuStatus = ref("menuFold");
const featureList = {
  "/": "主页",
  "/login": "登录"
};
// const router = useRouter();
// router.afterEach()
const req = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_ADDR,
  responseType: "json",
  responseEncoding: "utf-8",
  headers: {
    "Content-Type": "application/json",
  }
})
// req.post("/login")
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

<style scoped lang="scss">
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
  :hover {
    background-color: white;
  }
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
.view {
  flex: 1;
  margin-left: 20px;
  height: 100%;
  width: 100%;
}
</style>
