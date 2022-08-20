<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <table aria-hidden="true">
    <caption>
      {{
        t('activities.summary')
      }}
    </caption>
    <thead>
      <tr>
        <th scope="col" class="title-table">Thème</th>
        <th scope="col" class="title-table">Type d'activité</th>
        <th scope="col" class="title-table">Lieu</th>
        <th scope="col" class="title-table">Dates</th>
        <th scope="col" class="title-table">À valoriser</th>
        <th scope="col" class="title-table">Réel</th>
        <th scope="col" class="title-table">Preuve</th>
      </tr>
    </thead>

    <tbody>
      <tr class="dev-web">
        <th rowspan="2">Développement web</th>
        <td>Formation en ligne "Back End Development and APIs"</td>
        <td>FreeCodeCamp</td>
        <td>janv-22</td>
        <td>5</td>
        <td>40</td>
        <td>
          <a
            href="https://www.freecodecamp.org/certification/Rachid007/back-end-development-and-apis"
            target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </td>
      </tr>
      <tr class="dev-web">
        <td>Formation en ligne "JavaScript Algorithms and Data Structures"</td>
        <td>FreeCodeCamp</td>
        <td>juin-22</td>
        <td>5</td>
        <td>60</td>
        <td>
          <a
            href="https://www.freecodecamp.org/certification/Rachid007/javascript-algorithms-and-data-structures"
            target="_blank"
          >
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </td>
      </tr>
      <!-- Empty line -->
      <tr class="dev-mobile">
        <th>Développement mobil</th>
        <td>Formation en ligne "Développez votre première application Android"</td>
        <td>Openclassroom</td>
        <td>Août-22</td>
        <td>10</td>
        <td>20</td>
        <td>XXXX</td>
      </tr>
      <!-- Empty line -->
      <tr class="challenge">
        <th rowspan="4">Challenge</th>
        <td>Hackathon Ephec 2021</td>
        <td>Ephec</td>
        <td>nov-21</td>
        <td>5</td>
        <td>48</td>
        <td>XXXX</td>
      </tr>
      <tr class="challenge">
        <td>Hackathon Odoo 2022</td>
        <td>Odoo</td>
        <td>avr-22</td>
        <td>5</td>
        <td>48</td>
        <td>XXXX</td>
      </tr>
      <tr class="challenge">
        <td>Capture The Flag Ephec 2022</td>
        <td>Ephec</td>
        <td>Fév-22</td>
        <td>0</td>
        <td>12</td>
        <td>XXXX</td>
      </tr>
      <tr class="challenge">
        <td>Open Week 2022</td>
        <td>UCL</td>
        <td>juin-22</td>
        <td>0</td>
        <td>35</td>
        <td>XXXX</td>
      </tr>
      <!-- Empty line -->
      <tr class="conference">
        <th>Conférence</th>
        <td>DevDay 2021</td>
        <td>Cinéscope LLN</td>
        <td>23/11/2021</td>
        <td>10</td>
        <td>10</td>
        <td>XXXX</td>
      </tr>
      <!-- Empty line -->
      <tr class="job">
        <th rowspan="3">Job</th>
        <td>Tuteur programmation</td>
        <td>-</td>
        <td>de fév à mai 22</td>
        <td>5</td>
        <td>12</td>
        <td>XXXX</td>
      </tr>
      <tr class="job">
        <td>Salon SIEP 2021</td>
        <td>Tour & Taxi</td>
        <td>26 et 27 nov. 22</td>
        <td>5</td>
        <td>12</td>
        <td>XXXX</td>
      </tr>
      <tr class="job">
        <td>Uber Eats, Bpost et BK</td>
        <td>Bruxelles</td>
        <td>2021-2022</td>
        <td>0</td>
        <td>500+</td>
        <td>XXXX</td>
      </tr>
      <!-- Empty line -->
      <tr class="projet-perso">
        <th>Dévelopement d'un projet</th>
        <td>Réalisation du Portfolio</td>
        <td>-</td>
        <td>de août 22 à mai 23</td>
        <td>10</td>
        <td>60</td>
        <td>
          <a href="https://github.com/Rachiid007/Portfolio" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <th colspan="4" class="title-table">Total</th>
        <td class="title-table">60</td>
        <td class="title-table">347</td>
      </tr>
    </tfoot>
  </table>
</template>

<style>
table {
  table-layout: auto;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  min-width: 800px;
  border-collapse: collapse;
  border: 2px solid crimson;
  margin: 0 auto 20px auto;
}

thead tr > th {
  font-size: 1.1em;
  font-weight: bold;
  padding: 0.5em 0;
}

thead th:nth-child(1) {
  width: 20%;
}

thead th:nth-child(2) {
  width: 35%;
}

thead th:nth-child(3) {
  width: 13%;
}

thead th:nth-child(4) {
  width: 13%;
}

thead th:nth-child(5) {
  width: 6%;
}

thead th:nth-child(6) {
  width: 6%;
}

thead th:nth-child(7) {
  width: 7%;
}

table caption {
  font-size: 1.3em;
  margin-bottom: 1em;
  margin-top: 0;
}

.dev-web {
  background-color: aquamarine;
}

.dev-mobile {
  background-color: #ffc107;
}

.challenge {
  background-color: #07c5ff;
}

.conference {
  background-color: #f8992b;
}

.job {
  background-color: #87ee2d;
}

.projet-perso {
  background-color: #fd76c7;
}

td {
  text-align: left;
  padding: 8px;
}

th {
  text-align: center;
}

tfoot {
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
}

body.darkMode th.title-table,
body.darkMode td.title-table,
body.darkMode caption {
  color: white;
}
</style>
