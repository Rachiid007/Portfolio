interface ActivityInfo {
  id: number
  theme: string
  typeOfActivity: string
  place: string
  dates: string
  toValorise: number
  real: number
  evidence: string
  img: string[]
  description: string
}

export const activitiesInfos: ActivityInfo[] = [
  {
    id: 1,
    theme: 'Web development',
    typeOfActivity: 'Online training "Back End Development and APIs"',
    place: 'FreeCodeCamp.com',
    dates: 'January 2022',
    toValorise: 5,
    real: 40,
    evidence: 'https://www.freecodecamp.org/certification/Rachid007/back-end-development-and-apis',
    img: ['Back_end_developement_and_API.png'],
    description: "Cette activité m'as permis d'apprendre..."
  },
  {
    id: 2,
    theme: 'Web development',
    typeOfActivity: 'Online training "JavaScript Algorithms and Data Structures"',
    place: 'FreeCodeCamp.com',
    dates: 'June 2022',
    toValorise: 5,
    real: 60,
    evidence:
      'https://www.freecodecamp.org/certification/Rachid007/javascript-algorithms-and-data-structures',
    img: ['JavaScript_Algorithms_and_Data_Structures.png'],
    description: "Cette activité m'as permis d'apprendre..."
  },
  {
    id: 3,
    theme: 'Mobile development',
    typeOfActivity: 'Online training "Développez votre première application Android"',
    place: 'OpenClassroom.com',
    dates: 'August 2022',
    toValorise: 10,
    real: 22,
    evidence: 'x',
    img: ['OpenClassroom_developpez-votre-première-application-android.png'],
    description: "Cette activité m'as permis d'apprendre..."
  },
  {
    id: 4,
    theme: 'Challenges',
    typeOfActivity: 'Hackathon Ephec 2021',
    place: 'Ephec',
    dates: 'November 2021',
    toValorise: 5,
    real: 48,
    evidence: 'x',
    img: ['Ephec_hackathon_01.jpg', 'Ephec_hackathon_02.jpg', 'Ephec_hackathon_03.jpg'],
    description: "Cette activité m'as permis d'apprendre..."
  },
  {
    id: 5,
    theme: 'Challenges',
    typeOfActivity: 'Hackathon Odoo 2022	',
    place: 'Odoo',
    dates: 'April 2022',
    toValorise: 5,
    real: 48,
    evidence: 'x',
    img: ['Odoo_hackathon_01.jpg', 'Odoo_hackathon_02.jpg', 'Odoo_hackathon_03.jpg'],
    description: "Cette activité m'as permis d'apprendre..."
  },
  {
    id: 6,
    theme: 'Challenges',
    typeOfActivity: 'Capture The Flag Ephec 2022',
    place: 'Ephec',
    dates: 'Fev 2022',
    toValorise: 0,
    real: 12,
    evidence: 'x',
    img: ['Capture_The_Flag-01.png'],
    description: "Cette activité m'as permis d'apprendre..."
  },
  {
    id: 7,
    theme: 'Challenges',
    typeOfActivity: 'Open Week 2022',
    place: 'UCL',
    dates: 'June 2022',
    toValorise: 0,
    real: 38,
    evidence: 'x',
    img: ['Open_Week-01.jpg', 'Open_Week-02.jpg'],
    description: "Cette activité m'as permis d'apprendre..."
  },
  {
    id: 8,
    theme: 'Conferences',
    typeOfActivity: 'DevDay 2021',
    place: 'Cinéscope LLN',
    dates: '23/11/2021',
    toValorise: 10,
    real: 10,
    evidence: 'x',
    img: ['DevDay-01.jpg', 'DevDay-02.jpg', 'DevDay-03.jpg'],
    description: "Cette activité m'as permis d'apprendre..."
  },
  {
    id: 9,
    theme: 'jobs',
    typeOfActivity: 'Tutor programmation',
    place: '-',
    dates: 'de fév à mai 22',
    toValorise: 5,
    real: 12,
    evidence: 'x',
    img: ['Tutor_programmation-01.png'],
    description: "Cette activité m'as permis d'apprendre..."
  },
  {
    id: 10,
    theme: 'jobs',
    typeOfActivity: 'Salon SIEP 2021',
    place: 'Tour & Taxi',
    dates: '26 et 27 nov. 22',
    toValorise: 5,
    real: 12,
    evidence: 'x',
    img: ['Salon_SIEP-01.jpg'],
    description: "Cette activité m'as permis d'apprendre..."
  },
  {
    id: 11,
    theme: 'jobs',
    typeOfActivity: 'Uber Eats, Bpost et BK',
    place: 'Brussels',
    dates: '2021-2022',
    toValorise: 0,
    real: 500,
    evidence: 'x',
    img: ['jobs-01.jpg'],
    description: "Cette activité m'as permis d'apprendre..."
  },
  {
    id: 12,
    theme: 'Projects development',
    typeOfActivity: 'Realization of my Portfolio',
    place: '-',
    dates: 'de août 22 à mai 23',
    toValorise: 10,
    real: 99,
    evidence: 'https://github.com/Rachiid007/Portfolio',
    img: ['portfolio-01.png'],
    description: "Cette activité m'as permis d'apprendre..."
  }
]
