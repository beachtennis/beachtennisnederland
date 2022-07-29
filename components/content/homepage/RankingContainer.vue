<template>
  <div class="hero bg-base-200">
    <div class="container m-auto">
      <h1 class="font-semibold text-3xl py-10">Ranglijst</h1>
      <div class="tabs tabs-boxed">
        <a class="tab" :class="{ 'tab-active': activeHeren }" :bind="activeHeren" @click="activeHeren = true">Heren</a> 
        <a class="tab" :class="{ 'tab-active': !activeHeren }" :bind="!activeHeren" @click="activeHeren = false">Vrouwen</a> 
    </div>
      <RankingTable :players="men" to="/ranglijst/heren" v-if="activeHeren"/>
      <RankingTable :players="women" to="/ranglijst/vrouwen" v-else/>
    </div>
  </div>
</template>

<script setup>
const fetchData = new Promise((resolve, reject) => {
  import("~/assets/ranglijst_heren.json")
    .then((res) => res.default)
    .then((res) => resolve(res));
});
const data = await fetchData;
const men = data.slice(0, 10);
const fetchData2 = new Promise((resolve, reject) => {
  import("~/assets/ranglijst_vrouwen.json")
    .then((res) => res.default)
    .then((res) => resolve(res));
});
const data2 = await fetchData2;
const women = data2.slice(0, 10);
</script>

<script>
export default {
  name: "RankingTable",
  data() {
    return {
        activeHeren: true
    }
  }
};
</script>

<style></style>
