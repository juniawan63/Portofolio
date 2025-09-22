<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <main class="flex-1 bg-white relative overflow-hidden">
      <div
        class="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <!-- Text -->
        <div data-aos="fade-right">
          <p class="text-sm tracking-wider text-gray-800 font-serif uppercase">
            Bukan hanya foto, tapi jejak
          </p>
          <p class="text-sm tracking-wider text-gray-800 font-serif uppercase">
            rasa dan kenangan yang terabadikan.
          </p>
          <h1
            class="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Selamat Datang di <br /> Juniawan Potograph
          </h1>
          <p
            class="mt-4 text-sm tracking-wider text-gray-800 font-serif"
          >
            Halo, saya Galih Juniawan. Saya percaya setiap momen berharga pantas dikenang, bukan hanya dalam ingatan, tetapi juga dalam visual yang bercerita. Melalui lensa, saya berusaha menghadirkan keindahan yang sederhana, namun bermakna.
          </p>
        </div>

        <!-- Image -->
        <div data-aos="fade-left" class="relative z-10">
          <img
            src="../assets/logo/PP_Galih landscape.jpg"
            alt="Foto Saya"
            class="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <!-- Decorative Shape -->
      <div
        data-aos="fade-left"
        class="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600 rounded-tl-[200px] lg:w-96 lg:h-96"
      ></div>
    </main>
  </div>

  <!-- Kategori -->
  <div>
    <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          class="text-3xl font-bold text-gray-900 text-center mb-12"
          data-aos="fade-up"
        >
          Kategori Foto
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Card 1 -->
          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div
              class="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4"
            >
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
            <div
              class="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4"
            >
              🌆
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              Street Photography
            </h3>
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
            <div
              class="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4"
            >
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
            <div
              class="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4"
            >
              🎨
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              Creative & Conceptual
            </h3>
            <p class="text-gray-600 text-sm">
              Eksperimen visual dengan konsep unik untuk karya artistik yang berbeda dari biasanya.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!--Testimoni-->
     <section class="min-h-screen bg-gray-50 text-gray-800 pt-6">
        <div class="container mx-auto px-6 lg:px-20">
                <!-- Header -->
                <div class="text-center mb-12" data-aos="fade-down">
                  <h1 class="text-3xl sm:text-4xl font-bold">Testimoni Klien</h1>
                  <p class="mt-3 text-gray-600 max-w-2xl mx-auto">
                    Beberapa pengalaman dan kesan dari klien yang telah bekerja sama dengan saya.
                  </p>
                </div>

                <!-- Swiper -->
                <swiper
                  :modules="[Pagination, Navigation, Autoplay]"
                  :slides-per-view="1"
                  :space-between="20"
                  :pagination="{ clickable: true }"
                  :navigation="true"
                  :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false
                  }"
                  :loop="true"
                  :breakpoints="{
                    768: { slidesPerView: 2, spaceBetween: 24 },
                    1024: { slidesPerView: 3, spaceBetween: 32 }
                  }"
                  class="pb-14"
                >
                  <swiper-slide v-for="(t, i) in testimonials" :key="i">
                    <div
                      class="bg-white p-6 rounded-2xl shadow-lg text-center max-w-lg mx-auto"
                      data-aos="fade-up"
                    >
                      <img
                        :src="t.image"
                        alt="client"
                        class="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow"
                      />
                      <p class="text-gray-600 italic mb-4">"{{ t.text }}"</p>
                      <h4 class="font-semibold text-lg">{{ t.name }}</h4>
                    </div>
                  </swiper-slide>
                </swiper>
         </div>
       </section>

    <!-- Portfolio -->
    <section id="portofolio-section" class=" bg-gray-50 pt-6">
      <div class="container mx-auto px-6 lg:px-20">
        <!-- Heading -->
        <div class="text-center mb-10" data-aos="fade-down">
          <h1 class="text-3xl font-bold">Portfolio</h1>
          <p class="text-gray-600 mt-2">
            Koleksi hasil karya saya dalam berbagai kategori.
          </p>
        </div>

        <!-- Filter -->
        <div
          class="flex flex-wrap justify-center gap-4 mb-8"
          data-aos="fade-up"
        >
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
          data-aos-delay="100"
        >
          <div
            v-for="(photo, i) in filteredPhotos"
            :key="i"
            class="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
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
        <div
          class="flex justify-center mt-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <router-link
            to="/all"
            class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Lihat Lainnya
          </router-link>
        </div>
      </div>
    </section>

    <!-- Kirim PEsan -->
    <section class="bg-gray-100 py-16">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div
          class="bg-white rounded-2xl shadow-lg p-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 class="text-xl font-semibold mb-4">Kirim Pesan</h2>

          <form @submit.prevent="onSubmit" class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Nama</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-transparent"
                placeholder="Nama lengkap"
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-transparent"
                  placeholder="email@gmail.com"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1"
                  >Telepon (opsional)</label
                >
                <input
                  v-model="form.phone"
                  type="tel"
                  class="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-transparent"
                  placeholder="+62 8xx"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium mb-1"
                >Pesan </label
              >
              <textarea
                v-model="form.message"
                rows="5"
                required
                class="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-transparent"
                placeholder="Ceritakan kebutuhan atau konsepmu..."
              ></textarea>
            </div>

            <div class="flex items-center gap-3 flex-wrap">
              <button
                type="submit"
                class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium shadow"
              >
                <i class="fas fa-paper-plane"></i> Kirim Pesan
              </button>

              <!-- Chat via WhatsApp -->
              <button
                type="button"
                @click="sendWhatsappPrefilled"
                class="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition"
              >
                <i class="fab fa-whatsapp"></i>
                Kirim via WhatsApp
              </button>
            </div>

            <p
              v-if="status.message"
              :class="{
                'text-green-600': status.ok,
                'text-red-600': !status.ok
              }"
              class="text-sm mt-2"
            >
              {{ status.message }}
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation, Autoplay } from "swiper/modules"

