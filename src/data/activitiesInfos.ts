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
    description: "Cette activité m'as permis d'apprendre..."
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
    description: "Cette activité m'as permis d'apprendre..."
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
    description: "Cette activité m'as permis d'apprendre..."
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
    description: "Cette activité m'as permis d'apprendre..."
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
    img: ['Odoo_hackathon_01.jpg', 'Odoo_hackathon_02.jpg'],
    description: "Cette activité m'as permis d'apprendre..."
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
    description: "Cette activité m'as permis d'apprendre..."
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
    img: ['Open_Week-01.jpg', 'Open_Week-02.jpg'],
    description: "Cette activité m'as permis d'apprendre..."
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
    description: "Cette activité m'as permis d'apprendre..."
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
    description: "Cette activité m'as permis d'apprendre..."
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
    description: "Cette activité m'as permis d'apprendre..."
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
    img: ['Jobs_Bpost_selfie.jpg', 'Jobs_Uber_Screenshot_my_profile.jpg'],
    description: "Cette activité m'as permis d'apprendre..."
  },
  {
    id: 12,
    theme: ActivityTheme.ProjectsDevelopment,
    typeOfActivity: 'Realization of my Portfolio',
    place: '-',
    dates: 'de août 22 à mai 23',
    toValorise: 10,
    real: 99,
    evidence: 'https://github.com/Rachiid007/Portfolio',
    img: ['portfolio-01.png'],
    description: "Cette activité m'as permis d'apprendre..."
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
    description: "Cette activité m'as permis d'apprendre..."
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
    img: ['HacknWOW-01.jpg', 'HacknWOW-02.jpg'],
    description: "Cette activité m'as permis d'apprendre..."
  }
]
