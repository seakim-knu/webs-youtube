import React from 'react';

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


const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href='/'>
                    <em aria-hidden='true'></em>
                    <span>webs<br />youtube</span>
                </a>
            </h1>

            <nav className='header__menu'>
                <ul className='menu'>
                    <li className='active'>
                        <a href='/'>
                            <CiBaseball />SEAH KIM
                        </a>
                    </li>
                    <li>
                        <a href='/today'>
                            <CiMoneyBill />Recommendation
                        </a>
                    </li>
                    <li>
                        <a href='/developer'>
                            <CiCoins1 />Recommended developer
                        </a>
                    </li>
                    <li>
                        <a href='/webd'>
                            <CiBoxes />Web design
                        </a>
                    </li>
                    <li>
                        <a href='/website'>
                            <CiBullhorn />Web Standard site
                        </a>
                    </li>
                    <li>
                        <a href='/gsap'>
                            <CiCoffeeCup />GSAP Parallax
                        </a>
                    </li>
                    <li>
                        <a href='/port'>
                            <CiDumbbell />Portfolio site
                        </a>
                    </li>
                    <li>
                        <a href='/youtube'>
                            <CiFries />Youtube clone site
                        </a>
                    </li>
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href='/search/seahkim'>SEAH KIM</a>
                    </li>
                    <li>
                        <a href='/search/html'>HTML</a>
                    </li>
                    <li>
                        <a href='/search/css'>CSS</a>
                    </li>
                    <li>
                        <a href='/search/javascript'>JavaScript</a>
                    </li>
                    <li>
                        <a href='/search/react.js'>React.js</a>
                    </li>
                    <li>
                        <a href='/search/vue.js'>Vue.js</a>
                    </li>
                    <li>
                        <a href='/search/next.js'>Next.js</a>
                    </li>
                    <li>
                        <a href='/serarch/node.js'>Node.js</a>
                    </li>
                    <li>
                        <a href='/search/sql'>SQL</a>
                    </li>
                    <li>
                        <a href='/search/React Portfolio'>portfolio</a>
                    </li>
                    <li>
                        <a href='/search/NewJeans'>music</a>
                    </li>
                </ul>
            </nav>

            <div className='header__sns'>
                <ul>
                    <li>
                        <a href='https://github.com/seakim-knu' rel='noopener noreferrer'>
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/@user-yp7xs4ib6s' rel='noopener noreferrer'>
                            <AiFillYoutube />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/%EC%84%B8%EC%95%84-%EA%B9%80-b3699b281/' rel='noopener noreferrer'>
                            <AiOutlineLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/_jolrv' rel='noopener noreferrer'>
                            <AiOutlineInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header