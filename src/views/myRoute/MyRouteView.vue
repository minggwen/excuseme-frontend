<script setup>
import { stationAxios } from "@/util/http-commons";
import { defineProps, watch, ref, onMounted } from 'vue';

const tour = ref();
const myRoute = ref();
const props = defineProps({
    select: {
        type: Object,
        required: true
    }
});
watch(() => props.select, (newVal) => {
    tour.value = newVal;
    const axiosInstance = stationAxios();
    axiosInstance.get("/route/" + tour.value.id)
        .then((response) => {
            myRoute.value = response.data;
            console.log(myRoute.value)
        })
        .catch((error) => {
            console.error(error);
        })
});
</script>

<template>
    <div class="container" v-if="myRoute && myRoute.routeDto">
        <h3 style="font-weight: 600;">{{ myRoute.routeDto.title }}</h3>
        <div>
            <div v-for="(tour, index) in myRoute.tourList" class="tour-container">
                <span class="badge rounded-pill text-bg-light">{{ index + 1 }}</span>
                <img :src="tour.img" width="73" height="70" v-show="tour.img != ''">
                <img src="https://i.ibb.co/PTYxX92/alt.png" width="73" height="70" v-show="tour.img == ''">
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.tour-container {
    width: 100%;
    padding: 1rem 0rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 24px;
}

.tour-container span {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tour-container img {
    border-radius: 5px;
    width: 100px;
    height: 100px;
}
</style>