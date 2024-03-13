<template>
  <ul class="catalog">
    <CatalogItem v-for="item in catalogList" :key="item.id">
      <template #image>
        <img :src="item.image" :alt="item.title">
      </template>
      <template #title>
        {{ item.title }}
      </template>
      <template #description>
        {{ item.description }}
      </template>
      <template #controls>
        <button @click="openModal(item)" type="button" class="button button--more">Подробнее</button>
      </template>
    </CatalogItem>
  </ul>
  <VueEternalLoading :load="load" margin="16px">
    <template #loading>
      <ul class="catalog">
        <CatalogItem v-for="item in 8" :key="item"/>
      </ul>
    </template>
    <template #no-more>
      <div class="no-more">
        Больше нет
      </div>
    </template>
  </VueEternalLoading>
</template>

<script setup lang="ts">
import CatalogItem from "./CatalogItem.vue";
import {ref} from "vue";
import {CatalogItemType, CatalogListType} from "../../types/catalog";
import {VueEternalLoading, LoadAction} from '@ts-pro/vue-eternal-loading';

import {useModal} from "../../store/modal";

function openModal(item: CatalogItemType) {
  useModal().openModal(item)
}


const catalogList = ref<CatalogListType>([])
let counter = ref<number>(0)

//счетчик чтобы не отправлять запрос бесконечно

function loadCatalog(): Promise<CatalogListType> {
  return fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => data);
}

async function load({loaded, noMore}: LoadAction): Promise<void> {
  const loadedCatalogList = await loadCatalog();
  catalogList.value.push(...loadedCatalogList);
  counter.value += 1;
  if (counter.value < 5) {
    loaded();
  } else {
    noMore();
  }
}
</script>

<style>
.catalog {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.no-more {
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  padding: 32px;
}
</style>