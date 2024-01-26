<script setup lang="ts">
import { ref } from 'vue'

const formInfos = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const showMessage = ref(false)

const isFormComplete = () => {
  const { name, email, subject, message } = formInfos.value

  if (name && email && subject && message) {
    showMessage.value = true
  } else {
    showMessage.value = false
  }
}

// const contactPos = ref(null)

// const contactContent = ref(null)
// resiveScrollspy(3, contactContent, contactPos)
</script>

<template>
  <article id="contact" ref="contactContent">
    <h2 ref="contactPos" class="title">
      {{ $t('contact.title') }}
    </h2>

    <div id="contact-content">
      <!-- infos contact -->
      <section class="column left" role="region">
        <h3 class="text">{{ $t('contact.infos.contactDetails') }}</h3>

        <div id="contact-infos">
          <div class="row">
            <i class="fa-solid fa-user fa-lg"></i>
            <div class="sub-title">Abderrachid BELLAALI</div>
          </div>

          <div class="row">
            <i class="fa-solid fa-location-dot fa-lg"></i>
            <address class="sub-title">{{ $t('contact.infos.city') }}</address>
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

          <div id="icons-social-network" class="row">
            <a href="https://www.linkedin.com/in/abderrachid-bellaali/" target="_blank">
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
      <section class="column right" role="region">
        <h3 class="text">{{ $t('contact.sendMessage') }}</h3>

        <form action="#" role="form">
          <div class="fields">
            <div class="field name">
              <input
                id="name"
                v-model.trim="formInfos.name"
                name="name"
                type="text"
                :placeholder="$t('contact.name')"
                required
              />
            </div>
            <div class="field email">
              <input
                id="email"
                v-model.trim="formInfos.email"
                name="email"
                type="email"
                :placeholder="$t('contact.email')"
                required
              />
            </div>
          </div>
          <div class="field">
            <input
              id="subject"
              v-model.trim="formInfos.subject"
              name="subject"
              type="text"
              :placeholder="$t('contact.subject')"
              required
            />
          </div>
          <div class="field textarea">
            <textarea
              id="message"
              v-model.trim="formInfos.message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div>
            <button @click.prevent="isFormComplete" class="button-custom" type="submit">
              {{ $t('contact.send') }}
            </button>
          </div>
          <div v-if="showMessage">
            Please email me at my address because there is currently a problem with the server!
          </div>
        </form>
      </section>
    </div>
  </article>
</template>

<style scoped>
#contact-content {
  display: grid;
  width: 100%;
  grid-template-areas: 'infos vertical-line form';
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
  padding: 10px 15px;
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
    grid-template-areas:
      'infos'
      'form';
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
