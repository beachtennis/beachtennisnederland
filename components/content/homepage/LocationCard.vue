<template>
  <div
    class="card w-80 min-w-80 bg-base-100 dark:bg-base-300 shadow-xl hover:bg-base-200 focus-within:bg-base-200 cursor-pointer">
      <NuxtLink :to="to">
      <figure>
        <img src="https://placeimg.com/400/225/arch" />
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
      </div>
      </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "LocationCard",
  props: ["location", "to"],
};
</script>