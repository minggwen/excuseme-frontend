<script setup>
import VueCookies from 'vue-cookies';
import { ref, onMounted } from 'vue'
import { storeToRefs } from "pinia"
import { useRouter } from 'vue-router'
import { useMemberStore } from '@/stores/jwt_token'


const router = useRouter();
const memberStore = useMemberStore()

const { isLogin, isLoginError } = storeToRefs(memberStore)
const { userLogin, getUserInfo } = memberStore
const id = ref("");
const pw = ref("");
const saveId = ref(false);
const submit = () => {
    if (id.value == "") {
        alert("아이디를 입력해주세요")
    } else if (pw.value == "") {
        alert("비밀번호를 입력해주세요")
    } else {
        login()
    }
}
const login = async () => {
    const data = {
        userId: id.value,
        userPwd: pw.value
    }
    await userLogin(data)
    let token = sessionStorage.getItem("accessToken")
    console.log(token)
    console.log("isLogin: " + isLogin.value)
    if (isLogin.value) {
        getUserInfo(token)
        // changeMenuState()
        router.replace("/")
    }
    // axios.post("http://localhost:8080/user/login", data)
    //     .then((response) => {
    //         console.log(response)
    //         if (response.status == 200) {
    //             alert("로그인이 완료되었습니다.")
    //             localStorage.setItem("userInfo", id.value);
    //             // localStorage.setItem('access_token', response.data.token);
    //             // localStorage.setItem('expires_in', response.data.expiresIn);
    //             // localStorage.setItem('user_role', response.data.role);
    //             if (saveId.value == true) {
    //                 VueCookies.set("saveId", id.value, 1);
    //             } else {
    //                 if (VueCookies.get("saveId") != null) {
    //                     VueCookies.delete("saveId")
    //                 }
    //             }
    //             router.push("/")
    //         }
    //     }).catch((error) => {
    //         if (error.response.status == 401) {
    //             alert("아이디 혹은 비밀번호가 일치하지 않습니다")
    //             router.go(0)
    //         } else {
    //             alert("로그인중 에러가 발생하였습니다.")
    //         }
    //     })
}
onMounted(() => {
    const cookie = VueCookies.get("saveId");
    if (cookie != null) {
        id.value = cookie;
    }
})
</script>

<template>
    <div class="container centered">
        <div class="row justify-content-center">
            <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5">
                <a href="">
                    <div class="row justify-content-center mt-5">
                        <img src="@/assets/logo.png" class="img-thumnail" alt="로고" style="width: 200px; height: auto;">
                    </div>
                </a>
                <div class="card shadow">
                    <div class="card-body">
                        <form>

                            <div class="form-group">
                                <label for="username"></label>
                                <input type="text" class="form-control " id="username" placeholder="🙎‍♂️ 아이디 입력"
                                    v-model="id" required>
                            </div>

                            <div class="form-group mb-3">
                                <label for="password"></label>
                                <input type="password" class="form-control " id="password" placeholder="🔑 비밀번호 입력"
                                    v-model="pw" required>
                            </div>

                            <div class="form-check mb-3">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" name="remember" v-model="saveId">
                                    아이디 저장
                                </label>
                            </div>

                            <div class="row justify-content-center ms-auto me-auto">
                                <button type="button" class="btn btn-primary" @click="submit">여행 떠나기!</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row justify-content-center mt-4">
                    <ul class="list-group list-group-horizontal justify-content-center">
                        <li class="list-group-item border-0 p-0 me-3">
                            <a href="" class="text-decoration-none text-muted small" onclick="javascript:findpw()">비밀번호
                                찾기</a>
                        </li>
                        <div class="vr no-gutters"></div>
                        <li class="list-group-item border-0 p-0 ms-3 me-3">
                            <a href="" class="text-decoration-none text-muted small">아이디 찾기</a>
                        </li>
                        <div class="vr"></div>
                        <li class="list-group-item border-0 p-0 ms-3">
                            <a href="./signup.html" class="text-decoration-none text-muted small">회원가입</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>