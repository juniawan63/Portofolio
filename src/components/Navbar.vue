<template>
  <header class="bg-gradient-to-r from-gray-900 to-black shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <img 
            src="../assets/logo/jp logo 1.png" 
            alt="JP Logo"
            class="w-10 h-10"
          />
          <span class="font-bold text-lg text-white">Juniawan Potograph</span>
        </div>

        <!-- Menu Desktop -->
        <nav class="hidden md:flex gap-6 font-medium">
          <router-link 
            to="/" 
            class="hover:text-gray-300 text-white"
            active-class="text-indigo-500 font-bold"
            exact-active-class="text-indigo-500 font-bold"
          >
            Beranda
          </router-link>
          <router-link 
            to="/portofolio" 
            class="hover:text-gray-300 text-white"
            active-class="text-indigo-500 font-bold"
          >
            Potofolio
          </router-link>
          <router-link 
            to="/testimoni" 
            class="hover:text-gray-300 text-white"
            active-class="text-indigo-500 font-bold"
          >
            Testimoni
          </router-link>
          <router-link 
            to="/Aboutme" 
            class="hover:text-gray-300 text-white"
            active-class="text-indigo-500 font-bold"
          >
            About Me
          </router-link>
          <router-link 
            to="/kontak" 
            class="hover:text-gray-300 text-white"
            active-class="text-indigo-500 font-bold"
          >
            Kontak Kami
          </router-link>
        </nav>

        <!-- Mobile Button -->
        <button 
          class="md:hidden text-white focus:outline-none"
          @click="isOpen = !isOpen"
        >
          ☰
        </button>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div v-if="isOpen" class="md:hidden bg-gray-900 border-t border-gray-700 shadow-sm">
      <nav class="flex flex-col p-4 gap-2 text-white">
        <router-link to="/" class="hover:text-indigo-300" active-class="text-indigo-500 font-bold">Beranda</router-link>
        <router-link to="/portofolio" class="hover:text-indigo-300" active-class="text-indigo-500 font-bold">Portofolio</router-link>
        <router-link to="/testimoni" class="hover:text-indigo-300" active-class="text-indigo-500 font-bold">Testimoni</router-link>
        <router-link to="/Aboutme" class="hover:text-indigo-300" active-class="text-indigo-500 font-bold">About Me</router-link>
        <router-link to="/kontak" class="hover:text-indigo-300" active-class="text-indigo-500 font-bold">Kontak Kami</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue"
const isOpen = ref(false)
</script>
