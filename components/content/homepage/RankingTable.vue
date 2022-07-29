<template>
  <div class="overflow-x-auto">
    <table class="table table-compact w-full table-zebra mb-10">
      <!-- head -->
      <thead>
        <tr>
          <th>Plaats</th>
          <th>Naam</th>
          <th>Totaal</th>
          <th>ITF</th>
          <th>NL</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="player in players" :key="player">
          <td>{{ player.position }}</td>
          <td>{{ player.name }}</td>
          <td>{{ player.total }}</td>
          <td>{{ player.itf }}</td>
          <td>{{ player.national }}</td>
        </tr>
      </tbody>
    </table>
    <NuxtLink :to="to"
      ><button class="btn btn-primary">
        Zie volledige ranglijst
      </button></NuxtLink
    >
  </div>
</template>

<script>
export default {
  name: "RankingTable",
  props: ["players", "title", "to"],
};
</script>

<style></style>
