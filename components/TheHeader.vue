<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useMainStore } from '~/stores/main'

  const isMobile = ref(false)
  const isLocked = useScrollLock(document.body)

  onUpdated(() => {
    if (isMobile.value) {
      isLocked.value = true
    } else {
      isLocked.value = false
    }
  })

  const toggleActiveMenu = () => {
    isMobile.value = !isMobile.value
  }

  const listLinks = [
    {
      name: 'header.about',
      path: '#about'
    },
    {
      name: 'header.skills',
      path: '#skills'
    },
    {
      name: 'header.activities',
      path: '#activities'
    },
    {
      name: 'header.contact',
      path: '#contact'
    }
  ]

  const store = useMainStore()

  // storeToRefs lets todoList keep reactivity:
  const { posOfElems } = storeToRefs(store)

  useEventListener(window, 'scroll', handleScroll)

  const savedIndex = ref(null)
  function handleScroll() {
    const trigger = window.scrollY + window.innerHeight / 1.9

    for (const i of posOfElems.value) {
      const index = posOfElems.value.indexOf(i)

      if (trigger >= posOfElems.value[index] && trigger < posOfElems.value[index + 1]) {
        if (index !== savedIndex.value) {
          savedIndex.value = index
        }
        break
      }

      if (index === posOfElems.value.length - 1 && trigger >= posOfElems.value[index]) {
        if (index !== savedIndex.value) {
          savedIndex.value = index
        }
      }

      if (trigger < posOfElems.value[0]) {
        //! out of range psk personne a -1 donc personne aura la class 'marked'
        savedIndex.value = -1
      }
    }
  }
</script>

<template>
  <header
    id="header"
    :class="{ mobile: isMobile }"
    role="banner"
  >
    <div
      id="navbar-content"
      class="max-width"
    >
      <a
        id="myLogo"
        href="#"
        aria-label="visit homepage"
        aria-current="page"
      >
        <img
          src="@/assets/logo.svg"
          alt="logo"
        />
      </a>
      <nav
        id="navbar"
        role="navigation"
      >
        <a
          v-for="(link, index) in listLinks"
          :key="index"
          :class="{ marked: index == savedIndex }"
          :href="link.path"
          aria-current="page"
          v-on="isMobile ? { click: toggleActiveMenu } : {}"
        >
          {{ $t(link.name) }}
        </a>
      </nav>

      <div class="other">
        <DarkModeToggle />
        <LanguageSwitcher />
      </div>

      <i
        id="bars"
        :class="{ mobile: isMobile }"
        class="fa-solid fa-bars fa-2xl"
        @click="toggleActiveMenu"
      ></i>
    </div>
    <ScrollIndicator />
  </header>
</template>

<style scoped>
  #header img {
    width: 150px;
    margin: 0;
    padding: 0;
    object-fit: cover;
    flex-shrink: 0;
  }

  /* NAVBAR */
  #header {
    background-color: #292e8c;
    color: white;
    position: fixed; /* sticky */
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
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
    font-size: clamp(16px, 7vw, 20px);
    font-weight: 400;
    margin-left: 25px;
    transition: color 0.3s ease;
    white-space: nowrap;
  }

  #navbar a:hover {
    color: crimson;
  }

  #bars {
    display: none;
  }

  /* TABLET */
  @media screen and (min-width: 601px) and (max-width: 1280px) {
    #navbar {
      width: 100%;
      justify-content: flex-end;
      gap: 0 27px; /* row-gap column gap */
    }

    #navbar a {
      margin-left: 0;
    }

    /*#myLogo {
    width: 140px;
  }*/
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
      background: rgb(2, 0, 36);
      background: linear-gradient(
        176deg,
        rgba(2, 0, 36, 0.9587185215883228) 0%,
        rgba(132, 45, 175, 1) 50%,
        rgba(0, 78, 255, 1) 100%
      );

      padding-top: 50px;
      transition: all 0.8s ease;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      row-gap: 25px;
    }

    .mobile #navbar {
      /* left: -20%; */
      left: 0;
      height: 100%;
    }

    #navbar a {
      margin: 10px 0;
    }
    #bars {
      display: block;
      z-index: 999;
    }

    .mobile #bars:before {
      content: '\f00d';
    }

    #header .max-width {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    /* #myLogo {
    width: 120px;
    z-index: 999;
  } */

    #theme {
      position: absolute;
      bottom: 5%;
    }
  }

  .other {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* style when scroll

.marked {
  color: yellow !important;
  background-color: crimson !important;
}
*/
</style>
