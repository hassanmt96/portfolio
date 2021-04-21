import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hassan Tariq | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio site!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Hassan',
  subtitle: 'And I am a Software Developer.',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'stand.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1FWmLp1Df2lxKL0-pd9Hkfe4NULI9uI-O/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'crypto.png',
    title: 'Crypto-wiki',
    info:
      'This is a fullstack cryptocurrency tracking application that ties statistics and news coverage on the latest cryptos. ',
    info2:
      'It uses an AI technology within an API similar to the voice commands of Siri and Alexa to provide the user insight on their coin.(Primary technologies used React and Flask)',
    url: 'https://crypto-wiki.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'melodie-img.png',
    title: 'Melodie',
    info:
      ' This is a music streaming application where anyone can share their music or listen to others uploads.',
    info2:
      'Heavily inspired by SoundCloud, users can browse a homefeed, search for songs view user pages, and upload/edit songs.(React & Flask)',
    url: 'https://melodie.herokuapp.com/',
    repo: 'https://github.com/julia-richards/melodie', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'neoma-pic.png',
    title: 'Neoma',
    info: ' Neoma is a task management system that mirrors the abilites of Asana.',
    info2:
      'It provides you with a custom dashboard and the ability to set certain features such as assigning tasks to individual members on teams. (Currently it is offline for maintenance)',
    url: 'https://neoma-app.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'corals.png',
    title: 'Gypsies Reef',
    info:
      ' Gypsies Reef is an ecommerce application for corals and underwater supplies. The frontend was designed with the React framework and the backend is using GraphQL.',
    info2: '',
    url: 'https://www.gypsiesreef.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'yourSadaqah.png',
    title: '(Coming soon...) yourSadaqah',
    info:
      'This application is a platform for charity development and fund driven help for disasters.  ',
    info2: 'Technologies used: MongoDB, Express, React, NextJS',
    url: 'https://www.gypsiesreef.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'If you are interested in working together, please let me know :) ',
  btn: 'talk to me',
  email: 'hassanmt996@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/thisishassanity',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hassan-tariq-1382b112b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hassanmt96',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
