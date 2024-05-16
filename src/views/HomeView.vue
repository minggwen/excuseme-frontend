<script setup>
</script>

<template>
   <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
  <main>
    <div class = 'container-1'>
        <div class = 'container-1-div'>
            <div class = 'container-1-left'>
              <div class='container-1-left-p'>
                <p class = 'container-1-left-bold'>대한민국에 숨겨신<br> 여행지를 찾아보세요.</p>
                <p class = 'container-1-left-light'>여행지 검색부터 일정 조정까지 <span style="font-weight: 400;">저기요</span>에서 해결하세요</p>
              </div>
              <div class = 'container-1-buttons'>
                  <a class = 'btn-1' id="mapBtn">관광지 찾으러가기 ></a>
                  <a class = 'btn-2'>후기 보러 가기 ></a>
              </div>
          </div>
          <img class = "container-1-img"  src ='@/assets/main1.png'>
        </div>
      </div>
    <div class = 'container-3'>
        <div class = 'container-3-div'>
            <img src="@/assets/nav_logo.png">
            <p class = 'explain-light'><span class = 'explain-bold'>‘저기요 EXCUSE ME’</span>는<br>
                마치 여행지 현지인들에게 관광지 안내를 받는 것처럼<br>
                숨겨진 관광지에 대한 정보를 얻을 수 있는 플랫폼<br>
                이라는 뜻을 가지고 있습니다.</p>
        </div>

    </div>
    <div class = 'container-2'>
      <div class = 'explain-container1-div'>
        <div class = 'explain-container1'>
            <div data-aos="fade-up" class = 'explain-text'>
                <div class = 'explain-bold'>
                    <p>어느 지역으로 여행을 가시나요?</p>
                    <p>지역 기반으로 관광지를 추천해드려요</p>
                </div>
                <div class = 'explain-light'>
                    <p>여행을 계획 중인 지역을 입력해주세요</p>
                    <p>편하게 이동 시간을 계획할 수 있도록</p>
                    <p>지도와 함께 관광지에 대한 정보를 제공하고 있어요</p>
                </div>
            </div>
            <img data-aos="fade-down" src = '@/assets/main2.png'>
        </div>
    </div>
      <div class = 'explain-container1-div'>
          <div class = 'explain-container1'>
              <div data-aos="fade-up" class = 'explain-text'>
                  <div class = 'explain-bold'>
                      <p>관광지에 대한 후기를 바로 확인할 수 있어요</p>
                  </div>
                  <div class = 'explain-light'>
                      <p>관광지에 대한 평가가 궁금하신가요?</p>
                      <p>먼저 여행을 다녀온 사람들의 후기를 바로 확인해보세요 !</p>
                  </div>
              </div>
              <img data-aos="fade-down" src = '@/assets/main3.png'>
          </div>
                
        </div>
      </div>
  </main>
</template>
<style scoped>
*{
  font-family: 'Pretendard';
  margin:0;
  padding:0;
}
.container-fluid{
    max-width:1280px;
    display: flex;
    
}
.container-1{
    width: 100%;
    display : flex;
    flex-direction: column;
    align-items: center;
}
.container-1-div{
    display : flex;
    width:1280px;
    justify-content: space-between;
    padding:100px 48px 100px 48px;
}
.container-1-left {
    display:flex;
    flex-direction: column;
    gap:25px;
    
}
.explain-text{
    display: flex;
    flex-direction: column;
    gap:32px;
    
}
.container-1-left-bold{
    font-size: 48px;
    word-spacing: -8px;
    font-weight: 600;
}
.container-1-left-light{
  font-size: 28px;
  font-weight: 200;
  color:#575757;

}
.container-1-buttons{
    display: flex;
    margin-top: 24px;
    gap:12px;
}
.container-1-buttons a{
    outline-style: none;
    padding: 16px 32px 16px 32px;
    font-size:24px;
    text-decoration-line: none;
}

.btn-1{
    border: none;
    background-color: black;
    border-color: black;
    color:white;
}
.btn-2{
    background-color: white;
    border: 1px black solid;
    color:black;
}
.container-1-img{
    width:474px;
    height:316px;
}

.explain-bold{
    font-size: 32px;
    font-weight: 600;
}
.explain-light{
    font-size:28px;
    font-weight: 200;
}

.explain-container1-div{
    width: 100%;
    display : flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
}
.explain-container1{

    display:flex;
    align-items: center;
    width:80%;
    justify-content: space-between;
    margin:48px 0px 48px 0px;
}
.explain-container1-div{
    background-color: #FAFAFA;
}
.container-3, .container-2{
  background-color: #FAFAFA;
}
.container-3{
  margin-bottom: 120px;
}
.container-3-div{
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 24px;
}
.container-3-div p{
    text-align: center;
}
</style>