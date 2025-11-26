<template>
  <div class="w-full py-8">
    <UContainer class="flex flex-col gap-4">
      <SectionTitle :title="sectionTitle.title" :subtitle="sectionTitle.subtitle" />

      <SectionImageContainer :data="firstImage" />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const sectionTitle = {
  title: "As Muitas Histórias de Maria Rosalina: <br> do Passado ao Presente",
  subtitle: "É preciso uma aldeia para se educar uma criança, <br> e muitas crianças para criar uma aldeia",
};

const firstImage = {
  alt: "Foto de Maria Gorete sorrindo em sua casa, vestida com uma blusa com rosas e tubo respiratório no nariz.",
  subtitle: "Maria Gorete",
  credits: "Há Vida Por Detrás do Muro",
  rightImage: "/images/past01.webp",
  leftText:
    "Para Maria Gorete, “crescer foi muito bom”. Ela relembra os dias de brincadeira, quando ela e outros jovens subiam nas goiabeiras de onde moravam. “A mãe chamava por uma porta e nós entrava pela outra, senão o pai pegava nós pela orelha”.",
};
</script>

<style scoped></style>
