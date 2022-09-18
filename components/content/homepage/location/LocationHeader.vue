<template>
  <div class="hero bg-base-300">
    <div class="container m-auto py-8 md:px-40">
      <img :src="image" />
      <h1 v-if="name" class="font-semibold text-2xl pt-10 px-10 md:px-0">{{name}}</h1>       
        <h3 v-if="quote" class="text-m italic p-10 md:px-0">"{{quote}}"</h3>
        <div class="card-actions justify-end px-10">
          <div v-if="tag" class="badge badge-secondary">{{ tag }}</div>
          <div
              v-for="badge in badges"
              :key="badge.name"
              class="badge badge-outline">
              <a>{{ badge.name }}</a>
           </div>
        </div>
        <slot/>
      </div>
  </div>
</template>

<script>
export default {
  name: "LocationContainer",
  props: ["name", "quote", "tag", "badges", "image"]
}
</script>

<style>

</style>