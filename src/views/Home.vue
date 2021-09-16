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
      <div class="missions">
        <Missions
            v-for="mission in missions"
            :key="mission.id"
            :image="mission.image"
            :alt="mission.alt"
            :name="mission.name"
        />
      </div>
    </div>
  </div>
</template>

<script>

import BackgroundHome from "@/components/backgroundHome.vue";
import Missions from "@/components/missions.vue";


export default {
  name: 'Home',
  components: {
    BackgroundHome,
    Missions,
  },
  data() {
    return {
      missions: [
        {
          name: "Solidarité",
          image: "../assets/missions/valeur2.png",
        },
        {
          name: "Famille",
          image: "../assets/missions/valeur2.png",
        },
        {
          name: "Diversité",
          image: "../assets/missions/valeur3.png",
        }
      ]
    }

  }
}
</script>
