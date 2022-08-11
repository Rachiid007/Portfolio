<template>
  <article id="contact">
    <h2 class="title">Contact</h2>

    <div id="contact-content">
      <!-- infos contact -->
      <section class="column left">
        <h3 class="text">Mes coordonnées</h3>

        <div id="contact-infos">
          <div class="row">
            <i class="fa-solid fa-user fa-lg"></i>
            <div class="sub-title">Abderrachid BELLAALI</div>
          </div>

          <div class="row">
            <i class="fa-solid fa-location-dot fa-lg"></i>
            <address class="sub-title">
              94 Rue des Quatre-Vents<br />1080 Bruxelles
            </address>
          </div>

          <div class="row">
            <i class="fa-solid fa-envelope fa-lg"></i>
            <div class="sub-title">abderrachid.bellaali@gmail.com</div>
          </div>

          <div class="row">
            <i class="fa-solid fa-phone fa-lg"></i>
            <div class="sub-title">
              <a href="tel:+32484818944">+32 484 818 944</a>
            </div>
          </div>

          <div class="row" id="icons-social-network">
            <a
              href="https://www.linkedin.com/in/abderrachid-bellaali-753471145"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin fa-2xl"></i>
            </a>
            <a href="https://github.com/Rachiid007" target="_blank">
              <i class="fa-brands fa-github fa-2xl"></i>
            </a>
            <a href="https://twitter.com/Rachiid007" target="_blank">
              <i class="fa-brands fa-twitter fa-2xl"></i>
            </a>
          </div>
        </div>
      </section>

      <div id="vertical-line"></div>

      <!-- Formulaire -->
      <section class="column right">
        <h3 class="text">Envoyez-moi un message</h3>

        <form action="#">
          <div class="fields">
            <div class="field name">
              <input v-model="name" type="text" placeholder="Nom" required />
            </div>
            <div class="field email">
              <input v-model="email" type="email" placeholder="Email" required />
            </div>
          </div>
          <div class="field">
            <input v-model="subject" type="text" placeholder="Sujet" required />
          </div>
          <div class="field textarea">
            <textarea v-model="message" placeholder="Message..." required></textarea>
          </div>
          <div>
            <button class="button-custom" type="submit">Envoyer</button>
          </div>
        </form>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  },
};
</script>

<style scoped>
#contact-content {
  display: grid;
  width: 100%;
  grid-template-areas: "infos vertical-line form";
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 3px 2fr;
  gap: 20px;
}

#contact-content .left {
  grid-area: infos;
}

#contact-content #vertical-line {
  grid-area: vertical-line;
  background-color: crimson;
}

#contact-content .right {
  grid-area: form;
  margin-top: -20px;
}

#contact-content .text {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 15px;
  text-align: center;
}

#contact-content #contact-infos {
  all: unset;
  display: flex;
  align-items: flex-start;
  height: 235px;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
}

#contact-infos .row {
  display: flex;
  gap: 15px;
  align-items: center;
  width: 100%;
}

.row > i {
  width: 22px;
}

#contact-infos #icons-social-network {
  justify-content: space-around;
}

#icons-social-network a {
  color: crimson;
  transition: color 0.5s ease;
}

#icons-social-network a:hover {
  color: lightskyblue;
}

/* FORMULAIRE */

#contact .fields {
  display: flex;
}
#contact .field,
#contact .fields .field {
  height: 45px;
  width: 100%;
  margin-bottom: 15px;
}
#contact .textarea {
  height: 80px;
  width: 100%;
}
#contact .name {
  margin-right: 10px;
}
#contact .field input,
#contact .textarea textarea {
  height: 100%;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 6px;
  outline: none;
  padding: 0 15px;
  font-size: 17px;
  transition: all 0.3s ease;
  resize: none;
}
#contact input:focus,
#contact textarea:focus {
  border-color: #b3b3b3;
}

@media screen and (max-width: 768px) {
  #contact-content {
    grid-template-areas: "infos"
                          "form";
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    gap: 0;
  }
  #contact-content .left {
    grid-area: infos;
  }

  #contact-infos {
    width: 100%;
  }

  #vertical-line {
    display: none;
  }

  #contact-content #contact-infos {
    height: 175px;
    width: max-content;
    margin: 0 auto;
  }

  #contact-content .right {
    grid-area: form;
  }

  #contact .fields {
    flex-direction: column;
  }
}
</style>
