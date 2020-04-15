import Vue from 'vue'
import Router from 'vue-router'
import Homepage from "@/components/Pages/Homepage";
import AboutUs from '@/components/Pages/AboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/about",
      name: "AboutUs",
      component: AboutUs
    }
  ]
});
