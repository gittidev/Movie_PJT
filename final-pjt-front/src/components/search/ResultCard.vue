<template>
    <div>
        <RouterLink>
            <img src="@/assets/sample1.jpg" alt="#">
        </RouterLink>
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
img {
    width: 20rem;
    height: 25rem;
    margin: 1rem; 
}

</style>