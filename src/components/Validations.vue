<script>
import Modal from "./Modal.vue";

export default {
  name: "Validations",
  data() {
    return {
      revele: false
    };
  },
  components: {
    Modal
  },
  methods: {
    toggleModal() {
      this.revele = !this.revele;
    }
  }
};
</script>


<template>
<article id="validations">
    <h2 class="title">À Valider</h2>
    <div id="validation-content">



        <div class="container my-5">
            <modal :revele="revele" :toggleModal="toggleModal"></modal>

            <div>
                <a @click="toggleModal" id="display-table" class="button-custom trigger">Tableau récapitulatif</a>
            </div>
        </div>

    </div>
</article>
</template>

