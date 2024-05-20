<script setup>
import { onMounted, ref, watch } from 'vue'
import { storeToRefs } from "pinia"
import { useMapStore } from '@/stores/map'
import axios from 'axios'

const { VITE_URL } = import.meta.env
const mapStore = useMapStore()
// const { route } = storeToRefs(mapStore)
const modalView=ref(false)
const route =  [{"addr1":"강원특별자치도 춘천시 서면 신매리","addr2":"68-4","areacode":"32","booktour":"0","cat1":"A02","cat2":"A0205","cat3":"A02050200","contentid":"128778","contenttypeid":"12","createdtime":"20060209090000","firstimage":"http://tong.visitkorea.or.kr/cms/resource/71/181971_image2_1.jpg","firstimage2":"http://tong.visitkorea.or.kr/cms/resource/71/181971_image3_1.jpg","cpyrhtDivCd":"Type3","mapx":"127.7130161606","mapy":"37.9167408445","mlevel":"6","modifiedtime":"20231123121517","sigungucode":"13","tel":"","title":"강원 경찰충혼탑"},{"addr1":"강원특별자치도 영월군 김삿갓면 옥동장터길 36","addr2":"","areacode":"32","booktour":"0","cat1":"A02","cat2":"A0201","cat3":"A02010600","contentid":"1857095","contenttypeid":"12","createdtime":"20131112001016","firstimage":"http://tong.visitkorea.or.kr/cms/resource/85/2026085_image2_1.jpg","firstimage2":"http://tong.visitkorea.or.kr/cms/resource/85/2026085_image3_1.jpg","cpyrhtDivCd":"Type3","mapx":"128.5701372137","mapy":"37.1256818109","mlevel":"6","modifiedtime":"20230901135042","sigungucode":"8","tel":"","title":"강원 영월 김삿갓면 [슬로시티]"},{"addr1":"강원특별자치도 영월군 북면 밤재로 351","addr2":"","areacode":"32","booktour":"0","cat1":"A02","cat2":"A0204","cat3":"A02040800","contentid":"895963","contenttypeid":"12","createdtime":"20091212015151","firstimage":"http://tong.visitkorea.or.kr/cms/resource/22/1583322_image2_1.jpg","firstimage2":"http://tong.visitkorea.or.kr/cms/resource/22/1583322_image3_1.jpg","cpyrhtDivCd":"Type3","mapx":"128.4669118411","mapy":"37.2631362582","mlevel":"6","modifiedtime":"20230703095955","sigungucode":"8","tel":"","title":"강원도 탄광문화촌"},{"addr1":"강원특별자치도 춘천시 서면 납실길 107-64","addr2":"","areacode":"32","booktour":"0","cat1":"A02","cat2":"A0203","cat3":"A02030400","contentid":"2610850","contenttypeid":"12","createdtime":"20190712185415","firstimage":"http://tong.visitkorea.or.kr/cms/resource/11/2739711_image2_1.jpg","firstimage2":"http://tong.visitkorea.or.kr/cms/resource/11/2739711_image3_1.jpg","cpyrhtDivCd":"Type3","mapx":"127.6397214646","mapy":"37.9630563077","mlevel":"6","modifiedtime":"20230703182148","sigungucode":"13","tel":"","title":"강원숲체험장"},{"addr1":"강원특별자치도 횡성군 갑천면 정포로 327","addr2":"","areacode":"32","booktour":"0","cat1":"A02","cat2":"A0202","cat3":"A02020400","contentid":"2614901","contenttypeid":"12","createdtime":"20190810012708","firstimage":"http://tong.visitkorea.or.kr/cms/resource/46/2519246_image2_1.JPG","firstimage2":"http://tong.visitkorea.or.kr/cms/resource/46/2519246_image2_1.JPG","cpyrhtDivCd":"Type3","mapx":"128.1016118529","mapy":"37.5292236459","mlevel":"6","modifiedtime":"20230703144943","sigungucode":"18","tel":"","title":"강원참숯"},{"addr1":"강원특별자치도 춘천시 화목원길 24","addr2":"","areacode":"32","booktour":"0","cat1":"A01","cat2":"A0101","cat3":"A01010700","contentid":"127433","contenttypeid":"12","createdtime":"20040225090000","firstimage":"http://tong.visitkorea.or.kr/cms/resource/86/2739686_image2_1.jpg","firstimage2":"http://tong.visitkorea.or.kr/cms/resource/86/2739686_image3_1.jpg","cpyrhtDivCd":"Type3","mapx":"127.7254731639","mapy":"37.9233347533","mlevel":"6","modifiedtime":"20231115094758","sigungucode":"13","tel":"","title":"강원특별자치도립화목원"},{"addr1":"강원특별자치도 태백시 창죽동","addr2":"","areacode":"32","booktour":"0","cat1":"A01","cat2":"A0101","cat3":"A01010900","contentid":"126840","contenttypeid":"12","createdtime":"20030827090000","firstimage":"http://tong.visitkorea.or.kr/cms/resource/97/2917597_image2_1.JPG","firstimage2":"http://tong.visitkorea.or.kr/cms/resource/97/2917597_image3_1.JPG","cpyrhtDivCd":"Type3","mapx":"128.9354541660","mapy":"37.2306100727","mlevel":"6","modifiedtime":"20240510164132","sigungucode":"14","tel":"","title":"검룡소 (강원고생대 국가지질공원)"},{"addr1":"강원특별자치도 고성군 토성면 뒷골길 60","addr2":"","areacode":"32","booktour":"0","cat1":"A01","cat2":"A0102","cat3":"A01020200","contentid":"2616507","contenttypeid":"12","createdtime":"20190826235544","firstimage":"http://tong.visitkorea.or.kr/cms/resource/03/2616503_image2_1.bmp","firstimage2":"http://tong.visitkorea.or.kr/cms/resource/03/2616503_image2_1.bmp","cpyrhtDivCd":"Type3","mapx":"128.5058577959","mapy":"38.2836243183","mlevel":"6","modifiedtime":"20240517160051","sigungucode":"2","tel":"","title":"고성 제3기 현무암 (강원평화지역 국가지질공원)"},{"addr1":"강원특별자치도 영월군 김삿갓면 영월동로 1117","addr2":"","areacode":"32","booktour":"0","cat1":"A01","cat2":"A0101","cat3":"A01011900","contentid":"125724","contenttypeid":"12","createdtime":"20060509090000","firstimage":"http://tong.visitkorea.or.kr/cms/resource/85/483785_image2_1.jpg","firstimage2":"http://tong.visitkorea.or.kr/cms/resource/85/483785_image3_1.jpg","cpyrhtDivCd":"Type3","mapx":"128.5353790658","mapy":"37.1307444591","mlevel":"6","modifiedtime":"20230703084646","sigungucode":"8","tel":"","title":"고씨굴 (강원고생대 국가지질공원)"},{"addr1":"강원특별자치도 화천군 사내면 용담리","addr2":"","areacode":"32","booktour":"0","cat1":"A01","cat2":"A0101","cat3":"A01010500","contentid":"2569346","contenttypeid":"12","createdtime":"20181124000459","firstimage":"http://tong.visitkorea.or.kr/cms/resource/01/2566301_image2_1.jpg","firstimage2":"http://tong.visitkorea.or.kr/cms/resource/01/2566301_image3_1.jpg","cpyrhtDivCd":"Type3","mapx":"127.5387168938","mapy":"38.0532605818","mlevel":"6","modifiedtime":"20240517161249","sigungucode":"17","tel":"","title":"곡운구곡 (강원평화지역 국가지질공원)"}];

