import { ref } from "vue"
import { defineStore } from "pinia"

export const useMapStore = defineStore("mapStore", () => {
    const mapResult = ref([])
    const route = ref([])
    const saveRoute = ref(false)

    const routePush = async (tour) => {
        if (route.value.findIndex(r => r.id == tour.id) === -1) {
            route.value.push(tour);
        }
    }
    const routeRemove = async (tour) => {
        route.splice(route.findIndex(t => t.id === tour.id));
    }

    return {
        mapResult,
        route,
        saveRoute,
        routePush,
        routeRemove
    }
})