<script setup>
const props = defineProps({
  text: String,
});
</script>
<template>
  <button class="button">{{ text }}</button>
</template>
<style scoped>
.button {
  border: none;
  background-color: grey;
  transition: all 0.5s ease-in-out;
  color: black;
}
.button:hover {
  background-color: white;
}
</style>
