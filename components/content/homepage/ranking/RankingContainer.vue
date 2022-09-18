<template>
  <div class="hero bg-base-200">
    <div class="container m-auto p-10 pt-0">
      <h1 class="font-semibold text-2xl py-10">Ranglijst</h1>
      <div class="tabs tabs-boxed" v-if="amount>0">
        <a class="tab" :class="{ 'tab-active': activeHeren }" :bind="activeHeren" @click="activeHeren = true">Heren</a> 
        <a class="tab" :class="{ 'tab-active': !activeHeren }" :bind="!activeHeren" @click="activeHeren = false">Vrouwen</a> 
    </div>
      <RankingTable :players="men" to="/ranglijst/heren" v-if="activeHeren" :amount="amount"/>
      <RankingTable :players="women" to="/ranglijst/vrouwen" v-else :amount="amount"/>
    </div>
  </div>
</template>

<script setup>
const fetchMen= new Promise((resolve, reject) => {
  import("~/assets/ranglijst_heren.json")
    .then((res) => res.default)
    .then((res) => resolve(res));
});
const men = await fetchMen;

const fetchWomen = new Promise((resolve, reject) => {
  import("~/assets/ranglijst_vrouwen.json")
    .then((res) => res.default)
    .then((res) => resolve(res));
});
const women = await fetchWomen;
</script>

<script>
export default {
  name: "RankingTable",
  props: ["amount", "activeHeren"],
};
</script>

<style></style>
