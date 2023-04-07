<template>
  <div id="container">
    <div id="prensentation" class="child">
      <h1 id="text-1">
        {{ $t('presentation.hello') }} <span id="hand">👋</span> {{ $t('presentation.i_am') }}
      </h1>
      <h1 id="text-2">Rachid</h1>
      <h1 id="text-3">
        <strong>{{ $t('presentation.position') }}</strong>
      </h1>
      <a class="button-custom" aria-current="page" href="#contact">{{
        $t('presentation.contact_me')
      }}</a>
    </div>
    <div class="child">
      <img id="my-picture" src="@/assets/Rachid-photo.png" alt="M. Abderrachid BELLAALI" />
    </div>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
  width: 100%;
  min-height: 500px;
  font-family: 'Ubuntu', sans-serif;
}

#prensentation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
}

.child {
  width: calc(50% - 30px);
}

#text-1 {
  font-size: clamp(30px, 7vw, 35px);
}
#text-2 {
  font-size: clamp(65px, 7vw, 90px);
  font-weight: 600;
  margin-left: -3px;
}
#text-3 {
  font-size: clamp(30px, 7vw, 40px);
}
#text-3 strong {
  color: crimson;
  font-weight: 500;
}

#hand {
  font-size: 45px;
}

#my-picture {
  max-width: min(100%, 500px);
  object-fit: cover;
  border-radius: 50%;
  /* box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2); */
}

@media only screen and (max-width: 768px) {
  #container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .child {
    width: 100%;
  }

  #my-picture {
    max-width: 300px;
  }
}
</style>
