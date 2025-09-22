<template>
  <section class="min-h-screen bg-gray-50 text-gray-800 py-12">
    <div class="container mx-auto px-6 lg:px-20">
      <!-- Header -->
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
        <div>
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight">Hubungi Saya</h1>
          <p class="mt-2 text-zinc-950 max-w-xl">
            Untuk kerja sama, booking sesi foto, atau pertanyaan lainnya — pilih cara yang paling nyaman untukmu. 
            Saya biasanya cepat membalas via WhatsApp atau email.
          </p>
        </div>
        <div class="flex gap-3 items-center">
          <!-- WhatsApp CTA -->
          <a :href="whatsappLink" target="_blank" rel="noopener"
             class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md focus:ring-2 focus:ring-green-300 transition">
            <i class="fab fa-whatsapp"></i>
            <span class="font-semibold">WhatsApp</span>
          </a>

          <!-- Email CTA -->
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=galihjuniawan207@gmail.com"
             class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md focus:ring-2 focus:ring-blue-300 transition">
            <i class="fas fa-envelope"></i>
            <span class="font-semibold">Email </span>
          </a>
          <!-- Instagram CTA -->
          <a href="https://ig.me/all_of_jpg"
             class="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md focus:ring-2 focus:ring-red-300 transition">
            <i class="fab fa-instagram"></i>
            <span class="font-semibold">Instagram</span>
          </a>

        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Kiri: Contact form -->
        <div class="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-4">Form Kontak</h2>

          <form @submit.prevent="onSubmit" class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Nama</label>
              <input v-model="form.name" type="text" required
                     class="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-transparent"
                     placeholder="Nama lengkap" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">Email</label>
                <input v-model="form.email" type="email" required
                       class="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-transparent"
                       placeholder="email@gmail.com" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Telepon (opsional)</label>
                <input v-model="form.phone" type="tel"
                       class="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-transparent"
                       placeholder="+62 8xx" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium mb-1">Pesan / Brief</label>
              <textarea v-model="form.message" rows="5" required
                        class="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-transparent"
                        placeholder="Ceritakan kebutuhan atau konsepmu..."></textarea>
            </div>

            <div class="flex items-center gap-3">
              <button type="submit"
                      class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium shadow">
                <i class="fas fa-paper-plane"></i> Kirim Pesan
              </button>

              <!-- quick-send via WhatsApp -->
              <button type="button" @click="sendWhatsappPrefilled"
                      class="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                <i class="fab fa-whatsapp"></i>
                Kirim via WhatsApp
              </button>

              <div class="ml-auto text-sm text-gray-500">Atau hubungi langsung melalui tombol di atas</div>
            </div>

            <p v-if="status.message"
               :class="{'text-green-600': status.ok, 'text-red-600': !status.ok}"
               class="text-sm mt-2">{{ status.message }}</p>
          </form>
        </div>

        <!-- Kanan: Info, social & map -->
        <aside class="space-y-6">
          <div class="bg-white rounded-2xl shadow-lg p-5">
            <h3 class="font-semibold mb-2">Studio & Kontak</h3>
            <p class="text-sm text-gray-600">{{ studio.name }}</p>
            <p class="text-sm text-gray-600">{{ studio.address }}</p>
            
            <p class="text-sm mt-2">
              <i class="fas fa-phone text-green-600"></i>
              <a :href="whatsappLink" class="font-medium text-green-600">{{ displayPhone }}</a>
            </p>
            <p class="text-sm">
              <i class="fas fa-envelope text-blue-600"></i>
              <a :href="mailtoLink" class="font-medium text-blue-600">{{ studio.email }}</a>
            </p>
            <p class="text-sm">
              <i class="fab fa-instagram  text-red-600"></i>
              <a href="https://ig.me/all_of_jpg" class="font-medium text-red-600">{{ studio.instagram }}</a>
            </p>
  

            <div class="mt-4 flex gap-3">
              <a v-for="s in social" :key="s.name" :href="s.href" target="_blank" rel="noopener"
                 class="p-2 rounded-lg hover:bg-gray-100 transition">
                <i :class="s.icon" class="h-5 w-5"></i>
              </a>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="p-4">
              <h3 class="font-semibold mb-2">Lokasi Rumah</h3>
              <p class="text-sm text-gray-600 mb-3">Klik tombol tampilan penuh untuk membuka di Google Maps.</p>
              <div class="flex gap-2">
                <a :href="mapsLinkFull" target="_blank" rel="noopener"
                   class="flex-1 inline-flex items-center justify-center gap-2 border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50">
                  <i class="fas fa-map-marked-alt"></i> Buka di Maps
                </a>
                <button @click="toggleMap"
                        class="inline-flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50">
                  <i class="fas fa-map"></i>
                  {{ mapOpen ? 'Sembunyikan' : 'Tampilkan' }}
                </button>
              </div>
            </div>
            <div v-show="mapOpen" class="w-full h-64 sm:h-48">
              <iframe :src="studio.mapEmbed" width="100%" height="100%" class="border-0"
                      allowfullscreen loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-4 text-sm">
            <h4 class="font-semibold mb-2">Jam Operasional</h4>
            <p><i class="far fa-clock"></i> Senin – Jumat: 09:00 – 18:00</p>
            <p><i class="far fa-clock"></i> Sabtu: 10:00 – 16:00</p>
            <p><i class="far fa-clock"></i> Minggu: Tutup / By appointment</p>
          </div>
        </aside>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

