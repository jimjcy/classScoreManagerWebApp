<script setup>
const props = defineProps({
  type: String,
  text: String,
});
const model = defineModel();
</script>
<template>
  <div class="inputBox">
    <p class="tip">{{ text }}</p>
    <input class="input" :type="props.type" v-model="model" />
  </div>
</template>
<style scoped lang="scss">
.inputBox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .tip {
    flex: 0;
    white-space: nowrap;
    font-size: 20px;
  }
  .input {
    flex: 1;
    margin: 10px;
    height: 100%;
    outline: none;
    font-size: 20px;
    border: {
      left: none;
      right: none;
      top: none;
    }
  }
}
</style>
