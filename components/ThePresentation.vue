<template>
  <div id="presentation">
    <h1 id="text-1">{{ $t('presentation.title') }} <span id="hand">👋</span></h1>
    <h1 id="text-2">Rachid</h1>
    <h1 id="text-3">
      <strong>{{ $t('presentation.position') }}</strong>
    </h1>
    <a
      class="button-custom"
      aria-current="page"
      href="#contact"
      >{{ $t('presentation.contact_me') }}</a
    >
  </div>
</template>

<style scoped>
  #presentation {
    display: flex;
    height: 100vh;
    /* color: white; */
    min-height: 500px;
    font-family: 'Ubuntu', sans-serif;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }

  #presentation #text-1 {
    font-size: clamp(30px, 7vw, 35px);
  }
  #presentation #text-2 {
    font-size: clamp(65px, 7vw, 90px);
    font-weight: 600;
    margin-left: -3px;
  }
  #presentation #text-3 {
    font-size: clamp(30px, 7vw, 40px);
    margin: 5px 0;
  }
  #presentation #text-3 strong {
    color: crimson;
    font-weight: 500;
  }

  #hand {
    font-size: 45px;
  }
</style>
