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

<script>
export default defineComponent({
  data() {
    return {
      locations: [
        {
          name: "Smile Beachtennis",
          description:
            "Everybody welcome at beachtennis in The Hague Netherlands! We love to give you a smile with this wonderful game!",
          tag: "NEW",
          badges: [{ name: "Den Haag" }, { name: "Xiringuito"}],
        },
        {
          name: "Beach Club Rotterdam",
          description: "Al 8 jaar beachvolleybal en beachtennis voor iedereen in de regio Rijnmond!",
          tag: "NEW",
          badges: [{ name: "Rotterdam" }],
        },
        {
          name: "Beachtennis Amersfoort",
          description: "Als eerste club in Nederland met 4 beachtennis velden!",
          tag: "NEW",
          badges: [{ name: "Amersfoort" }],
        },
        {
          name: "Breda Beach",
          description: "Sinds 1999 beachvolleybal, beachtennis en footvolley.",
          tag: "NEW",
          badges: [{ name: "Breda" }],
        },
        {
          name: "BeachSport Huizen",
          description: "Beachsport aan de voet van de Gooische Alpen in Huizen. Wij promoten beachsport. BeachSport Huizen. Wat je beach ook is.",
          tag: "NEW",
          badges: [{ name: "Huizen" }],
        },
        {
          name: "Hiltenhal Hilvarenbeek",
          description: "Voor al je tennis, beachvolleybal, padel en squash plezier!",
          tag: "NEW",
          badges: [{ name: "Hilvarenbeek" }],
        },
        {
          name: "Beachtennis School Zwolle",
          description: "Black Sheep Beach Tennis School",
          tag: "NEW",
          badges: [{ name: "Zwolle" }],
        },
        {
          name: "Beachfabriek Nijmegen",
          description: "365 dagen per jaar Beachsport!",
          tag: "NEW",
          badges: [{ name: "Nijmegen" }],
        },
      ],
    };
  },
});
</script>
