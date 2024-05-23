<template>
    <div class="review-handler container">

        <div v-if="communities.length > 0">
            <h1>베스트리뷰 추천</h1>
            <div style="border: 1px solid gray; font-family: 'KCC-Hanbit';">

                <div v-for="community of filteredCommunities" :key="community.id">

                    <div class="communityitem" style="margin: 1em 1em;">
                        <div class="container card">

                            <div class="row">
                                <div class="col-5">
                                    <img :src="community.movie_poster" alt="..." style="width: 70%; height:  100%;">
                                </div>
                                <div class="col">
                                    <h1>{{ community.title }}</h1>
                                    <p>{{ community.movie_title }}</p>
                                    <p class="card-text">{{ community.content }}</p>
                                    <div style="display: flex; margin-block-end: 0;">
                                        <button class='btn' @click="goPOT(community.id)" style="font-family: 'KCC-Hanbit'; color:white;">
                                            POT 참여하기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div v-else>
            <h1>베스트 POT 추천</h1>

            <div>

                <div class="container card" style="border: 1px solid gray; opacity: 0.5;">

                    <div class="row text-center">
                        <h2>현재 작성된 POT이 없어요</h2>
                        <img src="@/assets/empty_popcorn_box2.png" alt="">
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { useCommunityStore } from "@/stores/community";

const store = useCommunityStore();
const router = useRouter();
const communities = ref([]);


// 영화 좋아요 수에 따른 커뮤니티 목록 필터링//slice 사용하여 복사본을 정렬, 원본 변경 없음 
const filteredCommunities = computed(() => {
    if (store.communities.length) {
        return [...store.communities].sort((a, b) => b.like_users.length - a.like_users.length);
    }
    return store.communities;
});


// POT으로 이동하기
const goPOT = (communityId) => {
    console.log('click')
    router.push({ name: 'communitydetail', params: { communityId: communityId } })
}

// 랜더링시 커뮤니티 전체 목록 가져옴
onMounted(async () => {
    await store.getCommunities();
    communities.value = store.communities
});








</script>

<style scoped>
.review-handler {
    margin: 8rem 2rem;

}


h1 {
    font-family: 'RixInooAriDuriR';
}

h2 {
    font-family: 'RixInooAriDuriR';
}

img {
    width: 100%;
}

.communityitem {
    margin-top: rem;
}

.community-card {
    background-color: aliceblue;
}

.row {
    padding: 2rem 1rem;
}

button {
    background-color: rgb(128, 0, 255);

}

button:hover {
    background-color: rgb(255, 0, 0);
}

img {
    border-radius: 1rem;
}
</style>