import fundamentosLogo from '/src/assets/img/html-css-js.png'
import reactLogo from '/src/assets/img/react.svg'
import nodeLogo from '/src/assets/img/nodejs.svg'
import css from '/src/assets/img/css_icon.svg'
import html from '/src/assets/img/html_icon.svg'
import js from '/src/assets/img/js_icon.svg'
import reactIcon from '/src/assets/img/react_original_logo_icon.svg'
import reduxIcon from '/src/assets/img/redux_original_logo_icon.svg'
import nodeIcon from '/src/assets/img/node_icon.svg'
import postgresql from '/src/assets/img/postgresql_logo_icon.svg'
import git from '/src/assets/img/git_icon.svg'
import sequelize from '/src/assets/img/sequelize.svg'
import python from '/src/assets/img/python.svg'
import fastapi from '/src/assets/img/FastAPI.svg'
import django from '/src/assets/img/djangoproject.svg'
import mongodb from '/src/assets/img/mongodb_original_logo_icon_146424.svg'

const platzi = [
    {
        id: 1,
        image_url: 'https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png',
        curso: 'Curso Básico de JavScript',
        certificate_link: 'https://drive.google.com/file/d/13zTjB2ut2BwnklxKICvNOSpNBUjCkUmg/view?usp=share_link'
    },
    {
        id: 2,
        image_url: 'https://static.platzi.com/media/achievements/badge-css-grid-basico-5a5b5ab7-3cbb-4c7a-a15d-9f2719b56598.png',
        curso: 'Curso de CSS Grid Básico',
        certificate_link: 'https://drive.google.com/file/d/1F7CYqXojakTChPH21vdyvCZH7OeU-dwh/view?usp=share_link'
    },
    {
        id: 3,
        image_url: 'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
        curso: 'Curso Definitivo de HTML y CSS',
        certificate_link: 'https://drive.google.com/file/d/1SSMGtrsbO9o17Qz4R-W0bBHrNkZ99l4W/view?usp=share_link'
    },
    {
        id: 4,
        image_url: 'https://static.platzi.com/media/achievements/badge-curso-frontend-developer-825407d1-49b1-4c9b-90c4-eee793720ede.png',
        curso: 'Curso de Frontend Developer',
        certificate_link: 'https://drive.google.com/file/d/1mXX5rHYx5rwRchRp5Yk5F9yf4AgTn_sL/view?usp=share_link'
    },
    {
        id: 5,
        image_url: 'https://static.platzi.com/media/achievements/badge-curso-practico-frontend-developer-d28c2eb0-cd3e-4951-bb96-5f1bcab2add5.png',
        curso: 'Curso Practico de Frontend Developer',
        certificate_link: ''
    },
    {
        id: 6,
        image_url: 'https://static.platzi.com/media/achievements/badge-ing-basico-a1-fechas-cca042ae-b01f-45aa-bc0f-5469ff035e5a.png',
        curso: 'Curso de Inglés Básico A1: Fechas, Horas y Expresiones Simples',
        certificate_link: 'https://drive.google.com/file/d/1XYqcmt-KU9saFEKbRG4lijgRoe4Fcja1/view?usp=share_link'
    },
    {
        id: 7,
        image_url: 'https://static.platzi.com/media/achievements/piezas-basic-english-course-beginners_badge-d884a9b2-fa4c-4821-b268-d4d5d0f10ab5.png',
        curso: 'Curso de Inglés Básico A1 para Principiantes',
        certificate_link: 'https://drive.google.com/file/d/1wSHbDenny7W6N-6sjg8KadFrFKdzqD4W/view?usp=share_link'
    },
    {
        id: 8,
        image_url: 'https://static.platzi.com/media/achievements/piezas-curso-de-ingles-basico-a1-presente-simple-y-vocabulario-comun_badge-caf91072.png',
        curso: 'Curso de Inglés Básico A1: Presente Simple y Vocabulario Común',
        certificate_link: 'https://drive.google.com/file/d/1bUIM6cj0pHx1N6_nTLj2XgpVu1iEyrH5/view?usp=share_link'
    },
    {
        id: 9,
        image_url: 'https://static.platzi.com/media/achievements/piezas-basic-english-course-beginners_badge-4953fa05-f52d-4557-98e5-a64acf9f3827.png',
        curso: 'Curso de Inglés Básico A1: Tus Primeras Conversaciones',
        certificate_link: 'https://drive.google.com/file/d/1U4Pb7yrtlkfKGF2Vyk7b77Vq0u-QAplm/view?usp=share_link'
    },
    {
        id: 10,
        image_url: 'https://static.platzi.com/media/achievements/badge-ingles-basico-preguntas-respuestas-2022-f459ccdb-5a48-4073-986c-94fd3bf0676a.webp',
        curso: 'Curso de Inglés Básico A2: Preguntas y Respuestas',
        certificate_link: 'https://drive.google.com/file/d/1yKZwV8kC_329YPBqjqeEDbjlrUXy7Y-B/view?usp=share_link'
    },
    {
        id: 11,
        image_url: 'https://static.platzi.com/media/achievements/piezas-taller-ingles-principiantes_badge-1-56da5912-2828-48f3-9879-0ab93c1c3d3d.png',
        curso: 'Taller de Inglés Básico A1: Descripciones Personales',
        certificate_link: 'https://drive.google.com/file/d/1aR9QrFy_IBJtiIZgTCnBTpKYjgr2lkC1/view?usp=share_link'
    }
]

