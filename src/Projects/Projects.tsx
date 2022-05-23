import React, { useRef, useState } from 'react'
import './Projects.scss'
import Draggable from 'react-draggable'
import { resolve } from 'path';
import { rejects } from 'assert';

interface Project {
    src: string;
    id: number;
}

const Projects = () => {
    const initialProjects = [
        { src: "https://i.postimg.cc/MpCrVwHw/planetraium.png", id: 0 },
        { src: "https://i.postimg.cc/zvCBj8Sg/franky.png", id: 1 },
        { src: "https://i.postimg.cc/3rzMz0xW/pexels-arina-krasnikova-6317441.jpg", id: 2 }
    ]
    const windowElement: any = useRef(null);
    const minimizedWindowsElement: any = useRef(null)
    const [projects, setProjects] = useState<Project[] | any>(initialProjects);
    const [minimizedWindow, setMinimizedWindows] = useState<Project[]>([])
    const handleWindowMove = (e: any) => {
        const windowsWindow: any = document.querySelector('.window');
        console.log(e)
        /*const mouseX = e.clientX;
        const mouseY = e.clientY;

        console.log(e.target.style)
        windowsWindow.style.position = 'absolute';
        windowsWindow.style.left = `${mouseX}px`;
        windowsWindow.style.zIndex = 55;*/
    }
    const handleClose = (e: any) => {
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
        //const newItem: any = minimizedWindow[id];
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
        handleClose(e);
        setMinimizedWindows([
            ...minimizedWindow,
            projects[e.target.id]
        ])
        // windowElement.current.style = "position: fixed; bottom:0; transform:scale(0.35); transition:0.7s; display:none"
        //const mirror = windowElement.cloneNode(false);
        //console.log(mirror)
        //mirror.style += 'background:url("https://i.postimg.cc/rp57qS8t/981-9817075-vector-free-what-is-microsoft-explorer-internet-explorer.png")'
        //console.log(windowElement.current)
        //minWindow.innerHTML = '<img src="https://i.postimg.cc/rp57qS8t/981-9817075-vector-free-what-is-microsoft-explorer-internet-explorer.png"/>'
        //minimizedWindowsElement.appendChild(minWindow)

    }
    const handleMaximize = () => {
        // On maximize we will create the window on almost whole screen displaying project info
    }
    
     const changeIndexZToMax = (e: any) => {
        const allWindows: any = document.querySelectorAll('.window')
        // At first change all windows Z Index to 50
        for (const window of allWindows) {
            console.log(window.style.zIndex)
            window.style.zIndex = 50;
        }
        // Then make THIS window Z Index 250
        allWindows[e.target.id].style.zIndex = 250;
        for (const window of allWindows) {
            console.log(window.style.zIndex);
        }
    }
    return (
        <div className='Projects'>
            {/*<iframe src="https://swedishsailor.github.io/portfolio-game/" className='iproject' title='portfolio game' />*/}
            <h3>Projects</h3>
            {/*<div className='interactivePortfolio'>
                <img src="https://i.postimg.cc/7Z3Lrxpt/sassss.png" alt="Interactive Portfolio" />
                <p>Checkout my interactive portfolio</p>
    </div>*/}
            <div className='projectsList' ref={windowElement}>
                {projects.map((element: any, index: number) => {
                    return (
                        <Draggable
                            axis="both"
                            grid={[2, 2]}


                        >
                            <div className='window' style={{ zIndex: 50 }} id={index.toString()} key={index}
onClick={(e) => changeIndexZToMax(e)} 

                            >
                                <div className='frame'>
                                    <div className='topBar' id={index.toString()} onClick={(e) => {console.log('xd'); changeIndexZToMax(e)}} >
                                        <div className='Btn closeBtn' id={index.toString()} onClick={(e) => handleClose(e)}>
                                        </div>
                                        <div className='Btn maxBtn'>
                                        </div>
                                        <div onClick={(e) => handleMinimize(e)} className='Btn minBtn' id={index.toString()}>
                                        </div>
                                    </div>
                                </div>
                                <img src={element.src} alt="project" />
                            </div>
                        </Draggable>
                    )
                })}
                {/*} <div className='window' draggable={true} id="0">
                    <div className='frame'><div className='topBar' draggable={true} onDragStart={(e) => handleWindowMove(e)}><div className='Btn closeBtn' id="0" onClick={(e)=> handleClose(e)}></div><div className='Btn maxBtn'></div><div onClick={(e) => handleMinimize(e)} className='Btn minBtn'></div></div></div>
                    <img src="https://i.postimg.cc/MpCrVwHw/planetraium.png" alt="project" />
                </div>
                <div className='window' draggable={true} id="1">
                    <div className='frame'><div className='topBar' draggable={true} onDragStart={(e) => handleWindowMove(e)}><div className='Btn closeBtn'></div><div className='Btn maxBtn'></div><div onClick={(e) => handleMinimize(e)} className='Btn minBtn'></div></div></div>
                    <img src="https://i.postimg.cc/MpCrVwHw/planetraium.png" alt="project" />
                </div>
                <div className='window'>
                    <div className='frame'><div className='topBar'><div className='Btn closeBtn'></div><div className='Btn maxBtn'></div><div className='Btn minBtn'></div></div></div>
                    <img src="https://i.postimg.cc/zvCBj8Sg/franky.png" alt="project" />
                </div> */}
            </div>
            <ul className='minimizedWindows' ref={minimizedWindowsElement}>
                {minimizedWindow.map((element: any, index: number) => {
                    return (
                        <li className='minimizedWindow' id={element.id} onClick={() => handleUnMinimize(element.id, index)} key={index}>
                            <img src="https://i.postimg.cc/rp57qS8t/981-9817075-vector-free-what-is-microsoft-explorer-internet-explorer.png" />
                            <p>{element.id}</p>
                        </li>
                    )
                })}

            </ul>

        </div>
    )
}

export default Projects
