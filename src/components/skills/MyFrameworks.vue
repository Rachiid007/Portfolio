<script setup lang="ts">
import ProgressBarSkill from './ProgressBarSkill.vue'
</script>
<template>
  <div id="frameworks">
    <h2 class="sub-title">My programming languages</h2>
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
        <progress-bar-skill :level="70" />
      </div>
      <div class="child">
        <img alt="HTML5 and CSS3 logo" class="logo" src="@/assets/skills/html5_and_css3.svg" />
        <h1 class="name">HTML/CSS</h1>
        <progress-bar-skill :level="80" />
      </div>
    </div>
    <h2 class="sub-title">My framework</h2>
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
        <img alt="Linux logo" class="logo" src="@/assets/skills/linux.svg" />
        <p class="name">Linux</p>
        <progress-bar-skill :level="70" />
      </div>
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
    </div>
  </div>
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
  background-color: #6d6969;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.child:hover {
  transform: translateY(-5px);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
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
}
</style>
