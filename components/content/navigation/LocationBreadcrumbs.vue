<template>
  <div class="text-sm breadcrumbs m-2">
  <ul>
    <li><NuxtLink to="/">Home</NuxtLink></li> 
    <li><NuxtLink to="/locations">Locaties</NuxtLink></li> 
    <li><slot/></li>
  </ul>
</div>
</template>