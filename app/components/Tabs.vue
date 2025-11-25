<template>
  <UContainer class="flex flex-row justify-center py-8 gap-2.5">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      class="flex items-center title-text font-bold gap-2.5 text-[#A9A9A9]"
    >
      <div
        @click="handleTabSelection(tab.value)"
        :class="{ 'text-black': modelValue == tab.value }"
        class="transition-all duration-50 will-change-transform hover:scale-105 cursor-pointer"
      >
        {{ tab.label }}
      </div>

      <Icon v-if="index != tabs.length - 1" name="material-symbols:chevron-right" />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const modelValue = defineModel<string>("currentTab", {
  type: String,
  required: true,
});

const tabs = [
  {
    value: "past",
    label: "Passado",
  },
  {
    value: "present",
    label: "Presente",
  },
  {
    value: "future",
    label: "Futuro",
  },
];

function handleTabSelection(selectedTabValue: string) {
  if (modelValue.value !== selectedTabValue) modelValue.value = selectedTabValue;
}
</script>

<style scoped></style>
