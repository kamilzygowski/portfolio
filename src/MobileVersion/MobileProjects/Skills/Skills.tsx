import React from 'react'
import './Skills.scss'

const Skills = (props: any) => {
    const skills = [
        {id:0, name:'JavaScript', level: 80, background:'#273c75', icon:'https://i.postimg.cc/dDPnztQf/icons8-typescript-480.png'},
        {id:1, name:'Python', level: 60, background:"#000", icon:"https://i.postimg.cc/TP1Ccjmz/icons8-python-48.png"},
        {id:2, name: 'Sass', level: 80, background:"#44bd32", icon:"https://i.postimg.cc/3rsTKXds/icons8-sass-480.png"}
    ]
    console.log(props.props.showSkills)
    const displayingSkills = () => {
        return (
            <ul className='skillsContainer'>
                {skills.map((element:any, index:number) => {
                    return (
                    <li className='skillsLi' key={index}>
                        <img className='icon' src={element.icon} alt="skill Icon"/>
                        <div className='bar' style={{background: element.background, width:`${element.level}%`}}></div>
                    </li>
                    )
                })}
            </ul>
        )
    }
    return (
        <div className='Skills'>
            {props.props.showSkills ?
                displayingSkills()
                : null}
        </div>
    )
}

export default Skills