<template>
  <footer id="footer" role="contentinfo">
    <p>
      {{ $t('footer.created') }}
      <a aria-current="page" href="#">Abderrachid BELLAALI</a>
      |
      <i class="fa-solid fa-copyright"></i>
      2022 {{ $t('footer.rights') }}.
    </p>
  </footer>
</template>

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

@media screen and (max-width: 768px) {
  footer p {
    font-size: 14px;
  }
}
</style>
