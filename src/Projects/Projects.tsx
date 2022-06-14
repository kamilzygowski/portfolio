import React, { useEffect, useRef, useState } from 'react'
import './Projects.scss'
import Draggable from 'react-draggable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight, faMaximize, faWindowMaximize, faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons';
import { url } from 'inspector';

interface Project {
  src: string;
  id: number;
  title: string;
  iframe: string;
  header?: string;
  image?: string;
}
const Projects = () => {
  const initialProjects: Project[] = [
    { src: "https://i.postimg.cc/W3YLg7v8/planetarium-Logo.webp", id: 0, title: 'Planetarium', iframe: "https://swedishsailor.github.io/planetarium/", header: '3D solar system model created with 3JS library', image:'https://i.postimg.cc/xdW8z7rf/CkZ.gif'},
    { src: "https://i.postimg.cc/Fzhvh6GP/frankycars-Logo-1.webp", id: 1, title: 'Franky Cars', iframe: "https://swedishsailor.github.io/frankyCars/", header:"Car Warehouse ", image:"https://i.postimg.cc/FzGhDC6J/EaH.gif"},
    { src: "https://i.postimg.cc/kg0q1CBS/ss.webp", id: 2, title: 'Old Portfolio', iframe: "https://swedishsailor.github.io/", header:"", image:"https://i.postimg.cc/ZRMcpJb9/1sDf.gif" },
    { src: "https://i.postimg.cc/JzTzPjMy/dit.webp", id: 3, title: 'Deep in topic', iframe: "https://deepintopic.pl/", header:"", image:"https://i.postimg.cc/fTkGGbtP/2vCZ.gif"},
  ]
  const hardCodedBasicSizes:any = {width:420 + 'px', height: 340 + 'px'}
  const hardCodedMaximize = {width: 938+'px', height:660+'px'}
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
  const arrangeWindows = () => {
    const allWindows: any = document.querySelectorAll('.window')
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    console.log(allWindows, screenWidth, screenHeight)
    for (let i=0; i<allWindows.length; i++){
      allWindows[i].style.left = (i * (screenWidth/allWindows.length - 60) + 20) + 'px'
      allWindows[i].style.top = (i * (screenHeight/allWindows.length - 40) + 20) + 'px'
      console.log(allWindows[i].style.left, allWindows[i].style.top)
    }
  }
  const handleMaximize = (e:any) => {
    let id = e.target.id;
    if (e.target.localName === "path"){
      id = e.target.parentNode.id
    }
    console.log('id : ', id)
    const windows:any = document.querySelectorAll('.window');
    const projectImg:any = document.querySelectorAll('.projectImg')
    console.log(windows[id].style.width)
    if(windows[id].style.width === hardCodedMaximize.width){
      windows[id].style.width = hardCodedBasicSizes.width
      windows[id].style.height = hardCodedBasicSizes.height
     // projectImg[id].style.marginTop = -343 + 'px'
    }else if (windows[id].style.width === hardCodedBasicSizes.width){
      windows[id].style.width = hardCodedMaximize.width;
      windows[id].style.height = hardCodedMaximize.height;
     //projectImg[id].style.marginTop = -662 + 'px'
    }
    // Set the information display on maxButton click
    const projectInfoContainers:any = document.querySelectorAll('.projectInfoContainer')
    projectInfoContainers[id].style.display !== 'flex' ? projectInfoContainers[id].style.display = 'flex' : projectInfoContainers[id].style.display = 'none'
  }
  const changeIndexZToMax = (e: any) => {
    const allWindows: any = document.querySelectorAll('.window')
    setZCounter(zCounter+1)
    // make THIS window Z Index 250 + counter
    if (allWindows[e.target.id] !== undefined)
      allWindows[e.target.id].style.zIndex = 250 + zCounter;
  }
  const restartComponent = () => {
    const windows: NodeListOf<Element | any> = document.querySelectorAll('.window');
    arrangeWindows()
    for(let i = 0; i<windows.length; i++){
      windows[i].style.width = hardCodedBasicSizes.width
      windows[i].style.height = hardCodedBasicSizes.height
    }
  }
  const createInfoContent = () => {

    return (
      <p> XD </p>
    )
  }
  useEffect(() => {
    setRememberedProjects([...projects])
    const windows: NodeListOf<Element | any> = document.querySelectorAll('.window');
    arrangeWindows()
    for(let i = 0; i<windows.length; i++){
      windows[i].style.width = hardCodedBasicSizes.width
      windows[i].style.height = hardCodedBasicSizes.height
    }
  }, [])
  return (
    <div className='Projects'>
      <h1 className='projectsHeader'>Projects</h1>
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
                  <img src={element.src} className="projectImg" id={index} alt="project" draggable="false" onDrag={(e) => changeIndexZToMax(e)} onClick={(e) => changeIndexZToMax(e)}/>
                  <div className='projectInfoContainer' style={{background: `url(${element.image})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
                    <p className='header'>{element.header}</p>
                    <a className='linkTo' href={element.iframe}> link to the app </a>
                    </div>
                  {/*<iframe src={element.iframe} className="projectImg" id={index} draggable="false" onDrag={(e) => changeIndexZToMax(e)} onClick={(e) => changeIndexZToMax(e)}/>*/}
                </div>
              </Draggable>
            )
          })
          : null}
        {restartWindows ? setTimeout(() => { setProjects([...rememberedProjects]); setRestartWindows(false); restartComponent()}, 0) : null}
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