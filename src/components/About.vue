<template>
  <article id="about">
    <h2 class="title">À propos de moi</h2>

    <div id="about-content">
      <img
        id="my-picture"
        src="@/assets/Rachid-photo.png"
        alt="M. Abderrachid BELLAALI"
      />
      <section id="bibliography">
        <h2 class="text">
          Je suis Abderrachid BELLAALI et je suis un
          <strong class="typing-2">Développeur</strong>.
        </h2>
        <p>Etudiant passionné par le développement, je bénéficie d'une expérience pratique en développement back et front acquise lors de divers projets et formations.</p>
        <div id="mettre-ici"></div>
        <a
          class="button-custom"
          href="https://ephec-my.sharepoint.com/:b:/g/personal/he201942_students_ephec_be/EblZhWvzwsJPvEny1pIGWv8Bjx7MX_GihEpuqaNDEUTVHQ?e=b1O12r"
          target="_blank"
          ><i class="fa-solid fa-download"></i> Télécharger mon CV</a
        >
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
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
}
#bibliography .text strong {
  color: crimson;
}
#bibliography p {
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
