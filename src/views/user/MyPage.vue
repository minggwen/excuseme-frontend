<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'

const router = useRouter();

onMounted(() => {
    router.push("/mypage/myTrip")
})

</script>

<template>
    <ul class="nav nav-underline justify-content-center border-bottom">
        <li class="nav-item">
            <RouterLink :to="{ name: 'myTrip' }" class="nav-link list" aria-current="page">나의 여행</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="{ name: 'myReview' }" class="nav-link list" aria-current="page">나의 후기</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="{ name: 'myInfo' }" class="nav-link list" aria-current="page">회원 정보 수정</RouterLink>
        </li>
    </ul>
    <RouterView />
</template>

<style scoped>
.list {
    margin: 2rem;
    font-size: 1.3rem;
}
</style>