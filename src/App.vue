<template>
  <PageHeader/>
  <main class="main">
    <div class="container">
      <MainCatalog/>
    </div>
  </main>
  <CatalogModal/>
</template>
<script setup>
import MainCatalog from "./components/MainCatalog.vue";
import PageHeader from "./components/PageHeader.vue";
import CatalogModal from "./components/CatalogModal.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, serif;
}


.main {
  padding-top: 120px;
}

.container {
  width: 100%;
  padding: 16px;
}
</style>