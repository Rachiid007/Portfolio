<script setup lang="ts">
import TheHeader from '@/components/header/TheHeader.vue'
import ThePresentation from '@/components/ThePresentation.vue'
import TheAbout from '@/components/TheAbout.vue'
import TheSkills from '@/components/skills/TheSkills.vue'
import TheActivities from '@/components/activities/TheActivities.vue'
import TheContact from '@/components/TheContact.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div>
    <TheHeader />
    <main class="max-width" role="main">
      <ThePresentation />
      <TheAbout />
      <TheSkills />
      <TheActivities />
      <TheContact />
    </main>
    <TheFooter />
  </div>
</template>
