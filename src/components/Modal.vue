<script>
  import TableRecap from "./TableRecap.vue";

  export default {
  name: "Modal",
  props: [ "revele", "toggleModal" ],
  components: {
    TableRecap
  },
  };
</script>


<template>
  <div class="bloc-modal" v-if="revele">
    <div class="overlay" @click="toggleModal"></div>

    <div class="modal card">
      <div @click="toggleModal" class="btn-modal">X</div>
      <TableRecap />
    </div>
  </div>
</template>

<style scoped>
  .bloc-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background-color: #fff;
    z-index: 2;
  }
  .btn-modal {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    background-color: #fff;
    z-index: 2;
  }

</style>