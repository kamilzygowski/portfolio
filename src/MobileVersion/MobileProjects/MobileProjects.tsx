import React from 'react'
import './MobileProjects.scss'

interface MobileProject {
  img: string;
  title: string;
  description: string;
}
const MobileProjects = (): JSX.Element => {
  const projectsInfo: MobileProject[] = [
    { img: "https://i.postimg.cc/Jhx06qqc/games.webp", title: "Game creating", description: "one of my biggest hobbies is creating and planning whole systems in games" },
    { img: "https://i.postimg.cc/wTjCLkyY/website.png", title: "Websites preparing", description: "preparing extraordinary websites is just a fun for me" },
    { img: "https://i.postimg.cc/tJ6Y5V4h/bot-1.webp", title: "Softwares and bots", description: "I love automization things" }
  ]
  return (
    <div className='MobileProjects'>
      <div className='container'>
        {projectsInfo.map((element: MobileProject, index: number): JSX.Element => {
          return (
            <div className='whatIDo' key={index}>
              <img src={element.img} alt="img" />
              <div>
                <h1>{element.title}</h1>
                <p>{element.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default MobileProjects