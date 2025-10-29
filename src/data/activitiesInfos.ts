// TODO: Try to export it ans use it in the activities page
interface ActivityInfo {
  id: number
  theme: ActivityTheme
  typeOfActivity: string
  place: string
  dates: string
  toValorise: number
  real: number
  evidence: string
  img: string[]
  description: string
}

export enum ActivityTheme {
  All = 'All', // This is not a real theme, it's used for the filter in the activities page
  WebDevelopment = 'Web development',
  MobileDevelopment = 'Mobile development',
  Challenges = 'Challenges',
  Conferences = 'Conferences',
  Jobs = 'jobs',
  ProjectsDevelopment = 'Projects development'
}

export const activitiesInfos: ActivityInfo[] = [
  {
    id: 1,
    theme: ActivityTheme.WebDevelopment,
    typeOfActivity: 'Online training "Back End Development and APIs"',
    place: 'FreeCodeCamp.com',
    dates: 'January 2022',
    toValorise: 5,
    real: 40,
    evidence: 'https://www.freecodecamp.org/certification/Rachid007/back-end-development-and-apis',
    img: ['Back_end_developement_and_API.png'],
    description:
      "J'ai acquis une solide compréhension du fonctionnement d'une application Node.js et Express.js, ce qui s'est avéré extrêmement bénéfique lors de mon stage et de mon projet d'intégration."
  },
  {
    id: 2,
    theme: ActivityTheme.WebDevelopment,
    typeOfActivity: 'Online training "JavaScript Algorithms and Data Structures"',
    place: 'FreeCodeCamp.com',
    dates: 'June 2022',
    toValorise: 5,
    real: 60,
    evidence:
      'https://www.freecodecamp.org/certification/Rachid007/javascript-algorithms-and-data-structures',
    img: ['JavaScript_Algorithms_and_Data_Structures.png'],
    description:
      "Grâce à cette formation, j'ai pu consolider mes compétences en JavaScript et développer une solide maîtrise de la résolution de problèmes algorithmiques."
  },
  {
    id: 3,
    theme: ActivityTheme.MobileDevelopment,
    typeOfActivity: 'Online training "Développez votre première application Android"',
    place: 'OpenClassroom.com',
    dates: 'August 2022',
    toValorise: 10,
    real: 22,
    evidence: 'x',
    img: ['OpenClassroom_developpez-votre-première-application-android.png'],
    description:
      "Grâce à cette formation, j'ai pu acquérir une première approche du développement mobile."
  },
  {
    id: 4,
    theme: ActivityTheme.Challenges,
    typeOfActivity: 'Hackathon Ephec 2021',
    place: 'Ephec',
    dates: 'November 2021',
    toValorise: 5,
    real: 48,
    evidence: 'x',
    img: ['Ephec_hackathon_01.jpg', 'Ephec_hackathon_02.jpg', 'Ephec_hackathon_03.jpg'],
    description:
      "Il s'agit de ma première participation à un hackathon, et cela m'a permis de découvrir le fonctionnement de cet événement stimulant. J'ai eu l'opportunité d'apprendre de nombreuses choses, notamment l'utilisation de la bibliothèque leaflet.js et OpenStreetMap pour afficher une carte sur un site web."
  },
  {
    id: 5,
    theme: ActivityTheme.Challenges,
    typeOfActivity: 'Hackathon Odoo 2022	',
    place: 'Odoo',
    dates: 'April 2022',
    toValorise: 5,
    real: 48,
    evidence: 'x',
    img: ['Odoo_hackathon_01.jpg', 'Odoo_hackathon_02.jpg', 'Odoo_hackathon_03.jpg', 'Odoo_hackathon_04.jpg'],
    description:
      "Le hackathon Odoo était mon deuxième, et j'ai eu l'opportunité de participer avec deux autres étudiants de notre section. Cette expérience a été extrêmement enrichissante, car elle nous a permis de confronter nos compétences à celles des professionnels présents."
  },
  {
    id: 6,
    theme: ActivityTheme.Challenges,
    typeOfActivity: 'Capture The Flag Ephec 2022',
    place: 'Ephec',
    dates: 'Fev 2022',
    toValorise: 0,
    real: 12,
    evidence: 'x',
    img: ['Capture_The_Flag-01.png'],
    description:
      "Grâce à ma participation au CTF organisé à l'EPHEC, j'ai pu véritablement découvrir cet univers."
  },
  {
    id: 7,
    theme: ActivityTheme.Challenges,
    typeOfActivity: 'Open Week 2022',
    place: 'UCL',
    dates: 'June 2022',
    toValorise: 0,
    real: 38,
    evidence: 'x',
    img: ['Open_Week-01.jpg', 'Open_Week-02.jpg', 'Open_Week-03.png'],
    description:
      "Pendant une semaine, j'ai eu l'opportunité de développer un module de covoiturage destiné aux employés d'Odoo. Cette expérience a été extrêmement enrichissante, car j'ai pu collaborer avec des étudiants de l'UCL qui ont une approche plus orientée vers l'analyse et la recherche, contrairement à ma tendance à vouloir produire rapidement quelque chose."
  },
  {
    id: 8,
    theme: ActivityTheme.Conferences,
    typeOfActivity: 'DevDay 2021',
    place: 'Cinéscope LLN',
    dates: '23/11/2021',
    toValorise: 10,
    real: 10,
    evidence: 'x',
    img: ['DevDay-01.jpg', 'DevDay-02.jpg', 'DevDay-03.jpg'],
    description:
      "Il s'agit de ma première participation à une conférence destinée aux développeurs, et cette expérience a été extrêmement enrichissante. J'ai eu l'occasion de découvrir de nouvelles technologies passionnantes et d'explorer des concepts innovants."
  },
  {
    id: 9,
    theme: ActivityTheme.Jobs,
    typeOfActivity: 'Tutor programmation',
    place: '-',
    dates: 'de fév à mai 22',
    toValorise: 5,
    real: 12,
    evidence: 'x',
    img: ['Tutor_programmation-01.png'],
    description:
      "J'ai eu la chance de partager mes connaissances en programmation avec des étudiants de première année en TI et e-Business. Cette expérience m'a permis d'affiner mes compétences en vulgarisation, en transformant des concepts complexes en explications simples et accessibles."
  },
  {
    id: 10,
    theme: ActivityTheme.Jobs,
    typeOfActivity: 'Salon SIEP 2021',
    place: 'Tour & Taxi',
    dates: '26 et 27 nov. 22',
    toValorise: 5,
    real: 12,
    evidence: 'x',
    img: ['Salon_SIEP-01.jpg'],
    description:
      "J'ai eu l'occation de représenter notre section à plusieurs reprises lors du salon SIEP."
  },
  {
    id: 11,
    theme: ActivityTheme.Jobs,
    typeOfActivity: 'Uber Eats, Bpost et Burger King',
    place: 'Brussels',
    dates: '2020-2023',
    toValorise: 0,
    real: 500,
    evidence: 'x',
    img: ['Jobs_Bpost_selfie.jpg', 'Jobs_Uber_Screenshot_my_profile.jpg', 'Jobs_Bpost_02.jpg'],
    description:
      "J'ai effectué plusieurs jobs étudiants afin de financer mes études, notamment chez Uber Eats, Bpost et Burger King."
  },
  {
    id: 12,
    theme: ActivityTheme.ProjectsDevelopment,
    typeOfActivity: 'Realization of my Portfolio',
    place: 'Europe',
    dates: 'de août 22 à mai 23',
    toValorise: 10,
    real: 99,
    evidence: 'https://github.com/Rachiid007/Portfolio',
    img: ['portfolio-01.png'],
    description:
      "Ce portfolio est le résultat de mon travail acharné et de mes recherches approfondies. Grâce à ce projet, j'ai pu acquérir une solide maîtrise des frameworks Vue.js et Nuxt.js. De plus, j'ai eu l'opportunité de consolider mes connaissances en HTML, CSS et JavaScript."
  },
  {
    id: 13,
    theme: ActivityTheme.Challenges,
    typeOfActivity: 'Hackathon EPHEC 2022',
    place: 'EPHEC',
    dates: 'October 2022',
    toValorise: 5,
    real: 48,
    evidence: 'x',
    img: ['Ephec_hackathon_2022-01.png', 'Ephec_hackathon_2022-02.png'],
    description:
      "Cette activité m'a permis d'apprendre à travailler en groupe avec des personnes qui ont une vision différente de la mienne."
  },
  {
    id: 14,
    theme: ActivityTheme.Challenges,
    typeOfActivity: "Hack'n WOW #2",
    place: 'Centre Culturel de La Marlagne (Namur)',
    dates: 'March 2023',
    toValorise: 5,
    real: 72,
    evidence: 'x',
    img: ['HacknWOW-01.jpg', 'HacknWOW-02.jpg', 'HacknWOW-03.jpg'],
    description:
      "Grâce à ma participation à ce Hackathon, j'ai eu la chance de découvrir l'ETNIC et de créer une application qui permet de mettre en relation les personnes intéressées par le sport et la culture. Cette expérience m'a également offert une opportunité unique : j'ai reçu une proposition d'emploi en tant que développeur. De plus, j'ai eu l'occasion d'assister à des présentations passionnantes sur Open IA et les Microservices, tout en échangeant avec des professionnels du domaine. Sans aucun doute, il s'agit du meilleur Hackathon auquel j'ai participé."
  }
]
