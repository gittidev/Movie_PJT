<template>
    <div class="search-body">
        <div class="search-section">
            <SearchBar/>
        </div>
        <div class="search-section">
            <SearchResult/>
        </div>
    </div>
</template>

<script setup>
import SearchBar from "@/components/search/SearchBar.vue";
import SearchResult from "@/components/search/SearchResult.vue";


</script>

<style  scoped>

.search-body {
    padding: 3rem;
}

.search-section {
width: 100%;
  /* height: 300px; 필요한 경우 섹션 높이를 지정 */
  border: 1px solid #ccc; /* 각 섹션을 구분하는 테두리 */
  padding: 20px; /* 내부 여백 */
  box-sizing: border-box; /* 패딩 포함하여 박스 크기 계산 */
}



</style>