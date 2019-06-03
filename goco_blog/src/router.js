import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Fun from "./views/FunNews.vue"
import Tech from "./views/TechNews.vue"
import Sport from './views/SportsNews.vue'
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import( "./views/About.vue")
    },
    {
      path:"/funnews",
      name:'fun',
      component:Fun
    },
    {
      path:"/technews",
      name:'tech',
      component:Tech
    },
    {
      path:"/sportsnews",
      name:'sport',
      component:Sport
    }
  ]
});
