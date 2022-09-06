<script setup>
const aboutPos = ref(null)

// scrollspy('about', aboutPos)

const aboutContent = ref(null)
resiveScrollspy(0, aboutContent, aboutPos)
</script>

<template>
  <article id="about" ref="aboutContent">
    <h2 class="title" ref="aboutPos">{{ $t('about.title') }}</h2>

    <div id="about-content">
      <img id="my-picture" src="@/assets/Rachid-photo.png" alt="M. Abderrachid BELLAALI" />
      <section id="bibliography" role="region">
        <h2 class="text">
          {{ $t('about.subTitle') }}
        </h2>
        <p>
          {{ $t('about.bigText') }}
        </p>
        <div id="mettre-ici"></div>
        <NuxtLink class="button-custom" to="https://ephec-my.sharepoint.com/:b:/g/personal/he201942_students_ephec_be/EblZhWvzwsJPvEny1pIGWv8Bjx7MX_GihEpuqaNDEUTVHQ?e=b1O12r"
          target="_blank"><i class="fa-solid fa-download"></i> {{ $t('about.download_cv') }}
        </NuxtLink>
      </section>
    </div>
  </article>
</template>

<style scoped>
#about-content {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 0;
}

#my-picture {
  min-width: 240px;
  /* max-width: 350px; */
  width: 35%;
  height: auto;
  object-fit: cover;
}

#bibliography {
  /* min-width: 400px;*/
  /* max-width: 700px; */
  width: 65%;
}

#bibliography .text {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}
#bibliography .text strong {
  color: crimson;
}
#bibliography p {
  font-size: 18px;
  text-align: justify;
  margin-bottom: 15px;
}

@media screen and (max-width: 601px) {
  #about-content {
    flex-direction: column;
  }
  #my-picture {
    width: 400px;
    margin-bottom: 20px;
  }
  #bibliography {
    width: 90%;
  }
}
</style>
