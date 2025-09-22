<script setup>
import { onMounted } from "vue"
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  })
})
</script>

<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <!-- Halaman dinamis sesuai route -->
    <router-view />
    <Footer />
  </div>
</template>

<style>
/* Bisa pakai global styles atau Tailwind */
</style>
