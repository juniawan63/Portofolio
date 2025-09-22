<template>
  <section class="min-h-screen bg-gray-50 text-gray-800 py-16">
    <div class="container mx-auto px-6 lg:px-20">
      <!-- Header -->
      <div class="text-center mb-12" data-aos="fade-down">
        <h1 class="text-3xl sm:text-4xl font-extrabold">Tentang Saya</h1>
        <p class="mt-3 text-gray-600 max-w-2xl mx-auto">
          Kenali lebih dekat siapa saya, keahlian saya, dan karya yang saya hasilkan.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <!-- Left: Biodata & Sosmed -->
        <div class="bg-white rounded-2xl shadow-lg p-6 space-y-6" data-aos="fade-right">
          <div class="flex flex-col items-center text-center">
            <img src="@/assets/logo/potrait (7).jpg" alt="Foto Profil"
              class="w-32 h-32 rounded-full shadow-md object-cover" />
            <h2 class="mt-4 text-xl font-semibold">Galih Juniawan Priatna</h2>
            <p class="text-gray-600">Fotografer & Visual Storyteller</p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">Biodata</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li><span class="font-medium">Umur:</span> 18 tahun</li>
              <li><span class="font-medium">Alamat:</span> Sumedang, Indonesia</li>
              <li><span class="font-medium">Kelulusan:</span>  2026 (First Graduate)</li>
            </ul>
          </div>
          <!-- Media Sosial -->
          <div>
            <h3 class="font-semibold mb-2 text-center">Media Sosial</h3>
            <div class="flex gap-3 justify-center ">
              <a 
                v-for="s in social" 
                :key="s.name" 
                :href="s.href" 
                target="_blank" 
                rel="noopener" 
                class="p-2 rounded-lg hover:bg-gray-100 transition"
              >
                <i :class="s.icon + ' text-2xl'"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Middle: Skills -->
        <div class="bg-white rounded-2xl shadow-lg p-6" data-aos="zoom-in">
          <h3 class="font-semibold text-lg mb-4">Keahlian</h3>
          <div v-for="skill in skills" :key="skill.name" class="mb-4">
            <div class="flex justify-between mb-1">
              <span>{{ skill.name }}</span>
              <span class="text-sm text-gray-500">{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-indigo-600 h-2 rounded-full" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>

        <!-- Right: Gallery -->
        <div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col" data-aos="fade-left">
        <h3 class="font-semibold text-lg mb-4">Hasil Foto</h3>

        <div class="grid grid-cols-2 md:grid-cols-2 gap-4 p-6">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="w-full aspect-square"
          >
            <img
              :src="getImageUrl(image)"
              :alt="'Image ' + (index + 1)"
              class="w-full h-full object-cover rounded-lg shadow"
            />
          </div>
        </div>

        <div class="mt-4 text-center">
          <router-link 
            to="/all" 
            class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
            Lihat Lainnya
          </router-link>
        </div>
      </div>

      </div>

      <!-- Timeline Pengalaman -->
      <div class="mt-16 bg-white rounded-2xl shadow-lg p-6" data-aos="fade-up">
        <h3 class="font-semibold text-lg mb-6 text-center">Perjalanan Karier</h3>
        <div class="relative border-l border-gray-300 pl-6 space-y-8">
          <div v-for="exp in experiences" :key="exp.year" class="relative" data-aos="fade-up">
            <span class="absolute -left-3 top-1.5 w-3 h-3 bg-indigo-600 rounded-full"></span>
            <h4 class="font-semibold">{{ exp.year }} - {{ exp.title }}</h4>
            <p class="text-gray-600 text-sm">{{ exp.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const social = [
  { name: "email", href: "mailto:galihjuniawan207@gmail.com", icon: "fas fa-envelope text-red-500" },
  { name: "instagram", href: "https://ig.me/all_of_jpg", icon: "fab fa-instagram text-pink-600" },
  { name: "facebook", href: "https://facebook.com/username", icon: "fab fa-facebook text-blue-600" },
  { name: "tiktok", href: "https://tiktok.com/@juniawan.galih", icon: "fab fa-tiktok text-black" },
]

const skills = [
  { name: 'Photography', level: 90 },
  { name: 'Photo Editing', level: 85 },
  { name: 'Lighting', level: 80 },
  { name: 'Videography', level: 70 },
  { name: 'Jurnalistik', level: 50 },
  { name: 'Desain Grafis', level: 70 },
]

const images = [
  "potrait alam (1).jpg",
  "potrait alam (3).jpg",
  "potrait alam (6).jpg",
  "potrait alam (7).jpg",
]
const getImageUrl = (name) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href}

const experiences = [
  { year: '2023-2024', title: 'Bergabung Ekstrakulikuler Multimedia', desc: 'Mengasah Skill dan menambah pengalaman fotografi' },
  { year: '2023', title: 'Fotografer Acara', desc: 'Menjadi fotografer utama di beberapa event lokal.' },
  { year: '2024-Sekarang', title: 'Menjadi Ketua Ekstrakulikuler Multimedia', desc: 'Mengamalkan dan upgrade skill dan pengalaman fotografi' },
  { year: '2024', title: 'Memulai Free Lancer', desc: 'Mengambil proyek kecil untuk acara keluarga dan teman.' },
  { year: '2024', title: 'Kolaborasi Event', desc: 'Bekerjasama dengan beberapa Ekskul dan Organisasi Sekolah.' },
  { year: '2025', title: 'Kolaborasi Brand', desc: 'Bekerjasama dengan beberapa brand makanan dan produk lokal.' }
]
</script>
