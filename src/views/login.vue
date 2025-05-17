<script setup>
import inputBox from "../components/inputBox.vue";
</script>
<template>
  <div class="form">
    <inputBox type="text" text="用户名" class="input" />
    <inputBox type="password" text="密码" class="input" />
    <inputBox type="text" text="验证码" class="input" />
  </div>
</template>
<style scoped lang="scss">
.form {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .input {
    width: 300px;
    height: 40px;
    margin: 15px;
  }
}
</style>
