<template>
  <div class="flex flex-col w-full py-4 gap-4">
    <div v-if="title" class="title-text font-bold" v-html="title" />

    <div v-for="(text, index) in texts" :key="index" class="body-text" v-html="text" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  texts?: string[];
}>();
</script>

<style scoped></style>
