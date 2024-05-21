<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
    router.push('/board/list');
})

</script>

<template>
    <div>
        <RouterView></RouterView>
    </div>
</template>

<style scoped>
* {
    font-family: 'Pretendard';
    margin: 0;
    padding: 0;
}
</style>