<template>
  <div class="w-full py-16">
    <UContainer class="flex justify-center items-center w-full gap-4">
      <div
        v-for="(tab, index) in timeTabs"
        @click="handleTabSelection(tab.value, tab.ref)"
        :key="index"
        class="relative w-1/3"
      >
        <nuxt-img
          :src="tab.imageSrc"
          :alt="tab.alt"
          class="w-full grayscale brightness-70 cursor-pointer hover:brightness-100 hover:grayscale-0 transition-all duration-300"
          width="600"
          height="600"
        />

        <div class="absolute bottom-1/20 left-1/2 transform -translate-x-1/2 body-text text-white">
          {{ tab.label }}
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:currentTab"]);

const timeTabs = [
  {
    value: "past",
    label: "Passado",
    alt: "Time Tab Card (Past)",
    ref: "past-content",
    imageSrc: "/images/background-past.webp",
  },

  {
    value: "present",
    label: "Presente",
    alt: "Time Tab Card (Present)",
    ref: "present-content",
    imageSrc: "/images/background-present.webp",
  },

  {
    value: "future",
    label: "Futuro",
    alt: "Time Tab Card (Future)",
    ref: "future-content",
    imageSrc: "/images/background-future.webp",
  },
];

async function handleTabSelection(selectedTabValue: string, selectedTabRef: string) {
  emit("update:currentTab", selectedTabValue);

  await nextTick();

  const selectedTabElement = document.querySelector(`#${selectedTabRef}`);

  if (selectedTabElement) selectedTabElement.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped></style>