const calculateDistance=(pos1x,pos1y, pos2x,pos2y)=>{
  const R = 6371e3; // 지구의 반지름 (미터)
  const φ1 = pos1x * Math.PI / 180; // 위도를 라디안으로 변환
  const φ2 = pos2x * Math.PI / 180;
  const Δφ = (pos2x - pos1x) * Math.PI / 180; // 위도 간의 차이를 라디안으로 변환
  const Δλ = (pos2y - pos1y) * Math.PI / 180; // 경도 간의 차이를 라디안으로 변환

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  const d = R * c; // 두 지점 간의 거리 (미터)
  return d;
}

// watch(route,()=>{
//     
// })
onMounted(()=>{
    const { path: shortestPath, distance: shortestDistance } = findShortestPath(route);
    
})
const findShortestPath=(stores)=>{
  const n = stores.length;
  const memo = new Array(1 << n).fill(null).map(() => new Array(n).fill(null));

  function tsp(mask, current) {
    if (mask === (1 << n) - 1) {
      return calculateDistance(stores[current].mapx,stores[current].mapy, stores[0].mapx,stores[0].mapy);
    }
    if (memo[mask][current] !== null) {
      return memo[mask][current];
    }

    let minDistance = Number.MAX_SAFE_INTEGER;
    let nextStoreIndex = -1;
    for (let next = 0; next < n; next++) {
      if ((mask & (1 << next)) === 0) {
        const distance = calculateDistance(stores[current].mapx,stores[current].mapy, stores[next].mapx,stores[next].mapy) +
          tsp(mask | (1 << next), next);
        if (distance < minDistance) {
          minDistance = distance;
          nextStoreIndex = next;
        }
      }
    }

    memo[mask][current] = minDistance;
    memo[mask][current + n] = nextStoreIndex; // 다음 방문 지점을 기록
    return minDistance;
  }
const shortestDistance = tsp(1, 0); // 0번째 지점부터 시작

  // 최단 경로 추적
  let current = 0;
  let mask = 1;
  const path = [{ title: stores[0].title, distance: 0 }];
  while (path.length < n) {
    const next = memo[mask][current + n];
    const distance = calculateDistance(stores[current].mapx, stores[current].mapy, stores[next].mapx, stores[next].mapy);
    path.push({ tour: stores[next], distance });
    current = next;
    mask |= (1 << next);
  }

  return { path, distance: shortestDistance };
}

const submit=()=>{
    modalView.value=true;
}
</script>
<template>
    <div class="container">
        <div>
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">일정</h5>
            <div class="list">
                <div class="items" v-for="(r, index) in route" :key="r.id">
                    <span class="badge rounded-pill text-bg-primary">{{ index + 1 }}</span>
                    <p>{{ r.name }}</p>
                    <button id="deleteBtn" class="btn btn-light btn-sm">-</button>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>

        <!-- Modal -->
        
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
* {
    font-family: 'Pretendard';
    padding: 0;
    margin: 0;
}

.offcanvas-title {
    margin-bottom: 1rem;
}


.container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
}

.list {
    display: flex;
    flex-direction: column;
}

.items {
    display: flex;
    align-items: baseline;
    padding: 0.5rem;
    gap: 1rem;
}
</style>
