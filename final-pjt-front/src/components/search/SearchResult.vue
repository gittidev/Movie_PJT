<template>
    <div>
        검색결과 리스트
        prop-for 활용하여 하단으로 데이터 넘기기
        <div style="border: red solid 1px; color: aliceblue; display: flex; flex-wrap: wrap; justify-content: center;">
            
            <div v-for="_ of 30">
                <ResultCardList/>
            </div>       
        </div>

    </div>

</template>

<script setup>
import ResultCardList from "@/components/search/ResultCard.vue";

</script>

<style scoped>

</style>