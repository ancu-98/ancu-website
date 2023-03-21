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


const platzi = [
    {
        id: 1,
        image_url: 'https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png',
        curso: 'Curso Básico de JavScript'
    },
    {
        id: 2,
        image_url: 'https://static.platzi.com/media/achievements/badge-css-grid-basico-5a5b5ab7-3cbb-4c7a-a15d-9f2719b56598.png',
        curso: 'Curso de CSS Grid Básico'
    },
    {
        id: 3,
        image_url: 'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
        curso: 'Curso Definitivo de HTML y CSS'
    },
    {
        id: 4,
        image_url: 'https://static.platzi.com/media/achievements/badge-curso-frontend-developer-825407d1-49b1-4c9b-90c4-eee793720ede.png',
        curso: 'Curso de Frontend Developer'
    },
    {
        id: 5,
        image_url: 'https://static.platzi.com/media/achievements/badge-curso-practico-frontend-developer-d28c2eb0-cd3e-4951-bb96-5f1bcab2add5.png',
        curso: 'Curso Practico de Frontend Developer'
    },
    {
        id: 6,
        image_url: 'https://static.platzi.com/media/achievements/badge-ing-basico-a1-fechas-cca042ae-b01f-45aa-bc0f-5469ff035e5a.png',
        curso: 'Curso de Inglés Básico A1: Fechas, Horas y Expresiones Simples'
    },
    {
        id: 7,
        image_url: 'https://static.platzi.com/media/achievements/piezas-basic-english-course-beginners_badge-d884a9b2-fa4c-4821-b268-d4d5d0f10ab5.png',
        curso: 'Curso de Inglés Básico A1 para Principiantes'
    },
    {
        id: 8,
        image_url: 'https://static.platzi.com/media/achievements/piezas-curso-de-ingles-basico-a1-presente-simple-y-vocabulario-comun_badge-caf91072.png',
        curso: 'Curso de Inglés Básico A1: Presente Simple y Vocabulario Común'
    },
    {
        id: 9,
        image_url: 'https://static.platzi.com/media/achievements/piezas-basic-english-course-beginners_badge-4953fa05-f52d-4557-98e5-a64acf9f3827.png',
        curso: 'Curso de Inglés Básico A1: Tus Primeras Conversaciones'
    },
    {
        id: 10,
        image_url: 'https://static.platzi.com/media/achievements/badge-ingles-basico-preguntas-respuestas-2022-f459ccdb-5a48-4073-986c-94fd3bf0676a.webp',
        curso: 'Curso de Inglés Básico A2: Preguntas y Respuestas'
    },
    {
        id: 11,
        image_url: 'https://static.platzi.com/media/achievements/piezas-taller-ingles-principiantes_badge-1-56da5912-2828-48f3-9879-0ab93c1c3d3d.png',
        curso: 'Taller de Inglés Básico A1: Descripciones Personales'
    }
]

const academlo = [
    {
        id: 12,
        image: fundamentosLogo,
        curso: 'Fundamentos de Desarrollo Web',
        description: 'The student obtained the necessary skills to correctly develop the visual part of a responsive website without using libraries/frameworks, as well as adding dynamic content with javascript, working collaboratively with git.'
    },
    {
        id: 13,
        image: reactLogo,
        curso: 'Desarrollo de Aplicaciones Web con React',
        description: 'The student learned to create web applications with React JS, achieving great user interaction using previous knowledge of HTML, CSS and Javascript.'
    },
    {
        id: 14,
        image: nodeLogo,
        curso: 'Backend con Node',
        description: 'The student learned how to build a server-side application with Node and Express from 0 to deployment on a server. They will have the ability to build a Rest API using a relational database, user authentication, security against XSS and CSRF attacks, validate the data received by the server and build custom middlewares with Express.'
    }
]

const university = {
    academic_program: 'Systems and Computer Engineering',
    title_awared: 'Systems and Computer Engineer' ,
    level_training: 'undergraduate degrees' ,
    type_training: 'college degree' ,
    metodology: 'On-site',
    duration: '10 semesters',
    semester_location: '5 semester'
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
        skill: 'React',
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
        skill: 'PostgreSQL',
        img: postgresql
    },
    {
        id:22 ,
        skill: 'Git',
        img: git
    }
]

const frontedSkills = {
    skill1: 'Responsive Desing',
    skill2: 'HTML, CSS y JavaScript',
    skill3: 'Redux',
    skill4: "Custom Hooks y Axios - consumo de API's"
}

const backendSkills = {
    skill1: 'Programación Orientada a Objetos POO' ,
    skill2: 'Programación Funcional',
    skill3: 'Arquitectura MVC',
    skill4: 'Relaciones en bases de datos (Template Engines)',
    skill5: 'Express',
    skill6: 'Sequilize ORM',
    skill7: 'JSON Web Tokens(JWT)',
    skill8: 'API Rest con Node y Express (seguridad y documentación)'
}

export {
    platzi,
    academlo,
    university,
    skills,
    frontedSkills,
    backendSkills
}


