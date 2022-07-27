<template>
  <div class="min-h-screen" id="play">
    <h1 class="font-semibold text-3xl px-10 py-10">Locaties</h1>
    <div
      class="x-10 y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 mb-10"
    >
      <LocationCard
        v-for="location in locations"
        :key="location.name"
        :location="location"
        class="card w-80 min-w-80 bg-base-100 shadow-xl"
      />
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('locations', () => $fetch('/api/locations'))
const locations = JSON.parse(data.value);
</script>