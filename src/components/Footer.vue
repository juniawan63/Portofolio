<template>
  <div>
    <footer class="mt-12 mb-12 text-center text-sm text-gray-500">
      © {{ new Date().getFullYear() }} {{ property.nama }} — All rights reserved.
    </footer>
  </div>
</template>


<script setup>
const property = {
  nama: 'Galih Juniawan'
}

</script>