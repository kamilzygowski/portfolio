import React, { useEffect, useRef, useState } from 'react'
import './Projects.scss'
import Draggable from 'react-draggable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight, faMaximize, faWindowMaximize, faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons';

interface Project {
  src: string;
  id: number;
  title: string;
  iframe: string;
}
const Projects = () => {
  const initialProjects: Project[] = [
    { src: "https://i.postimg.cc/MpCrVwHw/planetraium.png", id: 0, title: 'Planetarium', iframe: "https://swedishsailor.github.io/planetarium/" },
    { src: "https://i.postimg.cc/zvCBj8Sg/franky.png", id: 1, title: 'Franky Cars', iframe: "https://swedishsailor.github.io/frankyCars/" },
    { src: "https://i.postimg.cc/3rzMz0xW/pexels-arina-krasnikova-6317441.jpg", id: 2, title: 'Old Portfolio', iframe: "https://swedishsailor.github.io/" }
  ]
  const hardCodedMaximize = {width: 640+'px', height:460+'px'}
  const [restartWindows, setRestartWindows] = useState(false)
  const [rememberedProjects, setRememberedProjects] = useState<any>([])
  const windowElement: any = useRef(null);
  const [zCounter, setZCounter] = useState(0)
  const minimizedWindowsElement: any = useRef(null)
  const [projects, setProjects] = useState<Project[] | any>(initialProjects);
  const [minimizedWindow, setMinimizedWindows] = useState<Project[]>([])
  const handleClose = (e: any) => {
    console.log('close', e.target.id)
    console.log(projects)
    // Copy projects arr to new array
    const array = [...projects];
    // Fix the array to remove this window
    array.splice(e.target.id, 1)
    setProjects([
      ...array
    ])
  }
  const handleUnMinimize = (id: any, key: any) => {
    const newItem: any = initialProjects[id];
    // First delete the minimized icon 
    const placeholderArray = [...minimizedWindow]
    placeholderArray.splice(key, 1)
    setMinimizedWindows([
      ...placeholderArray
    ])
    // Then display the window again on the main screen
    setProjects([
      ...projects,
      newItem
    ])
  }
  const handleMinimize = (e: any) => {
    // Return if e.target.id === ""
    if (e.target.id === "")
    {
      console.log('%c returned minimalization', 'color: red')
      return;
    }
    handleClose(e);
    console.log(e.target.id)
    setMinimizedWindows([
      ...minimizedWindow,
      projects[e.target.id]
    ])
    console.log(minimizedWindow)
  }
  const handleMaximize = (e:any) => {
    // On maximize we will create the window on almost whole screen displaying project info
    console.log(e.target)
    console.log(e.target.id)
    const windows:any = document.querySelectorAll('.window');
    for (const window of windows){
      console.log(window.id)
    }
  }

  const changeIndexZToMax = (e: any) => {
    const allWindows: any = document.querySelectorAll('.window')
    setZCounter(zCounter+1)
    // make THIS window Z Index 250 + counter
    if (allWindows[e.target.id] !== undefined)
      allWindows[e.target.id].style.zIndex = 250 + zCounter;
  }
  useEffect(() => {
    setRememberedProjects([...projects])
  }, [])
  return (
    <div className='Projects'>
      {/*<iframe src="https://swedishsailor.github.io/portfolio-game/" className='iproject' title='portfolio game' />*/}
      <FontAwesomeIcon icon={faArrowRotateRight} className="replay" onClick={() => { setMinimizedWindows([]); setRestartWindows(true) }} />{/*Projects*/}
      <div className='projectsList' ref={windowElement}>
        {!restartWindows ?
          projects.map((element: any, index: string) => {
            return (
              <Draggable
                axis="both"
                grid={[2, 2]}
                key={index}
                onDrag={(e) => changeIndexZToMax(e)}
              >
                <div className='window' style={{ zIndex: 50 }} id={index} key={index} onClick={(e) => changeIndexZToMax(e)}>
                  <div className='frame' id={index}>
                    <div className='topBar' id={index} onDrag={(e) => changeIndexZToMax(e)} >
                      <div className='Btn closeBtn' id={index} onClick={(e) => handleClose(e)}>
                        <div className='mirror'>
                        <FontAwesomeIcon id={index} icon={faXmark} className="icon" />
                        </div>
                      </div>
                      <div className='Btn maxBtn' id={index}>
                      <div className='mirror'>
                      <FontAwesomeIcon id={index} icon={faWindowMaximize} className="icon" onClick={(e) => handleMaximize(e)}/>
                      </div>
                      </div>
                      <div id={index} onClick={(e) => handleMinimize(e)} className='Btn minBtn'>
                        <div className='mirror'>
                        <FontAwesomeIcon id={index} icon={faWindowMinimize} className="icon" />
                        </div>
                      </div>
                      <div id={index} className='title' onDrag={(e) => changeIndexZToMax(e)}>
                        <p id={index}>{element.title}</p>
                      </div>
                    </div>
                  </div>
                  {/*<img src={element.src} alt="project" />*/}
                </div>
              </Draggable>
            )
          })
          : null}
        {restartWindows ? setTimeout(() => { setProjects([...rememberedProjects]); setRestartWindows(false) }, 0) : null}
      </div>
      <div className='tasksBar'>
        <ul className='minimizedWindows' ref={minimizedWindowsElement}>
          {minimizedWindow.map((element: any, index: number) => {
            return (
              <li className='minimizedWindow' id={element.id} onClick={() => handleUnMinimize(element.id, index)} key={index}>
                <img src="https://i.postimg.cc/rp57qS8t/981-9817075-vector-free-what-is-microsoft-explorer-internet-explorer.png" alt="tasks" />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default Projects