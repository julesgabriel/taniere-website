<template>
  <div class="home">
    <div class="background">
      <BackgroundHome/>
      <div class="top-content">
        <h1 class="title">iimpact</h1>
        <p class="description">Club école de l'IIM</p>
      </div>
      <div class="scrollDown">
        <div class="mouse">
          <span></span>
        </div>
        <p>scroll down</p>
      </div>
    </div>
    <div class="content">

    </div>
  </div>
</template>

<script>

import BackgroundHome from "@/components/backgroundHome.vue";


export default {
  name: 'Home',
  components: {
    BackgroundHome,
  }
}
</script>
