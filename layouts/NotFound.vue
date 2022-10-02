<template>
  <div id="container">
    <h1>Oops!</h1>
    <p>
      <strong>404</strong>
      <br />
      {{ $t('404.text') }}. <span id="emoji">🧐</span>
    </p>
    <p>
      <NuxtLink to="/">
        <button class="button-custom">
          <i class="fas fa-home"></i> <span>{{ $t('404.link') }} </span>
        </button>
      </NuxtLink>
    </p>
  </div>
</template>

<style scoped>
  #container {
    text-align: center;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #container h1 {
    font-size: 2.5rem;
  }

  #container p {
    font-size: 1.5rem;
  }

  #container strong {
    font-weight: bold;
    font-size: 3rem;
  }

  #emoji {
    font-size: 3rem;
  }

  #container button {
    margin-top: 20px;
  }
</style>
