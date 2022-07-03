<script>
export default defineComponent({
  async setup() {
    const SCRAPER = `https://web.scraper.workers.dev/?url=`;
    const domain = "https://tennis.nl";
    const target = "/alles-over-tennis/beachtennis/toernooien";

    const [{ data: response }] = await Promise.all([
      useFetch(
        `${SCRAPER + domain + target}/&selector=.c-list-stack__button&attr=href`
      ),
    ]);

    return {
      response,
      domain,
    };
  },
});
</script>

<template>
  <header>
    <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
      <a :href="domain + response.result">View Tournaments Calendar</a>
    </button>
  </header>
</template>
