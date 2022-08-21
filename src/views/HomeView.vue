<script setup>
import TheHeader from '@/components/TheHeader.vue'
import ThePresentation from '@/components/ThePresentation.vue'
import TheAbout from '@/components/TheAbout.vue'
import TheSkills from '@/components/TheSkills.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheActivities from '@/components/TheActivities.vue'
import TheContact from '@/components/TheContact.vue'
</script>

<template>
  <TheHeader />
  <main class="max-width" role="main">
    <ThePresentation />
    <TheAbout />
    <TheSkills />
    <TheActivities />
    <TheContact />
  </main>
  <TheFooter />
</template>
