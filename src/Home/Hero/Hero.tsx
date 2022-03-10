import React from 'react'
import './Hero.scss'

const Hero = () => {
    return (
        <div className='Hero'>
            <div className='info'>
                <p className='about'>Greetings my friend! My name is Kamil, I am 23 years old psychologist, frontend developer living in Gdańsk, Poland.</p>
                <p className='skillsTitle'>My skills</p>
                <div className='skillsImages'>
                    <img src="https://i.postimg.cc/vmQ2YB7F/icons8-adobe-photoshop-480.png" alt="Photoshop" />
                    <img src="https://i.postimg.cc/XJPskkR4/icons8-git-512.png" alt="Git" />
                    <img src="https://i.postimg.cc/8zDgvTdw/icons8-html-5-480.png" alt="HTML"/>
                    <img src="https://i.postimg.cc/9M0x9nNL/icons8-javascript-480.png" alt="Javascript" />
                    <img src="https://i.postimg.cc/d04HLYn7/icons8-mysql-logo-384.png" alt="SQL" />
                    <img src="https://i.postimg.cc/wxyz8fT5/icons8-react-500.png" alt="React" />
                    <img src="https://i.postimg.cc/8crtKrGW/icons8-redux-500.png" alt="Redux" />
                    <img src="https://i.postimg.cc/3rsTKXds/icons8-sass-480.png" alt="Sass" />
                    <img src="https://i.postimg.cc/dDPnztQf/icons8-typescript-480.png" alt="Typescript" />
                    <img src="https://i.postimg.cc/HsbCjrMV/icons8-unity-480.png" alt="Unity"/>
                </div>
            </div>
            <img src="https://i.postimg.cc/QMkKjN87/DUOTONE.png" alt="kitty" />
        </div>
    )
}

export default Hero