<template>
  <div class="flex flex-col h-full w-full overflow-y-auto nice-scrollbar">
    <Header />

    <TimeTabsCards @update:currentTab="currentTab = $event" />

    <div class="w-full py-28 bg-black">
      <UContainer class="text-center bigger-body-text text-white">
        Esta reportagem digital é dedicada aos moradores da Comunidade Remanescente de Quilombo Maria
        Rosalina. Todos os agradecimentos vão a eles e a todos os envolvidos na apuração. Produzido para o
        Trabalho de Conclusão de Curso do Semestre 2025.2 do Curso de Jornalismo da Universidade Federal de
        Santa Catarina por Natan Batista Balthazar com orientação da professora Isabel Colucci Coelho.
      </UContainer>
    </div>

    <Tabs v-model:currentTab="currentTab" />

    <ContentPast v-if="currentTab === 'past'" id="past-content" />

    <ContentPresent v-else-if="currentTab === 'present'" id="present-content" />

    <ContentFuture v-else-if="currentTab === 'future'" id="future-content" />
  </div>
</template>

<script setup lang="ts">
const currentTab = ref("past");
</script>

<style scoped>
.nice-scrollbar {
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 13px;
    background: #c5c5c6;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 13px;
    border: 1px solid transparent;
    background-clip: content-box;
    box-shadow: inset 0 0 0 7px #000000;
  }
}
</style>
