<template>
  <transition name="modal">
    <div class="modal" v-if="modal.open">
      <div class="modal__overflow" @click="storeModal.closeModal"></div>
      <div class="modal__window">
        <div class="modal__head">
          <button @click="storeModal.closeModal" class="modal__head-close">
            <img src="../assets/close.svg" alt="закрыть">
          </button>
        </div>
        <div class="modal__body">
          <div class="modal__img-wrapper">
            <img :src="modal.modalData.image" :alt="modal.modalData.title">
          </div>
          <div class="modal__title">
            {{ modal.modalData.title }}
          </div>
          <div class="modal__description">
            {{ modal.modalData.description }}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import CatalogItem from "./CatalogItem.vue";
import {useModal} from "../../store/modal";
import {computed} from "vue";

const storeModal = useModal()
const modal = computed(() => storeModal.modal)

</script>

<style>

.modal-enter-active,
.modal-leave-active {
  transition: 0.32s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}


.modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__overflow {
  background: rgba(0, 0, 0, .32);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.modal__window {
  width: 320px;
  background: #fff;
  position: absolute;
  z-index: 2;
  border-radius: 16px;
  padding: 16px;
}

.modal__description {
  margin-top: 16px;
  color: darkgray;
}

.modal__img-wrapper {
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__img-wrapper img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}

.modal__title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 16px;
}

.modal__head {
  display: flex;
  justify-content: space-between;
}

.modal__head-close {
  width: 32px;
  height: 32px;
  background: none;
  outline: none;
  border: none;
  margin-left: auto;
}

@media (hover: hover) {
  .modal__head-close, .modal__overflow {
    cursor: pointer;
    transition: opacity .16s;
  }

  .modal__head-close:hover {
    opacity: .64;
  }
}
</style>