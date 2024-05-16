<script setup>
const regionSelect = ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "울산광역시",
    "세종특별자치시", "경기도", "강원특별자치도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주특별자치도"];
const tourType = [
    { text: "관광지", value: "12" },
    { text: "문화시설", value: "14" },
    { text: "축제공연행사", value: "15" },
    { text: "여행코스", value: "25" },
    { text: "레포츠", value: "28" },
    { text: "숙박", value: "32" },
    { text: "쇼핑", value: "38" },
    { text: "음식점", value: "39" }
]
</script>

<template>
    <div>
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">여행 계획 세우기</h5>
        </div>
        <form class="d-flex" role="search">
            <input class="search-input" type="search" placeholder="Search" aria-label="Search">
            <button class="search-btn" type="submit"><img src="@/assets/search.png"></button>
        </form>
        <div class="offcanvas-select select-container">
            <select class="form-select" aria-label="Default select example" placeholder="지역">
                <option selected value="" disabled>지역</option>
                <option v-for="region in regionSelect" :key="region" :value="region">{{ region }}</option>
            </select>
            <select class="form-select" aria-label="Default select example">
                <option selected value="" disabled>관광타입</option>
                <option v-for="tour in tourType" :key="tour.value" :value="tour.value">{{ tour.text }}</option>
            </select>
        </div>
    </div>
</template>

<style scoped>
.select-container {
    display: flex;
    gap: 0.5rem;
}

select option[value=""][disabled] {
    display: none !important;
}

.search-input {
    border: none;
}

.search-btn {
    border: none;
    background-color: white;
}

.search-btn img {
    width: 80%;
}
</style>