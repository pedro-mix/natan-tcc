<template>
  <div class="w-full py-20">
    <UContainer class="flex justify-center items-center w-full gap-4">
      <div class="relative w-1/3">
        <nuxt-img
          src="/images/background-past.webp"
          alt="Time Tab Card (Past)"
          class="w-full grayscale brightness-70 cursor-pointer hover:brightness-100 hover:grayscale-0 transition-all duration-300"
          width="600"
          height="600"
        />

        <div class="absolute bottom-1/20 left-1/2 transform -translate-x-1/2 body-text text-white">
          Passado
        </div>
      </div>

      <div class="relative w-1/3">
        <nuxt-img
          src="/images/background-present.webp"
          alt="Time Tab Card (Present)"
          class="w-full grayscale brightness-70 cursor-pointer hover:brightness-100 hover:grayscale-0 transition-all duration-300"
          width="600"
          height="600"
        />

        <div class="absolute bottom-1/20 left-1/2 transform -translate-x-1/2 body-text text-white">
          Presente
        </div>
      </div>

      <div class="relative w-1/3">
        <nuxt-img
          src="/images/background-future.webp"
          alt="Time Tab Card (Future)"
          class="w-full grayscale brightness-70 cursor-pointer hover:brightness-100 hover:grayscale-0 transition-all duration-300"
          width="600"
          height="600"
        />

        <div class="absolute bottom-1/20 left-1/2 transform -translate-x-1/2 body-text text-white">
          Futuro
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