const testimonials = [
  {
    name: "Intan RJ",
    text: "Hasil fotonya luar biasa! Setiap momen terasa hidup.",
    image: new URL("@/assets/client/client5.jpg", import.meta.url).href,
  },
  {
    name: "Kirana",
    text: "Keren bangett asli!!, memang andalan sihhh",
    image: new URL("@/assets/client/client1.jpg", import.meta.url).href,
  },
  {
    name: "M. Fasih syah pahlevi",
    text: "Sangat keren dan hasil editingnya rapi.",
    image: new URL("@/assets/client/client2.jpg", import.meta.url).href,
  },
  {
    name: "Muhamad Iqbal",
    text: "Fotografer terbaik yang pernah saya ajak kerjasama.",
    image: new URL("@/assets/client/client3.jpg", import.meta.url).href,
  },
  {
    name: "Ence Riki",
    text: "Pelayanan ramah, hasil foto sangat memuaskan.",
    image: new URL("@/assets/client/client4.jpg", import.meta.url).href,
  },
  {
    name: "Dewi Fitriyani",
    text: "Kreatif banget, setiap foto punya cerita.",
    image: new URL("@/assets/client/client.jpg", import.meta.url).href,
  },
]

const previewImage = ref(null)

function openPreview(src) {
  previewImage.value = src
}
function closePreview() {
  previewImage.value = null
}

const categories = ["All", "Street Fotografi", "Potrait", "Event", "Produk"]

const photos = ref([
  {
    src: new URL(
      "../assets/img/Street_Fotografi/alam landscap (1).jpg",
      import.meta.url
    ).href,
    category: "Street Fotografi"
  },
  {
    src: new URL(
      "../assets/img/Street_Fotografi/alam landscap (2).jpg",
      import.meta.url
    ).href,
    category: "Street Fotografi"
  },
  {
    src: new URL(
      "../assets/img/Potrait/potrait shake (9).JPG",
      import.meta.url
    ).href,
    category: "Potrait"
  },
  {
    src: new URL(
      "../assets/img/Event/Event Lanscap (1).jpg",
      import.meta.url
    ).href,
    category: "Event"
  },
  {
    src: new URL("../assets/img/Produk/Produk 1-1.jpg", import.meta.url).href,
    category: "Produk"
  },
  {
    src: new URL("../assets/img/Potrait/potrait shake (8).JPG",import.meta.url).href,
    src: new URL("../assets/img/Potrait/potrait shake (8).JPG", import.meta.url).href,
    category: "Potrait"
  }
])

const activeCategory = ref("All")

const filteredPhotos = computed(() => {
  if (activeCategory.value === "All") return photos.value
  return photos.value.filter((p) => p.category === activeCategory.value)
})

// ====== Kirim pesan ======
const form = ref({
  name: "",
  email: "",
  phone: "",
  message: ""
})

const status = ref({ message: "", ok: false })

function onSubmit() {
  status.value = {
    message: "Pesan berhasil dikirim! (simulasi)",
    ok: true
  }
  form.value = { name: "", email: "", phone: "", message: "" }
}

function sendWhatsappPrefilled() {
  const text = `Halo, saya ${form.value.name}. 
Email: ${form.value.email}
Telepon: ${form.value.phone || "-"}
Pesan: ${form.value.message}`
  window.open(
    `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`,
    "_blank"
  )
}
</script>
<style scoped>
.swiper-pagination-bullet {
  background: #4f46e5; /* indigo-600 */
  opacity: 0.7;
}
.swiper-pagination-bullet-active {
  opacity: 1;
}

/* Styling tombol panah */
.swiper-button-next,
.swiper-button-prev {
  color: #4f46e5; /* indigo */
  transition: 0.3s;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: #1e40af; /* indigo-900 */
}
</style>