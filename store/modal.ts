import {defineStore} from 'pinia'
import {ModalType} from "../types/modal";
import CatalogItem from "../src/components/CatalogItem.vue";


export const useModal = defineStore('modal', {
    state: () => ({
        modal: <ModalType<CatalogItem>>{
            open: false,
            modalData: null
        }
    }),
    actions: {
        openModal(payload: CatalogItem) {
            this.modal = {
                open: true,
                modalData: payload
            }
        },
        closeModal() {
            this.modal.open = false
            setTimeout(() => {
                this.modalData = null
            }, 100)
        }
    }
})