const academlo = [
    {
        id: 12,
        image: fundamentosLogo,
        curso: 'Web Development Fundamentals',
        description: 'The student obtained the necessary skills to correctly develop the visual part of a responsive website without using libraries/frameworks, as well as adding dynamic content with javascript, working collaboratively with git.',
        certificate_link: 'https://certificates.academlo.com/en/verify/74170408084694'
    },
    {
        id: 13,
        image: reactLogo,
        curso: 'Web Application Development with React',
        description: 'The student learned to create web applications with React JS, achieving great user interaction using previous knowledge of HTML, CSS and Javascript.',
        certificate_link: 'https://certificates.academlo.com/en/verify/55739408950709'
    },
    {
        id: 14,
        image: nodeLogo,
        curso: 'Backend whit NodeJS',
        description: 'The student learned how to build a server-side application with Node and Express from 0 to deployment on a server. They will have the ability to build a Rest API using a relational database, user authentication, security against XSS and CSRF attacks, validate the data received by the server and build custom middlewares with Express.',
        certificate_link: 'https://certificates.academlo.com/en/verify/64940983054018'
    }
]

const university = {
    academic_program: 'Systems and Computer Engineering',
    title_awared: 'Systems and Computer Engineer' ,
    level_training: 'undergraduate degrees' ,
    type_training: 'college degree' ,
    metodology: 'On-site',
    duration: '10 semesters',
    semester_location: '9 semester'
}

const skills = [
    {
        id:15 ,
        skill: 'HTML',
        img: html
    },
    {
        id:16 ,
        skill: 'CSS',
        img: css
    },
    {
        id:17 ,
        skill: 'JavaScript',
        img: js
    },
    {
        id:18 ,
        skill: 'ReactJS',
        img: reactIcon
    },
    {
        id:19 ,
        skill: 'Redux',
        img: reduxIcon
    },
    {
        id:20 ,
        skill: 'NodeJS',
        img: nodeIcon
    },
    {
        id:21 ,
        skill: 'Sequelize',
        img: sequelize
    },
    {
        id:22 ,
        skill: 'Python',
        img: python
    },
    {
        id:23 ,
        skill: 'FastAPI',
        img: fastapi
    },
    {
        id:24 ,
        skill: 'Django',
        img: django
    },
    {
        id:24 ,
        skill: 'PostgreSQL',
        img: postgresql
    },
    {
        id:25 ,
        skill: 'MongoDB',
        img: mongodb
    },
    {
        id:26 ,
        skill: 'Git',
        img: git
    }
]

const frontedSkills = {
    skill1: 'Responsive Desing',
    skill2: 'HTML, CSS y JavaScript',
    skill3: 'Redux',
    skill4: "Custom Hooks y Axios - consumo de API REST",
    skill5: 'Tailwind CSS'
}

const backendSkills = {
  skill1: 'Programming Fundamentals',
  skill2: 'Software Architectures',
  skill3: 'Relational Databases (PostgreSQL) and Non-relational Databases (MongoDB)',
  skill4: 'REST APIs with NodeJS, Express, and Sequelize ORM',
  skill5: 'REST APIs with Python, FastAPI, and Django ORM',
  skill6: 'Authentication with JSON Web Tokens (JWT)',
  skill7: 'Project Documentation with Swagger (OpenAPI)',
  skill8: 'Unit Testing',
  skill9: 'Cloud Computing: Amazon Web Services (AWS)',
};

export {
    platzi,
    academlo,
    university,
    skills,
    frontedSkills,
    backendSkills
}


