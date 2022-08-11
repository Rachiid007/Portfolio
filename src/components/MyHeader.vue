<script>
import ProgressIndicator from "./ProgressIndicator.vue";

export default {
  name: "MyHeader",
  components: {
    ProgressIndicator,
  },
  data() {
    return {
      message: false,
      progress: '',
      isMobile: true,
      isActive: false,
    };
  },
  methods: {
    updateProgressIndicator() {
      const { documentElement, body } = document;
      let windowScroll = body.scrollTop || documentElement.scrollTop;
      let height = documentElement.scrollHeight - documentElement.clientHeight;
      this.progress = (windowScroll / height) * 100 + "%";
    },
    changeTheme() {
      document.body.classList.toggle("darkMode");
    },
    toggleActiveMenu() {
      this.isActive = !this.isActive;
    },
    // handleView() {
    //   if(window.innerWidth < 768) {
    //     this.isMobile = true;
    //   } else {
    //     this.isMobile = false;
    //   }
    // }
  },
  mounted() {
    window.addEventListener("scroll", this.updateProgressIndicator);
  }
};
</script>

<template>
  <header id="header">
    <div class="max-width" id="navbar-content">
      <a href="#" aria-label="visit homepage" aria-current="page" id="myLogo">
        <img src="@/assets/logo.svg" alt="logo" />
      </a>
      <nav id="navbar" :class="{ active: isActive }">
        <a @click="toggleActiveMenu" aria-current="page" href="#about">About</a>
        <a @click="toggleActiveMenu" aria-current="page" href="#skills">Skills</a>
        <a @click="toggleActiveMenu" aria-current="page" href="#validations">Validations</a>
        <a @click="toggleActiveMenu" aria-current="page" href="#contact">Contact</a>

      <div id="theme" :class="{ active: isActive }">
          <input
            @change="changeTheme"
            v-model="message"
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
      <i id="bars" @click="toggleActiveMenu" :class="{ active: isActive }" class="fa-solid fa-bars fa-2xl"></i>
    </div>
    <ProgressIndicator id="progress" />
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
  background-color: #611f82;
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
  width: 50px;
  height: 24px;
  background-color: black;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
}

.ball {
  width: 20px;
  height: 20px;
  background-color: white;
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

/*  target the element after the label*/
.checkbox:checked + .label .ball {
  transform: translateX(25px);
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

@media (max-width: 768px) {
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
    transition: all 0.7s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  #navbar.active {
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

  #bars.active:before {
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
