<template>
  <div class="singleArticle" v-if="article">
    <div class="article">
      <div class="banner">
        <img :src="envApiUrl + article.mainPhoto.formats.large.url" alt=""/>
      </div>
      <div class="content">
        <div class="top">
          <div class="left">
            <a href="#">
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                <path
                    d="M0.368652 5L4.15146 9.08937C4.32443 9.28203 4.58881 9.36781 4.84334 9.31156C5.09647 9.25531 5.30037 9.06687 5.37631 8.81797C5.45225 8.56906 5.38897 8.29906 5.20896 8.11062L2.99693 5.72L16.9202 5.72C17.1804 5.72422 17.4208 5.58781 17.5516 5.36281C17.6838 5.13922 17.6838 4.86078 17.5516 4.63719C17.4208 4.41219 17.1804 4.27578 16.9202 4.28L2.99693 4.28L5.20896 1.88937C5.38896 1.70094 5.45225 1.43094 5.37631 1.18203C5.30037 0.933124 5.09646 0.744687 4.84334 0.688437C4.58881 0.632187 4.32443 0.717969 4.15146 0.910624L0.368652 5Z"
                    fill="#828282"
                />
              </svg>
            </a>
            <div @click="navigate('blog')">Blog</div>
            <p>></p>
            <div>{{ this.article.shortTitle }}</div>
          </div>
          <div class="right">
            <img
                v-for="(item, index) in article.authors"
                :key="index"
                :src="envApiUrl + item.avatar.formats.thumbnail.url"
                alt=""
            />
          </div>
        </div>
        <h2 id="title">{{ this.article.title }}</h2>
        <div class="tags">
          <div id="devData">{{ this.article.category.name }}</div>
          <!-- <ArticleTag
            :tagname="this.artcle.category.name"
            v-bind:class="{
              unclickable,
            }"
          /> -->
        </div>
        <markdown-it-vue class="text" :content="article.content"/>
        <div class="authors">
          Article publié le
          {{ renderDateToMonthAndDateLitterals(article.date) }}<br/>{{
            renderAuthorsSentence(this.article.authors)
          }}
        </div>
        <div v-if="article.annexes.length > 0" class="annexes">
          <p>Annexes</p>
          <div class="images">
            <img v-for="annexe in article.annexes" :key="annexe.id" :src="envApiUrl + annexe.formats.medium.url" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownItVue from "markdown-it-vue";
import "markdown-it-vue/dist/markdown-it-vue.css";
import navigate from "../logic/navigation";
import GetDataFetchedFromApi from "../logic/httpClient/getDataFetchFromApi";
// import ArticleTag from "@/components/articleTag.vue";

export default {
  name: "singleArticle",
  components: {
    MarkdownItVue,
    // ArticleTag
  },
  data() {
    return {
      envApiUrl: process.env.VUE_APP_API_URL,
      article: false,
    };
  },
  methods: {
    navigate,
    renderAuthorsSentence(authors) {
      let sentence = `Ecrit par ${authors[0].name}` + "\n";
      if (authors.length > 1) {
        sentence += `avec la participation de `;
        let arrayToConcatSentenceWith = [];
        for (let i = 1; i < authors.length; i++)
          arrayToConcatSentenceWith.push(authors[i].name);
        sentence += arrayToConcatSentenceWith.join(" et ");
      }
      return sentence;
    },
    renderDateToMonthAndDateLitterals(date) {
      let options = {year: "numeric", month: "long", day: "numeric"};
      let dateToConvert = new Date(date);
      return dateToConvert.toLocaleDateString("fr-FR", options);
    },
    animateArticleOnScroll() {
      window.addEventListener("scroll", () => {
        let banner = document.getElementsByClassName("banner")[0];
        let value = -window.scrollY * 0.1;
        banner.style.maxHeight = Math.abs(60 + value) + "vh";
      });
    },
  },
  mounted() {
    GetDataFetchedFromApi("articles", this.$route.params.slug).then(
        (res) => (this.article = res.data)
  )
    ;

    if (this.$route.name === "singleArticle") this.animateArticleOnScroll();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Saira:wght@400;500;600;700&display=swap");
</style>



