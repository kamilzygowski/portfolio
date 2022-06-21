import React from 'react'
import './Skills.scss'

const Skills = (props: any) => {
    const skills = [
        {id:0, name: 'HTML', level: 80, background:"#ff6348", icon:"https://i.postimg.cc/8zDgvTdw/icons8-html-5-480.png"},
        {id:1, name: 'Sass', level: 80, background:"#ff6b81", icon:"https://i.postimg.cc/3rsTKXds/icons8-sass-480.png"},
        {id:2, name:'JavaScript', level: 70, background:'#70a1ff', icon:'https://i.postimg.cc/dDPnztQf/icons8-typescript-480.png'},
        {id:3, name: 'React', level: 70, background:"#3742fa", icon:"https://i.postimg.cc/wxyz8fT5/icons8-react-500.png"},
        {id:4, name:'Python', level: 60, background:"#ffa502", icon:"https://i.postimg.cc/TP1Ccjmz/icons8-python-48.png"},
        {id:5, name: 'Photoshop', level: 60, background:"#5352ed", icon:"https://i.postimg.cc/vmQ2YB7F/icons8-adobe-photoshop-480.png"},
        {id:6, name: 'After Effects', level: 60, background:"#7158e2", icon:"https://i.postimg.cc/j2HXHHWB/icons8-adobe-after-effects-96.png"},
        {id:7, name: 'Unity', level: 50, background:"#2f3542", icon:"https://i.postimg.cc/HsbCjrMV/icons8-unity-480.png"}
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