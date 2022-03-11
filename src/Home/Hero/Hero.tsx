import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './Hero.scss'

interface skillItem {
    x: number;
    y: number;
    delta:number;
}

const Hero = () => {
   // ReactDOM.findDOMNode()
   const [offset, setOffset] = useState<skillItem>({x:0, y:0, delta:10})
   const skillsData = [{src:'https://i.postimg.cc/vmQ2YB7F/icons8-adobe-photoshop-480.png', alt:'Photoshop', pos:50},
{src:'https://i.postimg.cc/XJPskkR4/icons8-git-512.png',alt:'Git', pos:100},
{src:"https://i.postimg.cc/8zDgvTdw/icons8-html-5-480.png",alt:'HTML', pos:150},
{src:"https://i.postimg.cc/9M0x9nNL/icons8-javascript-480.png", alt:'Javascript', pos:200},
{src:'https://i.postimg.cc/d04HLYn7/icons8-mysql-logo-384.png', alt:'SQL', pos:250},
{src:"https://i.postimg.cc/wxyz8fT5/icons8-react-500.png", alt:'React', pos:300},
{src:"https://i.postimg.cc/8crtKrGW/icons8-redux-500.png", alt:'Redux', pos:350},
{src:"https://i.postimg.cc/3rsTKXds/icons8-sass-480.png", atl:'Sass'},
{src:"https://i.postimg.cc/dDPnztQf/icons8-typescript-480.png", alt:'Typescript', pos:400},
{src:"https://i.postimg.cc/HsbCjrMV/icons8-unity-480.png", alt:'Unity', pos:450}]


   let [interval, setTimeInterval] = useState(0);
   const [skills, setSkills] = useState<any[]>([]);
   const [circleContainer, setCircleContainer] = useState<any>(null);


   useEffect(()=> {
        setTimeInterval(interval++);
        console.log(interval)
   })

   const click = () => {
        setOffset({
            x: Math.sin(offset.x * interval),
            y: offset.y + offset.delta,
            delta:10
        })
   }

    return (
        <div className='Hero'>
            <button onClick={() => click()}> button </button>
            <div className='info'>
                <p className='about'>Greetings my friend! My name is Kamil, I am 23 years old psychologist, frontend developer living in Gdańsk, Poland.</p>
                <p className='skillsTitle'>My skills</p>
                <div className='skillsImages' ref={function(element:any){
                    //console.log(element?.children[0])
                    setCircleContainer(element);
                    //console.log(circleContainer)
                }}>
                {skillsData.map((element:any, index:number)=>{
                    return <img key ={index} src={element.src} alt={element.alt} style={
                    {position:'absolute',
                    left: `${offset.x + element.pos}px`,
                    top: `${offset.y}px`}} />
                })}
                </div>
            </div>
            <div className='photoContainer'>
            <img src="https://i.postimg.cc/QMkKjN87/DUOTONE.png" alt="kitty" className='profilePhoto'/>
            </div>
        </div>
    )
}

export default Hero