<template>
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">

    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />

    <div class="w-80">
      <h1 class="text-5xl font-bold">Beachtennis is een sport voor iedereen!</h1>
      <p class="py-6">Tennissen op het strand met je voeten in het zand. Doe je mee?</p>
    <button class="btn btn-primary" @click="scroll('play')">Speel mee</button>
      </div>
  </div>
</div>
</template>

<script>
export default{
    methods: {
        scroll(id) {
            document.getElementById(id).scrollIntoView({
                behavior: "smooth"
            })
        }
    }
}
</script>