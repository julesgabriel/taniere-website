<template>
  <div class="home">
    <div class="background">
      <BackgroundHomeHeader/>
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
      <div class="presentation">
        <div class="top">
          <iframe class="video" src="https://www.youtube.com/embed/xJY0YGr4wLE" title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
          <div class="videoText">
            <div class="title">Vidéo de présentation</div>
            <div class="text">Chez IIMPACT, nous avons pour vocation de faire de votre parcours à l’IIM, une expérience
              unique. <br> <br>Quelque soit votre tempérament ou vos ambitions, nous nous engageons à vous accompagner
              que ce soit de manière scolaire ou extra-scolaire.
            </div>
          </div>
        </div>

        <p class="bottomText">Nous avons des équipes dédiées à la conception visuelle, au motion design, au
          développement web, à la conception 3D ou encore à l’évènementiel.<br> <br> Ce sont ces compétences qui
          permettent
          d’accomplir notre mission : votre intégration.
        </p>

      </div>
      <div class="pres-button">
        <Button
            :name="button1"
            :link="link"
            :isYellow="isYellow"
            v-bind:class="{
              yellow: isYellow
            }"
        />
      </div>
      <BackgroundHomeBottom/>
      <div class="actu-events">
        <div class="actu">
          <p class="title">Notre actualité</p>
          <div class="video">
            <div class="text">
              <p class="title">Semaine d’intégration</p>
              <p class="description">IIMPACT, le Club Ecole de l’IIM, prend le contrôle de la semaine d’intégration. Du
                9 au 13 septembre se tenait la Welcome Week, la semaine d’intégration...</p>
            </div>
          </div>

        </div>
        <div class="events">
          <p class="title">Nos derniers évènements</p>
          <!-- Component -->
          <Button
              :name="button2"
              :link="link"
              :isBlack="isBlack"
              v-bind:class="{
              black: isBlack
        }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BackgroundHomeHeader from "@/components/backgroundHomeHeader.vue";
import BackgroundHomeBottom from "@/components/backgroundHomeBottom.vue";
import Missions from "@/components/missions.vue";
import Button from "@/components/button.vue";


export default {
  name: 'Home',
  components: {
    BackgroundHomeHeader,
    BackgroundHomeBottom,
    Missions,
    Button
  },
  data() {
    return {
      button1: "Voir notre magazine",
      button2: "Voir tous nos évènements",
      link: "#",
      isYellow: true,
      isBlack: true,
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
