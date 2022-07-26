<!-- <template>
- Smile Beachtennis Den Haag
- Beach Club Rotterdam
- BT33 Amersfoort
- Beach Club Breda
- Beach Club Huizen
- Hiltenhal Hilvarenbeek
- Black Sheep Beach Tennis School Zwolle
- Beachfabriek Nijmegen
</template> -->

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
      ],
    };
  },
});
</script>
