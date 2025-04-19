<script setup>
const navbarStatus = ref("unfold");

</script>

<template>
    <header class="header"><p>test</p>
    </header>
    <aside class="navbar" :class="navbarStatus">
        <p></p>
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
</style>
