<template>
    <div>
      <div class="trailer-title">{{ movie.title }} 공식 예고편</div>
      <div class="trailer-handler">
        <div v-if="isLoading" class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <iframe
          v-else-if="videoData"
          class="trailer-iframe"
          :src="videoData"
          frameborder="0"
          allowfullscreen
          sandbox="allow-same-origin allow-scripts allow-presentation"
        ></iframe>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, watch, ref } from "vue";
  import axios from "axios";
  
  const props = defineProps({
    movie: Object,
  });
  
  const videoData = ref("");
  const isLoading = ref(false);
  const youtubeKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  
  const fetchTrailer = async () => {
    isLoading.value = true;
    const baseURL = "https://www.googleapis.com/youtube/v3/search";
    try {
      const response = await axios.get(baseURL, {
        params: {
          key: youtubeKey,
          part: "snippet",
          type: "video",
          q: `${props.movie.original_title} 공식 예고편`,
          maxResults: 1,
        },
      });
      if (response.data.items.length > 0) {
        const videoId = response.data.items[0].id.videoId;
        videoData.value = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`;
      } else {
        console.error("No videos found");
      }
    } catch (error) {
      console.error("서버에러:", error);
    } finally {
      isLoading.value = false;
    }
  };
  
  onMounted(() => {
    fetchTrailer();
  });
  
  watch(
    () => props.movie.original_title,
    (newTitle) => {
      if (newTitle) {
        fetchTrailer();
      }
    }
  );
  </script>
  
  <style scoped>


  .trailer-title{
    font-family: 'RixInooAriDuriR';
    text-align: center;
    margin: 2rem 3rem;
    font-size: 2.5rem;
    border-radius: 1rem;
    padding: 1rem;
    background-color: rgb(246, 255, 0);
  }
  .modal-content {
    max-width: 820px;
  }
  
  .trailer-iframe {
    width: 800px;
    height: 500px;
    display: block;
    margin: 2rem auto;
  }
  
  .spinner-border {
    display: block;
    margin: 0 auto;
  }
  </style>
  