<script setup>
import { ref } from 'vue';
import ProgressIndicator from "./ProgressIndicator.vue";
import { useDark, useToggle } from '@vueuse/core'

const isMobile = ref(false);

const toggleActiveMenu = () => {
  isMobile.value = !isMobile.value;
}

// is user prefers dark theme
const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  valueDark: 'darkMode',
  valueLight: '',
})
const toggleDark = useToggle(isDark)

const listLinks = [
  {
    name: 'About',
    path: '#about'
  },
  {
    name: 'Skills',
    path: '#skills'
  },
  {
    name: 'Validations',
    path: '#validations'
  },
  {
    name: 'Contact',
    path: '#contact'
  }
];

</script>

<template>
  <header id="header" :class="{ active: isMobile }">
    <div class="max-width" id="navbar-content">
      <a href="#" aria-label="visit homepage" aria-current="page" id="myLogo">
        <img src="@/assets/logo.svg" alt="logo" />
      </a>
      <nav id="navbar">
        <a v-for="(link, index) in listLinks" :key="index" :href="link.path" @click="toggleActiveMenu" aria-current="page">
          {{ link.name }}
        </a>
        <div id="theme">
          <input
            @change="toggleDark()"
            type="checkbox"
            class="checkbox"
            id="checkbox"
          />
          <label for="checkbox" class="label">
            <i class="fa-solid fa-moon"></i>
            <i class="fa-solid fa-sun"></i>
            <div class="ball"></div>
          </label>
        </div>
      </nav>

      <i id="bars" @click="toggleActiveMenu" :class="{ active: isMobile }" class="fa-solid fa-bars fa-2xl"></i>
    </div>
    <ProgressIndicator />
  </header>
</template>

<style scoped>
#header img {
  width: 150px;
  height: auto;
  margin: 0;
  padding: 0;
  object-fit: cover;
}

/* NAVBAR */
#header {
  background-color: #292e8c;
  color: white;
  position: fixed; /* sticky */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.3s ease;
}

#navbar-content {
  padding-top: 5px;
  padding-bottom: 5px;
}

#header .max-width {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#navbar {
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
}

#navbar a {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-left: 25px;
  transition: color 0.3s ease;
}

#navbar a:hover {
  color: crimson;
}

.checkbox {
  opacity: 0;
  position: absolute;
}

.label {
  width: 42px;
  height: 20px;
  background-color: black;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  position: relative;
  transform: scale(1.5);
}

.ball {
  width: 18px;
  height: 18px;
  background-color: white;
  position: absolute;
  /* top: 0;
  left: 0; */
  border-radius: 50%;
  transition: transform 0.2s linear;
}

/*  target the element after the label*/
.checkbox:checked + .label .ball {
  transform: translateX(21px);
}

.fa-moon {
  color: pink;
}

.fa-sun {
  color: yellow;
}


#bars {
  display: none;
}

/* TABLET */
@media screen and (min-width: 601px) and (max-width: 1280px) {
  #navbar {
    width: calc(100% - 140px);
    justify-content: flex-end;
    gap: 0 27px; /* row-gap column gap */
  }

  #navbar a {
    margin-left: 0;
  }

  #myLogo {
    width: 140px;
  }
}

/* SMARTPHONE */
@media (max-width: 601px) {
  #navbar {
    position: fixed;
    height: 100%;
    width: 100vw;
    left: -100%;
    top: 0;
    /* background-color: rgb(60, 30, 94); */
    background: rgb(2,0,36);
    background: linear-gradient(176deg, rgba(2,0,36,0.9587185215883228) 0%, rgba(132,45,175,1) 50%, rgba(0,78,255,1) 100%);

    padding-top: 50px;
    transition: all 0.8s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .active #navbar {
    /* left: -20%; */
    left: 0;
  }

  #navbar a {
    margin: 10px 0;
    font-size: 24px;
  }
  #bars {
    display: block;
    z-index: 999;
  }

  .active #bars:before {
    content: "\f00d";
  }

  #header .max-width {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #myLogo {
    width: 120px;
    z-index: 999;
  }

  #theme {
    position: absolute;
    bottom: 5%;
  }
}

</style>