// DATA STUDIO
const studio = {
  name: 'Alamat',
  address: 'Dsn. Cibarengkok, Ds. Darmaraja, Darmaraja, Sumedang',
  email: ' galihjuniawan207@gmail.com',
  instagram: ' all_of_jpg',
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1981.958746627485!2d108.0713277!3d-6.9337318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68aeb7e4b6f2e5%3A0x6f19ad6027e3e2a1!2s33G8%2BW8X%2C%20Darmaraja%2C%20Sumedang%20Regency%2C%20West%20Java%2045372%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1695043456789!5m2!1sen!2sid",
  mapsFullUrl: "https://www.google.com/maps/place/33G8%2BW8X,+Darmaraja,+Sumedang+Regency,+West+Java+45372,+Indonesia"

}

// NOMOR WA
const whatsappNumber = '6282116081198'

// FORM STATE
const form = reactive({ name: '', email: '', phone: '', message: '' })
const status = ref({ message: '', ok: false })
const mapOpen = ref(true)

// PHONE DISPLAY
const displayPhone = computed(() => {
  if (!whatsappNumber) return '—'
  return '+' + whatsappNumber.replace(/^62/, '')
    .replace(/(\d{3})(\d{3})(\d+)/, (m, a, b, c) => `62 ${a}-${b}-${c}`)
})

// LINKS
const whatsappLink = computed(() => {
  const text = encodeURIComponent('Halo, saya ingin menanyakan tentang sesi foto / kerja sama. Nama: ')
  return `https://wa.me/${whatsappNumber}?text=${text}`
})
const mailtoLink = computed(() => {
  const subject = encodeURIComponent('Permintaan Kerja Sama / Booking Foto')
  return `mailto:${studio.email}?subject=${subject}`
})
const mapsLinkFull = computed(() => studio.mapsFullUrl)

// FUNCTIONS
function toggleMap() {
  mapOpen.value = !mapOpen.value
}
function sendWhatsappPrefilled() {
  const text = `Halo, saya ${form.name}%0AEmail: ${form.email}%0ATelepon: ${form.phone}%0A%0A${encodeURIComponent(form.message)}`
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank')
}
function onSubmit() {
  if (!form.name || !form.email || !form.message) {
    status.value = { message: 'Mohon isi semua field yang wajib.', ok: false }
    return
  }
  const subject = encodeURIComponent('Booking - ' + form.name)
  const body = encodeURIComponent(`Nama: ${form.name}\nEmail: ${form.email}\nTelepon: ${form.phone}\n\nPesan:\n${form.message}`)
  window.location.href = `mailto:${studio.email}?subject=${subject}&body=${body}`
  status.value = { message: `Email disiapkan. Atau kirim langsung ke ${studio.email}`, ok: true }
}
</script>
