<template>
  <footer id="footer">
    <p>
      Créé par <a aria-current="page" href="#">Abderrachid BELLAALI</a> |
      <i class="fa-solid fa-copyright"></i>
      2022 Tous droits réservés.
    </p>
  </footer>
</template>

<script>
export default {
  name: "MyFooter",
};
</script>

<style scoped>
footer {
  padding: 20px 0;
  text-align: center;
  margin-top: 30px;
}
footer a {
  color: crimson;
}
footer a:hover {
  color: lightskyblue;
}
</style>
