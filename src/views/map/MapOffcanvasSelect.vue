<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from "pinia"
import { useMapStore } from '@/stores/map'
import axios from 'axios'

const { VITE_URL } = import.meta.env
const mapStore = useMapStore()
const { route } = storeToRefs(mapStore)
const modalView=ref(false)
</script>

<template>
    <div class="container">
        <div>
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">일정</h5>
            <div class="list">
                <div class="items" v-for="(r, index) in route" :key="r.id">
                    <span class="badge rounded-pill text-bg-primary">{{ index + 1 }}</span>
                    <p>{{ r.name }}</p>
                    <button id="deleteBtn" class="btn btn-light btn-sm">-</button>
                </div>
            </div>
        </div>
        <button class="btn btn-primary" @click="modalView.">일정 저장</button>
    </div>


</template>

<style scoped>
* {
    font-family: 'Pretendard';
    padding: 0;
    margin: 0;
}

.offcanvas-title {
    margin-bottom: 1rem;
}

.container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
}

.list {
    display: flex;
    flex-direction: column;
}

.items {
    display: flex;
    align-items: baseline;
    padding: 0.5rem;
    gap: 1rem;
}
</style>