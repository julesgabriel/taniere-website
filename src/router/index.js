import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Members from "../views/Members";
import Events from "../views/Events";
import Meta from "vue-meta"

const Blog = () => import(/* webpackChunkName: "blog" */'../views/Blog');
const singleArticle = () => import(/* webpackChunkName: "blog" */'../views/singleArticle');


Vue.use(Meta);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/membres',
    name: 'Members',
    component: Members
  },
  {
    path: '/evenements',
    name: 'Events',
    component: Events
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/article/:slug',
    name: 'singleArticle',
    component: singleArticle,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
