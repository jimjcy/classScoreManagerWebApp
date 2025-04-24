<script setup>
import ColorButton from "./components/colorButton.vue";
const navbarStatus = ref("fold");
</script>

<template>
  <header class="header">
    <colorButton
      text="菜单"
      class="menuButton"
      @click="navbarStatus = navbarStatus === 'fold' ? 'unfold' : 'fold'"
    />
  </header>
  <aside class="navbar menu" :class="navbarStatus">
    <ColorButton class="menuListButton"></ColorButton>
    <ColorButton class="menuListButton"></ColorButton>
    <ColorButton class="menuListButton"></ColorButton>
  </aside>
  <RouterView class="" />
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
.menuButton {
  height: 100%;
  width: 90px;
  font-size: 19px;
}
.menuButton:hover {
  background-color: white;
}
.menu {
  height: calc(100% - 75px);
  overflow: hidden;
  position: absolute;
  top: 75px;
  background-color: #596164;
  transition: all 0.5s ease-in-out;
  /* overflow-x: hidden;
  overflow-y: scroll; */
}
.fold {
  width: 0px;
}
.unfold {
  width: 200px;
}
.menuListButton {
  margin-top: 15px;
  height: 70px;
  width: 100%;
  border-radius: 15px;
}
</style>
