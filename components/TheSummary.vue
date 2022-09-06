<template>
  <table aria-hidden="true">
    <caption>
      {{
        $t('activities.summary')
      }}
    </caption>
    <thead>
      <tr>
        <th scope="col" class="title-table">{{ $t('activities.table.theme') }}</th>
        <th scope="col" class="title-table">{{ $t('activities.table.typeOfActivity') }}</th>
        <th scope="col" class="title-table">{{ $t('activities.table.place') }}</th>
        <th scope="col" class="title-table">{{ $t('activities.table.dates') }}</th>
        <th scope="col" class="title-table">{{ $t('activities.table.to_valorise') }}</th>
        <th scope="col" class="title-table">{{ $t('activities.table.real') }}</th>
        <th scope="col" class="title-table">{{ $t('activities.table.evidence') }}</th>
      </tr>
    </thead>

    <tbody>
      <tr class="dev-web">
        <th rowspan="2">{{ $t('activities.table.web_dev') }}</th>
        <td>{{ $t('activities.table.online_training') }} "Back End Development and APIs"</td>
        <td>FreeCodeCamp</td>
        <td>janv-22</td>
        <td>5</td>
        <td>40</td>
        <td>
          <NuxtLink
            to="https://www.freecodecamp.org/certification/Rachid007/back-end-development-and-apis"
            target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></NuxtLink>
        </td>
      </tr>
      <tr class="dev-web">
        <td>
          {{ $t('activities.table.online_training') }} "JavaScript Algorithms and Data Structures"
        </td>
        <td>FreeCodeCamp</td>
        <td>juin-22</td>
        <td>5</td>
        <td>60</td>
        <td>
          <NuxtLink
            to="https://www.freecodecamp.org/certification/Rachid007/javascript-algorithms-and-data-structures"
            target="_blank"
          >
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </NuxtLink>
        </td>
      </tr>
      <!-- Empty line -->
      <tr class="dev-mobile">
        <th>{{ $t('activities.table.mobile_dev') }}</th>
        <td>
          {{ $t('activities.table.online_training') }} "Développez votre première application
          Android"
        </td>
        <td>Openclassroom</td>
        <td>Août-22</td>
        <td>10</td>
        <td>20</td>
        <td>XXXX</td>
      </tr>
      <!-- Empty line -->
      <tr class="challenge">
        <th rowspan="4">{{ $t('activities.table.challenges') }}</th>
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
        <th>{{ $t('activities.table.conferences') }}</th>
        <td>DevDay 2021</td>
        <td>Cinéscope LLN</td>
        <td>23/11/2021</td>
        <td>10</td>
        <td>10</td>
        <td>XXXX</td>
      </tr>
      <!-- Empty line -->
      <tr class="job">
        <th rowspan="3">{{ $t('activities.table.work') }}</th>
        <td>{{ $t('activities.table.tutor') }} programmation</td>
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
        <td>{{ $t('contact.infos.city') }}</td>
        <td>2021-2022</td>
        <td>0</td>
        <td>500+</td>
        <td>XXXX</td>
      </tr>
      <!-- Empty line -->
      <tr class="projet-perso">
        <th>{{ $t('activities.table.projects_dev') }}</th>
        <td>{{ $t('activities.table.realization_portfolio') }}</td>
        <td>-</td>
        <td>de août 22 à mai 23</td>
        <td>10</td>
        <td>60</td>
        <td>
          <NuxtLink to="https://github.com/Rachiid007/Portfolio" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></NuxtLink>
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

<style scoped>
table caption {
  font-size: 22px;
  margin-bottom: 15px;
  margin-top: 0;
}

table {
  table-layout: auto;
  max-width: 1100px;
  min-width: 700px;

  border-collapse: collapse;
  border: 2px solid crimson;
}

thead tr > th {
  font-size: 17px;
  font-weight: 500;
  padding: 10px 0;
}

tr > th {
  font-weight: 500;
}

th,
td {
  vertical-align: middle;
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

thead th:nth-child(1) {
  width: 15%;
}

thead th:nth-child(2) {
  width: 35%;
}

thead th:nth-child(3) {
  width: 13%;
}

thead th:nth-child(4) {
  width: 14%;
}

thead th:nth-child(5) {
  width: 8%;
}

thead th:nth-child(6) {
  width: 6%;
}

thead th:nth-child(7) {
  width: 8%;
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
</style>
