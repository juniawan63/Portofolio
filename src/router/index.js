import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Portofolio from "@/views/Portofolio.vue"
import Testimoni from "@/views/Testimoni.vue"
import Aboutme from "@/views/Aboutme.vue"
import Kontak from "@/views/Kontak.vue"
import ALL from "@/views/all_portofolio.vue"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/portofolio", name: "Portofolio", component: Portofolio },
  { path: "/testimoni", name: "Testimoni", component: Testimoni },
  { path: "/Aboutme", name: "Aboutme", component: Aboutme },
  { path: "/kontak", name: "Kontak", component: Kontak },
  { path: "/all", name: "All Portofolio", component: ALL}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: "smooth" }
    }
  },
})

export default router
