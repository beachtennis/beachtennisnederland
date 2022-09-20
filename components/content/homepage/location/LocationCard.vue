<template>
  <div
    class="card bg-base-100 w-80 dark:bg-base-300 shadow-xl hover:scale-105 hover:shadow-2xl focus-within:scale-105 transition duration-200 ease-in-out">
      <figure> 
        <img v-if="location.image" :src="location.image" class="bg-base-200 min-h-[70px] py-5" />
        <img v-else src="https://placeimg.com/400/125/arch" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ location.name }}
          <div class="badge badge-secondary">{{ location.tag }}</div>
        </h2>
        <p>
          {{ location.description }}
        </p>
        <div class="card-actions justify-end">
          <div
            v-for="badge in location.badges"
            :key="badge.name"
            class="badge badge-outline">
            <a>{{ badge.name }}</a>
          </div>
        </div>
        <NuxtLink :to="to" class="link hover:text-sky-700">Meer informatie</NuxtLink  >
      </div>
  </div>
</template>

<script>
export default {
  name: "LocationCard",
  props: ["location", "to"],
};
</script>