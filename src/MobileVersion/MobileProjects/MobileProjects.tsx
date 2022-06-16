import React, { useState } from 'react'
import './MobileProjects.scss'
import Skills from './Skills/Skills';

interface MobileProject {
  img: string;
  title: string;
  description: string;
  showSkills: boolean;
}
const MobileProjects = (): JSX.Element => {
  const projectsInfo: MobileProject[] = [
    { img: "https://i.postimg.cc/Hs8fFnCp/skills.webp", title: "My skills", description: "Tap to expand my skills list", showSkills: true },
    { img: "https://i.postimg.cc/wTjCLkyY/website.png", title: "Websites preparing", description: "preparing extraordinary websites is just a fun for me", showSkills:false },
    { img: "https://i.postimg.cc/tJ6Y5V4h/bot-1.webp", title: "Software, games and bots", description: "I love to automate things. That's why I'm always looking for a way to create complex and smart computer-beings", showSkills:false }
  ]
  const [isTapped, setTapped] = useState(false);
  return (
    <div className='MobileProjects'>
      <div className='container'>
        {projectsInfo.map((element: MobileProject, index: number): JSX.Element => {
          return (
            <div className='whatIDo' key={index} onClick={index === 0 ? (e:any) => !isTapped ? setTapped(true) : setTapped(false) : ()=> console.log('Wrong one chosen')}>
              <img src={element.img} alt="img" />
              <div className='expandDiv'>
                <h1>{element.title}</h1>
                <p>{index===0 && isTapped ? 'Tap to hide' : element.description}</p>
                {isTapped ? <Skills props={projectsInfo[index]}/> : null}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default MobileProjects