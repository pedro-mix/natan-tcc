<template>
  <div class="w-full">
    <div v-if="data.leftImage"></div>

    <div v-if="data.fullImage"></div>

    <div v-if="data.rightImage" class="flex items-center w-full gap-16">
      <div class="flex flex-col w-1/2">
        {{ data.leftText }}
      </div>

      <div class="flex flex-col w-1/2 gap-1">
        <nuxt-img
          :src="data.rightImage"
          :alt="data.alt"
          class="w-full max-w-[500px] aspect-square h-auto object-cover"
        />

        <div class="flex flex-col small-text">
          <div>Legenda: {{ data.subtitle }}</div>

          <div>Créditos: {{ data.credits }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    alt: string;
    subtitle: string;
    credits: string;

    leftImage?: string;
    fullImage?: string;
    rightImage?: string;

    leftText?: string;
    rightText?: string;
  };
}>();
</script>

<style scoped></style>
