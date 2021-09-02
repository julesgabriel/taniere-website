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
      <div class="bestOfContainer">
        <ArticleCard
            :thumbnail="thumbnail"
            :title="title"
            :date="date"
            :description="description"
            :author="author"
            :tagname="tagname"
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
              :tagname="filter.tagname"
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
              v-if="getActiveFilter(filter.tagname)"
              :tagname="filter.tagname"
              :vertical="vertical"
              v-bind:class="{
              vertical,
              unclickable,
            }"
          />
        </div>
        <div v-if="getActiveFilter(filter.tagname)" class="container-cards">
          <div v-for="article in articles" :key="'article-' + article.id">
            <ArticleCard
                v-if="filter.tagname === article.tagname"
                :thumbnail="article.thumbnail"
                :title="article.title"
                :date="article.date"
                :description="article.description"
                :author="article.author"
                :tagname="article.tagname"
                @clicked="navigate"
            />
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
      thumbnail: "http://placehold.jp/344x278.png",
      date: {
        d: "26",
        m: "04",
        y: "2020",
      },
      tagname: "Development",
      description:
          "Wesh l’EMLV c’est qui ? Découvrez toutes les joies du chômage avec notre réportaire juste ici... ",
      author: {
        name: "Test",
        img: "http://placehold.jp/31x31.png",
      },
      articles: [
        {
          id: 0,
          title: "Title blog",
          thumbnail: "http://placehold.jp/344x278.png",
          date: {
            d: "26",
            m: "04",
            y: "2020",
          },
          tagname: "Development",
          description:
              "Phasellus accumsan, ante a volutpat element, justo lectus hendrerit mi, elementum ",
          author: {
            name: "Test",
            img: "http://placehold.jp/31x31.png",
          },
        },
        {
          id: 1,
          title: "Title blog",
          thumbnail: "http://placehold.jp/344x278.png",
          date: {
            d: "26",
            m: "04",
            y: "2020",
          },
          tagname: "Data",
          description:
              "Phasellus accumsan, ante a volutpat element, justo lectus hendrerit mi, elementum ",
          author: {
            name: "Test",
            img: "http://placehold.jp/31x31.png",
          },
        },
        {
          id: 2,
          title: "Title blog",
          thumbnail: "http://placehold.jp/344x278.png",
          date: {
            d: "26",
            m: "04",
            y: "2020",
          },
          tagname: "Design",
          description:
              "Phasellus accumsan, ante a volutpat element, justo lectus hendrerit mi, elementum ",
          author: {
            name: "Test",
            img: "http://placehold.jp/31x31.png",
          },
        },
        {
          id: 3,
          title: "Title blog",
          thumbnail: "http://placehold.jp/344x278.png",
          date: {
            d: "26",
            m: "04",
            y: "2020",
          },
          tagname: "Digital",
          description:
              "Phasellus accumsan, ante a volutpat element, justo lectus hendrerit mi, elementum ",
          author: {
            name: "Test",
            img: "http://placehold.jp/31x31.png",
          },
        },
        {
          id: 4,
          title: "Title blog",
          thumbnail: "http://placehold.jp/344x278.png",
          date: {
            d: "26",
            m: "04",
            y: "2020",
          },
          tagname: "Veille",
          description:
              "Phasellus accumsan, ante a volutpat element, justo lectus hendrerit mi, elementum ",
          author: {
            name: "Test",
            img: "http://placehold.jp/31x31.png",
          },
        },
        {
          id: 5,
          title: "Title blog",
          thumbnail: "http://placehold.jp/344x278.png",
          date: {
            d: "26",
            m: "04",
            y: "2020",
          },
          tagname: "Data",
          description:
              "Phasellus accumsan, ante a volutpat element, justo lectus hendrerit mi, elementum ",
          author: {
            name: "Test",
            img: "http://placehold.jp/31x31.png",
          },
        },
        {
          id: 6,
          title: "Title blog",
          thumbnail: "http://placehold.jp/344x278.png",
          date: {
            d: "26",
            m: "04",
            y: "2020",
          },
          tagname: "Design",
          description:
              "Phasellus accumsan, ante a volutpat element, justo lectus hendrerit mi, elementum ",
          author: {
            name: "Test",
            img: "http://placehold.jp/31x31.png",
          },
        },
        {
          id: 7,
          title: "Title blog",
          thumbnail: "http://placehold.jp/344x278.png",
          date: {
            d: "26",
            m: "04",
            y: "2020",
          },
          tagname: "Data",
          description:
              "Phasellus accumsan, ante a volutpat element, justo lectus hendrerit mi, elementum ",
          author: {
            name: "Test",
            img: "http://placehold.jp/31x31.png",
          },
        },
        {
          id: 8,
          title: "Title blog",
          thumbnail: "http://placehold.jp/344x278.png",
          date: {
            d: "26",
            m: "04",
            y: "2020",
          },
          tagname: "Data",
          description:
              "Phasellus accumsan, ante a volutpat element, justo lectus hendrerit mi, elementum ",
          author: {
            name: "Test",
            img: "http://placehold.jp/31x31.png",
          },
        },
        {
          id: 9,
          title: "Title blog",
          thumbnail: "http://placehold.jp/344x278.png",
          date: {
            d: "26",
            m: "04",
            y: "2020",
          },
          tagname: "Development",
          description:
              "Phasellus accumsan, ante a volutpat element, justo lectus hendrerit mi, elementum ",
          author: {
            name: "Test",
            img: "http://placehold.jp/31x31.png",
          },
        },
      ],
      filters: [
        {id: 0, tagname: "Development", isActive: false},
        {id: 1, tagname: "Data", isActive: false},
        {id: 2, tagname: "Veille", isActive: false},
        {id: 3, tagname: "Design", isActive: false},
        {id: 4, tagname: "Digital", isActive: false},
      ],
      clickableFilters: true,
      unclickable: true,
    };
  },
  methods: {
    // Get only the articles if the filter is active or if as article
    getActiveFilter(filterName) {
      if (this.filters.find((filter) => filter.isActive)) {
        let currentFilter = this.filters.find(
            (filter) => filter.tagname === filterName
        );
        if (currentFilter.isActive) return !!this.articles.find((article) => article.tagname === filterName);
        else return false;
      } else return !!this.articles.find((article) => article.tagname === filterName);
    },
    navigate() {
      router.push({path: "/article/1"})
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
    this.bestOfResponsive();
    window.addEventListener("resize", () => {
      this.bestOfResponsive();
    });
  },
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
