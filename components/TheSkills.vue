<script setup lang="ts">
  // const skillsPos = ref(null)

  // const skillsContent = ref(null)
  // resiveScrollspy(1, skillsContent, skillsPos)

  const mySkills: {
    name: string
    level: string
  }[] = [
    {
      name: 'JavaScript / TypeScript',
      level: '75%'
    },
    {
      name: 'Python',
      level: '70%'
    },
    {
      name: 'Linux / Git',
      level: '75%'
    },
    {
      name: 'Docker',
      level: '75%'
    },
    {
      name: 'HTML / CSS',
      level: '80%'
    },
    {
      name: 'SQL',
      level: '70%'
    }
  ]
</script>

<template>
  <article
    id="skills"
    ref="skillsContent"
  >
    <h2
      id="test-skills"
      ref="skillsPos"
      class="title"
    >
      {{ $t('skills.title') }}
    </h2>
    <div id="skills-content">
      <div
        v-for="skill in mySkills"
        :key="skill.name"
        class="bars"
      >
        <div class="info">
          <span>{{ skill.name }}</span>
          <span>{{ skill.level }}</span>
        </div>
        <div class="line">
          <div
            class="progress"
            :style="{ width: skill.level }"
          ></div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
  #skills-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 17px 20px; /* row-gap column gap */
  }

  #skills-content .bars {
    min-width: 330px;
    width: calc(50% - 20px);
  }

  #skills-content .info {
    display: flex;
    justify-content: space-between;
  }

  #skills-content span {
    font-weight: 500;
    font-size: 18px;
  }

  #skills-content .line {
    height: 15px;
    width: 100%;
    background: lightgrey;
  }
  #skills-content .progress {
    height: 100%;
    background: crimson;
  }
</style>
