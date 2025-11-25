<template>
  <div class="flex flex-col text-center w-full gap-6 py-8">
    <div class="section-title-text font-bold" v-html="props.title" />

    <div class="bigger-body-text" v-html="props.subtitle" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<style scoped></style>
