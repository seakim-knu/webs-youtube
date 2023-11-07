import {CiBaseball} from 'react-icons/ci';
import {CiCoins1} from 'react-icons/ci';
import {CiBoxes} from 'react-icons/ci';
import {CiBullhorn} from 'react-icons/ci';
import {CiCoffeeCup} from 'react-icons/ci';
import {CiDumbbell} from 'react-icons/ci';
import {CiFries} from 'react-icons/ci';
import {CiMoneyBill} from 'react-icons/ci';

import {AiFillGithub} from 'react-icons/ai';
import {AiOutlineLinkedin } from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';

export const headerMenus = [
    {
        title: "SEAH KIM",
        icon: <CiBaseball />,
        src:'/'
    },
    {
        title: "Reconmmendation",
        icon: <CiMoneyBill />,
        src: "/today"
    },
    {
        title: "Recomended developer",
        icon: <CiCoins1 />,
        src: "/developer"
    },
    {
        title: "Web design",
        icon: <CiBoxes />,
        src:"/webd"
    },
    {
        title: "Web Standard site",
        icon:<CiBullhorn />,
        src:"/website"
    },
    {
        title:"GSAP Parallax",
        icon: <CiCoffeeCup />,
        src: "gsap"
    },
    {
        title:"Portfolio site",
        icon: <CiDumbbell />,
        src: "/port"
    },
    {
        title: "Youtube clone site",
        icon: <CiFries />,
        src: "/youtube"
    },  
];

export const searchKeyword = [
    {
        title:"SEAH KIM",
        src:"/search/seahkim"
    },
    {
        tittle:"HTML",
        src:'/search/html'
    },
    {
        title:"CSS",
        src:"/search/css"
    },
    {
        title:"React.js",
        src:"/search/react.js"
    },
    {
        title:"Vue.js",
        src:"/search/vue.js"
    },
    {
        title: "Next.js",
        src:"/search/vue.js"
    },
    {
        title: "SQL",
        src:"/search/sql"
    },
    {
        title: "portfolio",
        src:"/search/React Portfolio"
    },
    {
        title:"music",
        src:"/search/NewJeans"
    }
];

export const snsLink = [
    {
        title:'github',
        url:"https://github.com/seakim-knu",
        icon: <AiFillGithub />
    },
    {
        title:'youtube',
        url:'https://www.youtube.com/@user-yp7xs4ib6s',
        icon: <AiFillYoutube />
    },
    {
        title:"linkedin",
        url:'https://www.linkedin.com/in/%EC%84%B8%EC%95%84-%EA%B9%80-b3699b281/',
        icon: <AiOutlineLinkedin />
    },
    {
        title: "instagram",
        url:'https://www.instagram.com/_jolrv',
        icon: <AiOutlineInstagram />
    },
]