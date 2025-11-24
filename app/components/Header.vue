<template>
  <div class="relative w-full" style="aspect-ratio: 1440/750">
    <NuxtImg
      src="/images/header.webp"
      alt="Header BG"
      class="grayscale absolute inset-0 w-full h-full object-cover z-0"
      width="1440"
      height="750"
    />

    <UContainer
      class="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center gap-4 z-10 text-white"
    >
      <div class="mega-title-text font-bold">Maria Rosalina</div>

      <div class="body-text">Passado, Presente e Futuro da Comunidade Quilombola de Araranguá</div>
    </UContainer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
