<template>
  <div class="min-h-screen md:max-w-3xl lg:max-w-6xl m-auto" id="play">
    <h1 class="font-semibold text-3xl px-10 py-10">Locaties</h1>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-16 mb-10"
    >
      <ContentList
        :query="{ where: { _path: { $ne: '/locaties' } } }"
        path="/locaties"
        v-slot="{ list }"
      >
        <LocationCard
          v-for="location in list"
          :key="location._path"
          :location="{
            name: location.name,
            description: location.description,
            tag: location.tag,
            badges: location.badges,
          }"
          :to="location._path"
        >
        </LocationCard>
      </ContentList>
    </div>
  </div>
</template>
