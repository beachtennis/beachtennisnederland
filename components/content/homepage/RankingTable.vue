<template>
  <table class="table w-full mb-10">
    <!-- head -->
    <thead>
      <tr>
        <th>Plaats</th>
        <th>Naam</th>
        <th>Punten totaal</th>
        <th>Punten ITF</th>
        <th>Punten nationaal</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr v-for="player in players" :key="player">
        <th>{{ player.position }}</th>
        <td>{{ player.name }}</td>
        <td>{{ player.total }}</td>
        <td>{{ player.itf }}</td>
        <td>{{ player.national }}</td>
      </tr>
    </tbody>
  </table>
   <NuxtLink :to="to"><button class="btn btn-primary">Zie volledige ranglijst</button></NuxtLink>
</template>

<script>
export default {
  name: "RankingTable",
  props: ["players", "title", "to"],
};
</script>

<style></style>
