<script setup>
const navbarStatus = ref("fold");
</script>

<template>
  <header class="header">
    <button
      class="menuButton"
      @click="navbarStatus = navbarStatus === 'fold' ? 'unfold' : 'fold'"
    >
      菜单
    </button>
  </header>
  <aside class="navbar menu" :class="navbarStatus">
    <p>test</p>
    <p>test1</p>
  </aside>
</template>

<style scoped>
.header {
  height: 75px;
  background-color: gray;
  color: white;
  position: sticky;
  top: 0;
  align-items: center;
  display: flex;
}
.menuButton {
  height: 100%;
  width: 90px;
  border: none;
  background-color: aliceblue;
  font-size: 17px;
  transition: all 0.3s ease-in-out;
}
.menuButton:hover {
  /* background-color: ; */
}
.menu {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: gray;
  transition: all 0.5s ease-in-out;
}
.fold {
  width: 0px;
}
.unfold {
  width: 200px;
}
</style>
