<script setup>
import { ref } from 'vue';
import { storeToRefs } from "pinia"
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useMemberStore } from '@/stores/jwt_token'

const router = useRouter();
const memberStore = useMemberStore()
const isToken = ref(sessionStorage.getItem("accessToken") == null ? false : true)
const { isLogin } = storeToRefs(memberStore)
const { userLogout, getUserInfo } = memberStore

const logout = () => {
  userLogout();
  if (isLogin.value == false) {
    router.push("/")
  }
}
</script>

<template>
  <link rel="stylesheet" type="text/css"
    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />

  <header id="header"
    class="navbar navbar-expand-lg ps-4 pe-4 shadow-sm p-3 bg-body-tertiary rounded sticky-top header-style">
    <div class="container-fluid">
      <RouterLink :to="{ name: 'home' }" class="nav-link active fs-5" aria-current="page">
        <img class='col-4 ms-4' src='./assets/nav_logo.png'>
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <nav class="collapse navbar-collapse mr-1" id="navbarNav">
        <ul class="navbar-nav ms-auto me-2 grid gap-4">
          <li class="navbar-item">
            <RouterLink :to="{ name: 'map' }" class="nav-link active fs-5" aria-current="page">나만의 여행계획</RouterLink>
          </li>
          <li class="navbar-item">
            <RouterLink :to="{ name: 'board' }" class="nav-link active fs-5" aria-current="page">후기 게시판</RouterLink>
          </li>
          <li id='nav-login' class="navbar-item" v-show="isToken == false">
            <RouterLink :to="{ name: 'login' }" class="nav-link active fs-5" aria-current="page">로그인</RouterLink>
          </li>
          <li id='nav-login' class="navbar-item" v-show="isToken == false">
            <RouterLink :to="{ name: 'signup' }" class="nav-link active fs-5" aria-current="page">회원가입</RouterLink>
          </li>

          <!-- 로그인 하면 display 변경해주기 -->
          <li id='nav-logout' class="navbar-item" v-show="isToken">
            <a class="nav-link active fs-5" aria-current="page" @click="logout">로그아웃</a>
          </li>
          <li id='nav-mypage' class="navbar-item" v-show="isToken">
            <RouterLink :to="{ name: 'mypage' }" class="nav-link active fs-5" aria-current="page">마이페이지</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
  </main>

  <RouterView />
  <!-- <footer>
    <div class="navbar fixed-bottom navbar-expand navbar-dark bg-white container-fluid justify-content-center p-3">
      <div class="row">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-primary fw-bolder fs-4 text-center mt-0" href="#">Excuse Me</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link text-dark text-center mt-2" href="#">개인정보처리방침</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark text-center mt-2" href="#">이용약관</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-muted text-center mt-2" href="#">&copy;SSAFY 광주 4반 신민경 김지원</a>
          </li>
        </ul>
      </div>
    </div>
  </footer> -->
</template>

<style scoped>
* {
  font-family: 'Pretendard';
  margin: 0;
  padding: 0;
}

.header-style {
  background-color: #ffffff !important;
  /* 흰색 배경색 */
}
</style>
