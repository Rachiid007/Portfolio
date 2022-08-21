<template>
  <div id="theme">
    <input
      @click="toggleDark()"
      v-model="ToggleSwitch"
      type="checkbox"
      class="checkbox"
      id="checkbox"
    />
    <label for="checkbox" class="label">
      <i class="fa-solid fa-moon"></i>
      <i class="fa-solid fa-sun"></i>
      <div class="ball"></div>
    </label>
  </div>
</template>
