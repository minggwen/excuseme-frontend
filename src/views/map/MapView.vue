<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import MapOffcanvasSearch from "./MapOffcanvasSearch.vue";
import MapOffcanvasSelect from "./MapOffcanvasSelect.vue";

const { VITE_KAKAO_MAP_KEY } = import.meta.env

let mapContainer = ref(null)
let mapInstance = null

onMounted(() => {
    loadKaKaoMap(mapContainer.value)
    window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
    window.addEventListener('resize', handleResize)
})
const loadKaKaoMap = (container) => {
    const script = document.createElement('script')
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${VITE_KAKAO_MAP_KEY}&autoload=false`
    document.head.appendChild(script)
    script.onload = () => {
        window.kakao.maps.load(() => {

            const options = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,//지도 확대 레벨
                maxLevel: 5 //지도 축소 제한 레벨
            }
            mapInstance = new window.kakao.maps.Map(container, options)//지도생성
            resizeMapContainer()
        })
    }
}
const handleResize = () => {
    if (mapInstance) {
        resizeMapContainer()
    }
}
const resizeMapContainer = () => {
    // 화면 높이에서 헤더의 높이를 뺀 값으로 지도 컨테이너의 높이를 설정
    const headerHeight = document.querySelector('#header').offsetHeight
    const offcanvas = document.querySelector('#offcanvasScrolling')
    offcanvas.style.top = `${headerHeight}px`;
    mapContainer.value.style.height = `calc(100vh - ${headerHeight}px)`
}

</script>

<template>
    <div>
        <button class="btn btn-primary floatBtn" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><img src="@/assets/map.png"
                class="floatBtnImg"></button>
        <div class="offcanvas offcanvas-start offcanvas" data-bs-scroll="false" data-bs-backdrop="false" tabindex="-1"
            id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-body row">
                <div class="col-7 border-end">
                    <MapOffcanvasSearch />
                </div>
                <div class="col-5">
                    <div class="offcanvas-header">
                        <MapOffcanvasSelect />
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div ref="mapContainer" style="width:100%; height:100vh"></div>
</template>


<style scoped>
* {
    font-family: 'Pretendard';
    margin: 0;
    padding: 0;
}

.floatBtn {
    position: absolute;
    margin-top: 50px;
    left: 50px;
    z-index: 10;
    font-weight: 600;
    width: 64px;
    height: 64px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.floatBtnImg {
    width: 100%;
}

.offcanvas {
    width: 35vw !important;
    min-width: 200px !important;
    max-width: 680px !important;
    position: absolute;
    z-index: 11;
}
</style>