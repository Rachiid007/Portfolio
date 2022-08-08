<script>
export default {
  name: "MyHeader",
  data() {
    return {
      message: false,
    };
  },
  methods: {
    changeTheme() {
      document.body.classList.toggle("darkMode");
    },
  },
  props: {
    scolling: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <header id="header">
    <div class="max-width" id="navbar-content">
      <a href="#" aria-label="visit homepage" aria-current="page">
        <img src="@/assets/logo.svg" alt="logo" />
      </a>
      <nav id="navbar">
        <a aria-current="page" href="#about">About</a>
        <a aria-current="page" href="#skills">Skills</a>
        <a aria-current="page" href="#validations">Validations</a>
        <a aria-current="page" href="#contact">Contact</a>

        <div>
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
    </div>
    <div class="progress-container">
      <div class="progress-bar" id="myBar"></div>
    </div>
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
  background-color: darkblue;
  color: white;
  position: fixed; /* sticky */
  top: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.3s ease;
}

#navbar-content {
  padding: 5px 0;
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
</style>
