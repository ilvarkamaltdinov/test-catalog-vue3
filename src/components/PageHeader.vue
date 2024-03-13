<template>
  <header class="header" :class="{'header--scrolled':scrolled}">
    <img src="../assets/vue.svg" alt="">
  </header>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";

let scrolled = ref<boolean>(false)


function headerBehaviour() {
  window.onscroll = async () => {
    window.scrollY > 80 ? scrolled.value = true : scrolled.value = false
  };
}

onMounted(() => {
  headerBehaviour();
});


</script>

<style>
.header {
  height: 120px;
  box-shadow: 0 0 16px rgba(0, 0, 0, .16);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: height .16s;
  background: #fff;
  z-index: 5;
}

.header.header--scrolled {
  height: 80px;
}

.header img {
  width: 64px;
  height: 64px;
  transition: height, width .16s;
}

.header.header--scrolled img {
  width: 48px;
  height: 48px;
}
</style>