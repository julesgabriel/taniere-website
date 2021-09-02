<template>
  <div class="singleArticle">
    <div class="article">
      <div class="thumbnail"></div>
      <div class="content">
        <div class="top">
          <div class="left">
            <a href="#"
              ><svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                <path
                  d="M0.368652 5L4.15146 9.08937C4.32443 9.28203 4.58881 9.36781 4.84334 9.31156C5.09647 9.25531 5.30037 9.06687 5.37631 8.81797C5.45225 8.56906 5.38897 8.29906 5.20896 8.11062L2.99693 5.72L16.9202 5.72C17.1804 5.72422 17.4208 5.58781 17.5516 5.36281C17.6838 5.13922 17.6838 4.86078 17.5516 4.63719C17.4208 4.41219 17.1804 4.27578 16.9202 4.28L2.99693 4.28L5.20896 1.88937C5.38896 1.70094 5.45225 1.43094 5.37631 1.18203C5.30037 0.933124 5.09646 0.744687 4.84334 0.688437C4.58881 0.632187 4.32443 0.717969 4.15146 0.910624L0.368652 5Z"
                  fill="#828282"
                /></svg
            ></a>

            <a href="#">Blog</a>
            <p>></p>
            <a href="#">Title blog</a>
          </div>
          <div class="right">
            <svg height="32" width="32">
              <circle cx="16" cy="16" r="16" fill="#333" />
            </svg>
            <svg height="32" width="32">
              <circle cx="16" cy="16" r="16" fill="#333" />
            </svg>
            <svg height="32" width="32">
              <circle cx="16" cy="16" r="16" fill="#333" />
            </svg>
          </div>
        </div>
        <h2 id="title">Title Blog</h2>
        <div class="tags">
          <div id="devData">Dévelopment, Data</div>
        </div>
        <div class="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            asperiores natus officiis, cum sint eaque deserunt perferendis harum
            animi molestiae, sapiente magni voluptate. Quia et eaque dolore
            doloribus quidem! Quisquam.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odit,
            voluptatibus, corporis consequatur ex autem veritatis odio inventore
            neque harum iusto reprehenderit laudantium blanditiis impedit quod
            laboriosam magnam. Tempore, consequatur?
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            vel dolores numquam aut repudiandae, minima cumque voluptatibus nemo
            velit in ut esse mollitia suscipit, rem facilis vitae! A, similique
            et?
          </p>
        </div>
        <div class="authors">
          Article de Quentin Guilbert avec la participation <br />
          de Jules Dayaux et Alexandra Goeman
        </div>
        <div class="annexes">
            <p>Annexes</p>
            <div class="images">
            <a href="#"><img src="http://placehold.jp/370x220.png" alt=""></a>
            <a href="#"><img src="http://placehold.jp/370x380.png" alt=""></a>
            <a href="#"><img src="http://placehold.jp/370x400.png" alt=""></a>
            <a href="#"><img src="http://placehold.jp/370x280.png" alt=""></a>
            <a href="#"><img src="http://placehold.jp/370x220.png" alt=""></a>
            <a href="#"><img src="http://placehold.jp/370x220.png" alt=""></a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "singleArticle",
  components: {},
  mounted(){
    //console.log(this.$route.params.id)
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Saira:wght@400;500;600;700&display=swap");
</style>



