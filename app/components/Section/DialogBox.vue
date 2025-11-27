<template>
  <div class="flex justify-center hover:scale-110 w-full px-8 py-12 bg-black">
    <div class="bigger-body-text max-w-4xl text-white" v-html="content" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: string;
}>();
</script>

<style scoped></style>
