<template>
  <section class="min-h-screen bg-gray-50 text-gray-800 py-16">
    <div class="container mx-auto px-6 lg:px-20">
      <!-- Header -->
      <div class="text-center mb-12" data-aos="fade-down">
        <h1 class="text-3xl sm:text-4xl font-extrabold">Testimoni Klien</h1>
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
      <div class="flex justify-center mt-6  transition duration-300">
      <router-link
            to="/all"
            class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-md">
            Lihat Hasil
          </router-link>
        </div>
    </div>
  </section>
  <section class="bg-gray-100 py-16">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div
          class="bg-white rounded-2xl shadow-lg p-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 class="text-xl font-semibold mb-4">Coment</h2>

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

            <div>
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
              
            </div>

            <div>
              <label class="block text-sm font-medium mb-1"
                >Coment </label
              >
              <textarea
                v-model="form.message"
                rows="5"
                required
                class="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-transparent"
                placeholder="Ceritakan Pengalaman, Masukan, dan Saranmu ..."
              ></textarea>
            </div>

            <div class="flex items-center gap-3 flex-wrap">
              <!-- Kirim ke WhatsApp -->
              <button
                type="button"
                @click="sendWhatsappPrefilled"
                class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium shadow">
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
</template>

<script setup>
import { ref } from "vue";
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

const form = ref({
  name: "",
  email: "",
  message: ""
})

const status = ref({ message: "", ok: false })

function onSubmit() {
  status.value = {
    message: "Coment berhasil dikirim!",
    ok: true
  }
  form.value = { name: "", email: "", message: "" }
}

function sendWhatsappPrefilled() {
  const text = `Halo, saya ${form.value.name}. 
Email: ${form.value.email}
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
