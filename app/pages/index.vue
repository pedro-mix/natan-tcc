<template>
  <div class="flex flex-col h-full w-full overflow-y-auto nice-scrollbar">
    <Header />

    <TimeTabsCards />

    <div class="w-full py-20 bg-black">
      <UContainer class="text-center bigger-body-text text-white">
        Esta reportagem digital é dedicada aos moradores da Comunidade Remanescente de Quilombo Maria
        Rosalina. Todos os agradecimentos vão a eles e a todos os envolvidos na apuração. Produzido para o
        Trabalho de Conclusão de Curso do Semestre 2025.2 do Curso de Jornalismo da Universidade Federal de
        Santa Catarina por Natan Batista Balthazar com orientação da professora Isabel Colucci Coelho.
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
