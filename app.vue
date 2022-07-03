<script>
export default {
  data() {
    return {
      showTopMenu: false,
    };
  },
};
</script>

<template>
  <div class="bg-gray-100 w-screen p-2 shadow-lg">
    <ContentNavigation v-slot="{ navigation }">
      <!-- Desktop Navbar items -->
      <ul class="hidden md:flex gap-3 items-center">
        <li
          class="hover:underline"
          v-for="link of navigation"
          :key="link._path"
        >
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>

      <!-- Mobile Navbar button -->
      <div class="md:hidden flex items-center">
        <button
          class="outline-none mobile-menu-button"
          @click="showTopMenu = !showTopMenu"
        >
          <svg
            class="w-6 h-6 text-gray-500 transform transition-transform duration-300 ease-in-out"
            :class="showTopMenu ? 'rotate-180' : 'rotate-0'"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Navbar items -->
      <ul
        class="flex md:hidden flex-col gap-3 items-center space-x-1"
        v-if="showTopMenu"
        @click="showTopMenu = !showTopMenu"
      >
        <li class="text-lg" v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  box-sizing: auto;
  margin: 0;
}
pre {
  background: #eee;
  padding: 10px;
  border-radius: 5px;
}
</style>
