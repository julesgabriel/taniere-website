<template>
    <div class="home">
      <div class="background">
        <BackgroundHome/>
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
