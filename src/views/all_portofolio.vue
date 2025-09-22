<template>
  <div class="p-4 sm:p-6">
    <!-- Filter Buttons + Back Button -->
    <div class="flex flex-wrap gap-3 mb-6 justify-center items-center pb-2">

      <!-- Tombol Kembali -->
      <router-link
        to="/portofolio"
        class="flex-shrink-0 px-3 sm:px-4 py-2 rounded-lg font-medium bg-gray-700 text-white shadow hover:bg-gray-900 transition text-sm sm:text-base"
      >
        Kembali
      </router-link>

      <!-- Tombol Kategori -->
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selectedCategory = cat; currentIndex = 0"
        class="flex-shrink-0 px-3 sm:px-4 py-2 rounded-lg font-medium transition text-sm sm:text-base"
        :class="selectedCategory === cat
          ? 'bg-blue-600 text-white shadow'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Image Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      <div
        v-for="(img, index) in filteredImages"
        :key="index"
        class="aspect-square w-full overflow-hidden rounded-xl shadow cursor-pointer"
        @click="openPreview(index)"
      >
        <img
          :src="img.src"
          :alt="img.category + ' ' + index"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>

    <!-- Preview Modal -->
    <div
        v-if="previewOpen"
        class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      >
      <!-- Close Area -->
      <div class="absolute inset-0" @click="closePreview"></div>

      <!-- Tombol Close -->
      <button
        @click="closePreview"
        class="absolute top-4 right-4 text-white text-3xl sm:text-4xl z-20 hover:text-red-400 transition"
      >
        X
      </button>

      <!-- Image -->
      <img
        :src="filteredImages[currentIndex].src"
        alt="Preview"
        class="relative z-10 max-h-[85%] max-w-[95%] rounded-lg shadow-lg object-contain"
      />

      <!-- Controls -->
      <button
        @click.stop="prevImage"
        class="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl font-bold z-20"
      >
        ‹
      </button>
      <button
        @click.stop="nextImage"
        class="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl font-bold z-20"
      >
        ›
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

// Ambil semua gambar dari folder assets/img (subfolder juga)
const imageModules = import.meta.glob("../assets/img/**/*.{jpg,png,jpeg,JPG}", { eager: true })

// Buat daftar gambar + kategori (folder = kategori)
const allImages = Object.entries(imageModules).map(([path, mod]) => {
  const parts = path.split("/")
  const category = parts[parts.length - 2]
  return { src: mod.default, category }
})

// Ambil kategori unik
const categories = ["All", ...new Set(allImages.map((img) => img.category))]

// State filter
const selectedCategory = ref("All")

// Filtered images
const filteredImages = computed(() => {
  if (selectedCategory.value === "All") return allImages
  return allImages.filter((img) => img.category === selectedCategory.value)
})

// Modal preview state
const previewOpen = ref(false)
const currentIndex = ref(0)

const openPreview = (index) => {
  currentIndex.value = index
  previewOpen.value = true
}

const closePreview = () => {
  previewOpen.value = false
}

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % filteredImages.value.length
}

const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + filteredImages.value.length) % filteredImages.value.length
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
