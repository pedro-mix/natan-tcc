<template>
  <div class="w-full">
    <UContainer class="flex flex-col gap-4">
      <SectionTitle :title="sectionTitle.title" :subtitle="sectionTitle.subtitle" />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const sectionTitle = {
  title: "As Muitas Histórias de Maria Rosalina: <br> do Passado ao Presente",
  subtitle: "É preciso uma aldeia para se educar uma criança, <br> e muitas crianças para criar uma aldeia",
};
</script>

<style scoped></style>
