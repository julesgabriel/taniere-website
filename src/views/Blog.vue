<template>
  <div class="blog">
    <div class="background">
      <BackgroundBlog/>
    </div>
    <div class="blog-text-bestOfContainer">
      <div class="leftText">
        <h1 class="title">BLOG</h1>
        <p>
          Vous cherchez de la lecture ? Ça se passe ici...
          <br/>
          Réservé uniquement pour les curieux
        </p>
      </div>
      <div class="bestOfContainer" v-for="(article, index) in articles" :key="index">
        <ArticleCard
            v-if="article.bestOf"
            :mainPhoto="article.mainPhoto"
            :title="article.title"
            :date="article.date"
            :description="article.content"
            :author="article.authors"
            :tagname="article.category.name"
            :bestOf="bestOf"
            v-bind:class="{
            bestOf,
          }"
        />
      </div>
    </div>
    <div class="allArticles">
      <p class="title">Découvrez nos articles</p>
      <div class="themes">
        <p class="text">Nos thèmes</p>
        <div class="tags">
          <ArticleTag
              v-for="filter in filters"
              :key="filter.id"
              v-bind:class="{
              active: filter.isActive,
              clickable: clickableFilters,
            }"
              v-on:click.native="changeClass(filter.id)"
              :tagname="filter.name"
              :clickable="clickableFilters"
          />
        </div>
      </div>
      <div
          v-for="filter in filters"
          :key="'filter-' + filter.id"
          class="container-tags-cards"
      >
        <div class="container-tags">
          <ArticleTag
              v-if="getActiveFilter(filter.name)"
              :tagname="filter.name"
              :vertical="vertical"
              v-bind:class="{
              vertical,
              unclickable,
            }"
          />
        </div>
        <div v-if="getActiveFilter(filter.name)" class="container-cards">
          <div v-for="article in articles" :key="'article-' + article.id">
            <div v-if="!article.bestOf">
              <ArticleCard
                  v-if="filter.name === article.category.name"
                  :mainPhoto="article.mainPhoto"
                  :title="article.title"
                  :date="article.date"
                  :description="article.content"
                  :author="article.authors"
                  :tagname="article.category.name"
                  :bestOf="article.bestOf"
                  @clicked="navigate"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundBlog from "@/components/backgroundBlog.vue";
import ArticleCard from "@/components/articleCard.vue";
import ArticleTag from "@/components/articleTag.vue";
import router from "../router";
import axios from "axios";

export default {
  components: {
    BackgroundBlog,
    ArticleCard,
    ArticleTag,
  },
  data() {
    return {
      vertical: true,
      bestOf: true,
      title: "Title blog",
      mainPhoto: "http://placehold.jp/344x278.png",
      date: {
        d: "26",
        m: "04",
        y: "2020",
      },
      name: "Développement web",
      content:
          "Wesh l’EMLV c’est qui ? Découvrez toutes les joies du chômage avec notre réportaire juste ici... ",
      authors: {
        name: "Test",
        lastName: "Test",
        avatar: {
          name: "Test_photo",
          alternativeText: "",
          formats: {
            thumbnail: {
              url: "http://placehold.jp/344x278.png"
            }
          }
        },
      },
      articles: [],
      filters: [],
      clickableFilters: true,
      unclickable: true,
    };
  },
  methods: {
    // Get only the articles if the filter is active or if as article
    getActiveFilter(filterName) {
      if (this.filters.find((filter) => filter.isActive)) {
        let currentFilter = this.filters.find((filter) => filter.name === filterName);
        if (currentFilter.isActive) return !!this.articles.find((article) => article.category.name === filterName);
        else return false;
      } else return !!this.articles.find((article) => article.category.name === filterName);
    },
    navigate() {
      router.push({path: "/article/1"})
    },
    fetchCategories() {
      axios.get(process.env.VUE_APP_API_URL + "/categories")
          .then(res => {
            res.data.forEach((el, index) => {
              el.isActive = false;
              el.id = index
              this.filters.push(el)
            })
          })
    },
    fetchArticles() {
      axios.get(process.env.VUE_APP_API_URL + "/articles")
          .then(res => {
            res.data.forEach((el) => {
              this.articles.push(el)
            })
          })
    },
    changeClass(id) {
      this.filters[id].isActive = !this.filters[id].isActive;
    },
    bestOfResponsive() {
      let badge = document.getElementsByClassName("badge")[0];
      if (window.innerWidth < 550) {
        this.bestOf = false;
        badge.style.display = "block";
        badge.style.position = "absolute";
        badge.style.zIndex = "70";
        badge.style.backgroundColor = "#FDB922";
        badge.style.padding = "5px 15px";
        badge.style.borderRadius = "30px";
        badge.style.boxShadow = "2.5px 3px white";
        badge.style.right = "126px";
        badge.style.top = "-27px";
      } else {
        this.bestOf = true;
        badge.removeAttribute("style");
      }
    },
  },
  mounted() {
    this.fetchCategories();
    this.fetchArticles();
    this.bestOfResponsive();
    window.addEventListener("resize", () => {
      this.bestOfResponsive();
    });
  },
  updated() {
    console.log(this.filters)
  }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
