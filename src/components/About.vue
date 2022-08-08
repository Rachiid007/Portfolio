<template>
  <article id="about">
    <h2 class="title">À propos de moi</h2>

    <div id="about-content">
      <img
        id="my-picture"
        src="@/assets/Rachid_removeBg.png"
        alt="M. Abderrachid BELLAALI"
      />
      <section id="bibliography">
        <h2 class="text">
          Je suis Abderrachid BELLAALI et je suis un
          <strong class="typing-2">Développeur</strong>.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut
          voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam
          voluptatem nisi delectus. Facere explicabo hic minus accusamus alias
          fuga nihil dolorum quae.
        </p>
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

<script>
export default {
  name: "About",
};
</script>

<style scoped>
#about-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

#my-picture {
  min-width: 270px;
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
</style>
