<script>
import TableRecap from "./TableRecap.vue";

export default {
  name: 'Validations',
  components: {
    TableRecap,
}
}
</script>

<script>

</script>

<template>
<article id="validations">
            <h2 class="title">À Valider</h2>
            <div id="validation-content">

                <div id="myBtnContainer">
                    <button id="all" class="btn active" onclick="filterSelection('all')"> Show all</button>
                    <button id="nature" class="btn" onclick="filterSelection('nature')"> Nature</button>
                    <button id="cars" class="btn" onclick="filterSelection('cars')"> Cars</button>
                    <button id="people" class="btn" onclick="filterSelection('people')"> People</button>
                </div>

                <!-- Portfolio Gallery Grid -->
                <div id="my-gallery">

                </div>

                <div>
                    <a id="display-table" class="button-custom trigger">Tableau récapitulatif</a>
                </div>
                <div class="modal">
                    <div class="modal-content">
                        <span class="close-button">×</span>

                        <!--  -->

                        <div style="overflow-x: auto;" id="content">
                            <TableRecap />
                        </div>
                        <!--  -->
                    </div>
                </div>

            </div>
        </article>
</template>