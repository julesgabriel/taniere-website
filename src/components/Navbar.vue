<template>
  <nav class="nav" :style="deviceHeight" :class="navClass">
    <div class="logo">
      <img src="../assets/logos/logo.svg" alt="Logo iimpact"/>
    </div>
    <ul class="container-links">
      <li
          ref="Home"
          @mouseenter="setIndicatorPosition('Home')"
          @mouseleave="setIndicatorPosition($route.name)"
          @click="navigate('Home')"
      >
        Accueil
      </li>
      <li
          ref="Members"
          @mouseenter="setIndicatorPosition('Members')"
          @mouseleave="setIndicatorPosition($route.name)"
          @click="navigate('Members')"
      >
        Membres
      </li>
      <li
          ref="Events"
          @mouseenter="setIndicatorPosition('Events')"
          @mouseleave="setIndicatorPosition($route.name)"
          @click="navigate('Events')"
      >
        Évènements
      </li>
      <li
          ref="Blog"
          @mouseenter="setIndicatorPosition('Blog')"
          @mouseleave="setIndicatorPosition($route.name)"
          @click="navigate('Blog')"
      >
        Blog
      </li>
      <div :style="indicatorStyle" class="indicator"></div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    open: Boolean,
  },
  data() {
    return {
      indicatorStyle: "",
      navClass: "",
    };
  },
  created() {
    this.changeIndicatorColorAccordingToRouteContext();
  },
  mounted() {
    this.setIndicatorPosition(this.$route.name === "singleArticle" ? "Blog" : this.$route.name)
  },
  computed: {
    deviceHeight() {
      return window.innerWidth < 810
          ? "height: " + window.innerHeight + "px"
          : "";
    },
  },
  methods: {
    setIndicatorPosition(route, widthValue = 90) {
      if (this.$refs[route]) {
        if (route === "Blog") widthValue = 130;
        let width =
            " width: " + (this.$refs[route].offsetWidth - widthValue) + "px;";
        let position = "left: " + (this.$refs[route].offsetLeft + 95) + "px;";
        this.indicatorStyle = this.indicatorStyle + width + position;
      }
    },
    navigate(route) {
      if (window.innerWidth < 810) {
        this.navClass = "";
        this.$emit("close-menu");
      }
      this.$router.push({name: route});
      this.setIndicatorPosition(route);
    },
    changeIndicatorColorAccordingToRouteContext() {
      this.$route.name === "singleArticle"
          ? (this.indicatorStyle = "background: #FECC50")
          : (this.indicatorStyle = "background: #FFFFFF");
    },
  },
  watch: {
    open: function (val) {
      if (val) this.navClass = "nav-open";
    },
    $route() {
      this.changeIndicatorColorAccordingToRouteContext();
    },
  },
};
</script>
<style lang="scss">
</style>
