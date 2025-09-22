<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="flex items-center">
      <div
        class="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <!-- Text Section -->
        <div data-aos="fade-right">
          <h1
          class="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
          >
            Portofolio <br />
            Kreatif <br />
            Menampilkan <br />
            Karya & <br />
            Pengalaman
          </h1>

          <p class="text-gray-700 text-lg mb-6">
            Kumpulan proyek, desain, dan pengalaman yang pernah saya kerjakan,
            dirancang untuk menunjukkan kreativitas, keterampilan, serta dedikasi
            dalam setiap detail.
          </p>
          <button
            @click="scrollToSection"
            class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Lihat Portofolio
          </button>


        </div>

        <!-- Image Section -->
        <div class="relative" data-aos="fade-left">
          <img
            :src="randomImage"
            alt="Projek Kami"
            class="rounded-lg shadow-lg object-cover w-full"
          />
        </div>
      </div>
    </section>

    <!-- Grid Layanan -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12" data-aos="fade-up">
          Kategori Foto
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Card 1 -->
          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4">
              📸
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Event</h3>
            <p class="text-gray-600 text-sm">
              Mengabadikan momen penting pada acara resmi maupun non-formal dengan penuh detail.
            </p>
          </div>

          <!-- Card 2 -->
          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4">
              🌆
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Street Photography</h3>
            <p class="text-gray-600 text-sm">
              Menangkap keindahan spontan dari aktivitas sehari-hari dan suasana kota.
            </p>
          </div>

          <!-- Card 3 -->
          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div class="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4">
              🏞️
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Landscape</h3>
            <p class="text-gray-600 text-sm">
              Memotret keindahan alam, pemandangan, dan panorama dari berbagai sudut pandang.
            </p>
          </div>

          <!-- Card 4 -->
          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div class="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4">
              🎨
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Creative & Conceptual</h3>
            <p class="text-gray-600 text-sm">
              Eksperimen visual dengan konsep unik untuk karya artistik yang berbeda dari biasanya.
            </p>
          </div>
        </div>

      </div>
    </section>
  </div>

  <div>
    <section id="portofolio-section" class="min-h-screen bg-gray-50 py-16">
      <div class="container mx-auto px-6 lg:px-20">
        <!-- Heading -->
        <div class="text-center mb-10" data-aos="fade-down">
          <h1 class="text-3xl font-bold">Portfolio</h1>
          <p class="text-gray-600 mt-2">
            Koleksi hasil karya saya dalam berbagai kategori.
          </p>
        </div>

        <!-- Filter -->
        <div class="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'px-4 py-2 rounded-full transition font-medium',
              activeCategory === cat
                ? 'bg-indigo-600 text-white shadow'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            ]"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Gallery -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="100">
          <div
            v-for="(photo, i) in filteredPhotos"
            :key="i"
            class="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="200">
            <img
              :src="photo.src"
              :alt="photo.category"
              class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              @click="openPreview(photo.src)"
              />
          </div>
        </div>

        <!-- Modal Preview -->
        <div
          v-if="previewImage"
          class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          @click.self="closePreview"
        >
          <div class="relative max-w-4xl w-full p-4">
            <button
              class="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
              @click="closePreview"
            >
              ✕
            </button>
            <img
              :src="previewImage"
              alt="Preview"
              class="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>


        <!-- Lihat Lainnya -->
        <div class="flex justify-center mt-10" data-aos="fade-up" data-aos-delay="300">
          <router-link
            to="/all"
            class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Lihat Lainnya
          </router-link>
        </div>
      </div>
    </section>
    
  </div>

</template>

<script setup>
import { ref, computed } from "vue"
const previewImage = ref(null)

function openPreview(src) {
  previewImage.value = src
}

function closePreview() {
  previewImage.value = null
}

//daftar foto random di awal
const images = [
  new URL('../assets/img/Event/Event Lanscap (5).jpg', import.meta.url).href,
  new URL('../assets/img/Event/Event Lanscap (3).jpg', import.meta.url).href,
  new URL('../assets/img/Event/Event Lanscap (4).jpg', import.meta.url).href,
  new URL('../assets/img/Event/Event Lanscap (6).jpg', import.meta.url).href,
  new URL('../assets/img/Event/Event Lanscap (1).jpg', import.meta.url).href,
  new URL('../assets/img/Street_Fotografi/alam landscap (1).jpg', import.meta.url).href,
  new URL('../assets/img/Street_Fotografi/alam landscap (2).jpg', import.meta.url).href
]

//buat scroll ke bawah 
function scrollToSection() {
  const section = document.getElementById("portofolio-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Ambil foto randomyang ada diatas setiap refresh/load
const randomImage = images[Math.floor(Math.random() * images.length)]

const categories = ["All", "Street Fotografi", "Potrait", "Event", "Produk"]

const photos = ref([
  { src: new URL('../assets/img/Street_Fotografi/alam landscap (1).jpg', import.meta.url).href, category: "Street Fotografi" },
  { src: new URL('../assets/img/Street_Fotografi/alam landscap (2).jpg', import.meta.url).href, category: "Street Fotografi" },
  { src: new URL('../assets/img/Potrait/potrait shake (9).JPG', import.meta.url).href, category: "Potrait" },
  { src: new URL('../assets/img/Event/Event Lanscap (1).jpg', import.meta.url).href, category: "Event" },
  { src: new URL('../assets/img/Produk/Produk 1-1.jpg', import.meta.url).href, category: "Produk" },
  { src: new URL('../assets/img/Potrait/potrait shake (8).JPG', import.meta.url).href, category: "Potrait" },
])


const activeCategory = ref("All")

const filteredPhotos = computed(() => {
  if (activeCategory.value === "All") return photos.value
  return photos.value.filter(p => p.category === activeCategory.value)
})
</script>