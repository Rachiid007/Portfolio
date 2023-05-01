<template>
  <div class="container">
    <div class="presentation">
      <h1 class="hello">
        {{ $t('presentation.hello') }} <span class="wave">👋</span> {{ $t('presentation.i_am') }}
      </h1>
      <h1 class="name">Rachid</h1>
      <h2 class="position">{{ $t('presentation.position') }}</h2>
      <a class="button-custom" aria-current="page" href="#contact">{{
        $t('presentation.contact_me')
      }}</a>
    </div>
    <div class="my-image">
      <img src="@/assets/Rachid-photo.png" alt="M. Abderrachid BELLAALI" />
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  min-height: 500px;
  font-family: 'Ubuntu', sans-serif;
}

.presentation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 50%;
  padding: 0;
  margin: 0;
}

.hello {
  font-size: clamp(30px, 7vw, 35px);
  font-weight: 600;
}

.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  font-size: 3rem;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.name {
  font-size: clamp(65px, 7vw, 95px);
  font-weight: 600;
}

.position {
  font-size: clamp(30px, 7vw, 40px);
  color: crimson;
  font-weight: 500;
  margin: 1rem 0;
}

.my-image {
  width: 50%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 50%;
}

@media only screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
  }

  .presentation {
    max-width: 100%;
    text-align: center;
  }

  .my-image {
    width: 100%;
    max-width: 375px;
  }
}
</style>
