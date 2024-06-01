<script setup lang="ts">
// TODO: Split the component + add SQL skills

import ProgressBarSkill from './ProgressBarSkill.vue'
</script>

<template>
  <article id="skills" ref="skillsContent">
    <h2 id="test-skills" ref="skillsPos" class="title">
      {{ $t('skills.title') }}
    </h2>
    <h2 class="sub-title">{{ $t('skills.programming_languages') }}</h2>
    <div class="container">
      <div class="child">
        <img
          alt="JavaScript and TypeScript logo"
          class="logo"
          src="@/assets/skills/js_and_ts.svg"
        />
        <p class="name">JavaScript/TypeScript</p>
        <progress-bar-skill :level="80" />
      </div>
      <div class="child">
        <img alt="Python logo" class="logo" src="@/assets/skills/python.svg" />
        <h1 class="name">Python</h1>
        <progress-bar-skill :level="60" />
      </div>
      <div class="child">
        <img alt="HTML5 and CSS3 logo" class="logo" src="@/assets/skills/html5_and_css3.svg" />
        <h1 class="name">HTML/CSS</h1>
        <progress-bar-skill :level="80" />
      </div>
    </div>
    <h2 class="sub-title">Framework</h2>
    <div class="container">
      <div class="child">
        <img alt="Vue logo" class="logo" src="@/assets/skills/vue.svg" />
        <p class="name">Vue.js</p>
        <progress-bar-skill :level="80" />
      </div>
      <div class="child">
        <img alt="Angular logo" class="logo" src="@/assets/skills/angular.svg" />
        <h1 class="name">Angular</h1>
        <progress-bar-skill :level="65" />
      </div>
    </div>
    <h2 class="sub-title">DevOps</h2>
    <div class="container">
      <div class="child">
        <img alt="git logo" class="logo" src="@/assets/skills/git.svg" />
        <p class="name">Git</p>
        <progress-bar-skill :level="80" />
      </div>
      <div class="child">
        <img alt="Docker logo" class="logo" src="@/assets/skills/docker.png" />
        <h1 class="name">Docker</h1>
        <progress-bar-skill :level="75" />
      </div>
      <div class="child">
        <img alt="Kubernetes logo" class="logo" src="@/assets/skills/k8s.svg" />
        <h1 class="name">Kubernetes</h1>
        <progress-bar-skill :level="40" />
      </div>
      <div class="child">
        <img alt="GitHub Action logo" class="logo" src="@/assets/skills/github-action.svg" />
        <h1 class="name">GitHub Action</h1>
        <progress-bar-skill :level="60" />
      </div>
    </div>
    <h2 class="sub-title">{{ $t('skills.System_administration') }}</h2>
    <div class="container">
      <div class="child">
        <img alt="Linux logo" class="logo" src="@/assets/skills/linux.svg" />
        <p class="name">Linux</p>
        <progress-bar-skill :level="60" />
      </div>
      <div class="child">
        <img alt="Windows logo" class="logo" src="@/assets/skills/windows.svg" />
        <h1 class="name">Windows Server</h1>
        <progress-bar-skill :level="75" />
      </div>
      <!-- <div class="child">
        <img alt="Cisco logo" class="logo" src="@/assets/skills/cisco.svg" />
        <h1 class="name">Cisco</h1>
        <progress-bar-skill :level="60" />
      </div> -->
    </div>
  </article>
</template>

<style scoped>
.sub-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
}

.container {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 0 auto;
  grid-gap: 2rem;
}

.child {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 200px;
  padding: 1rem;

  border-radius: 5px;
  --border-size: 3px;
  --border-angle: 0turn;
  color: #fff;
  background-image: conic-gradient(from var(--border-angle), #213, #112 50%, #213),
    conic-gradient(from var(--border-angle), transparent 20%, #08f, #f03);
  background-size: calc(100% - (var(--border-size) * 2)) calc(100% - (var(--border-size) * 2)),
    cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-animation: bg-spin 3s linear infinite;
  animation: bg-spin 7s linear infinite;
  animation-play-state: paused; /* l'animation est en pause par défaut */
}
@-webkit-keyframes bg-spin {
  to {
    --border-angle: 1turn;
  }
}
@keyframes bg-spin {
  to {
    --border-angle: 1turn;
  }
}
.child:hover {
  animation-play-state: running; /* l'animation reprend lorsqu'on survole la boite */
}

@property --border-angle {
  syntax: '<angle>';
  inherits: true;
  initial-value: 0turn;
}

.logo {
  margin: 0 auto;
  height: 70px;
  max-height: 80px;
  object-fit: contain;
}

.name {
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
  background: none;
}

/* body.darkMode {
  --border-color: #fff;
  color: #fff;
} */
</style>
