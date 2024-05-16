import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/user/LoginView.vue"
import SignupView from "@/views/user/SignupView.vue"
import BoardView from "@/views/board/BoardView.vue"
import MapView from "@/views/map/MapView.vue"
import MyTrip from "@/views/user/MyTrip.vue"
import MyPage from "@/views/user/MyPage.vue"
import MyInfo from "@/views/user/MyInfo.vue"
import MyReview from "@/views/user/MyReview.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/board',
      name: 'board',
      component: BoardView
    },
    {
      path: '/map',
      name: 'map',
      component: MapView,
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage,
      children: [
        { path: '/mypage/myTrip', name: 'myTrip', component: MyTrip },
        { path: '/mypage/myReview', name: 'myReview', component: MyReview },
        {path:'/mypage/myInfo',name:'myInfo',component:MyInfo}
      ]
    }
    
  ]
})

export default router
