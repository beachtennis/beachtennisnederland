<template>
  <div class="hero bg-base-200">
    <div class="container m-auto">
        <h1 v-if="header" class="font-semibold text-2xl p-4 px-10 md:px-40">{{header}}</h1>
        <div class="text-m p-3 px-10 md:px-40">
          <slot/>
        </div>
          
      </div>
  </div>
</template>

<script>
export default {
    name: "LocationContent",
    props: ["header", "text"],
}
</script>