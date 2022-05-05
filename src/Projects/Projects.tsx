import React, { useRef, useState } from 'react'
import './Projects.scss'

interface Project {
    src: string;
}

const Projects = () => {
    const windowElement: any = useRef(null);
    const minimizedWindowsElement: any = useRef(null)
    const [projects, setProjects] = useState<Project[]>([{ src: "https://i.postimg.cc/MpCrVwHw/planetraium.png" }, { src: "https://i.postimg.cc/zvCBj8Sg/franky.png" }]);
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
        // Fix the array to remove this window
        setProjects([
            ...projects.slice(0, e.target.id),
            ...projects.slice(e.target.id + 1)
        ])
    }
    const handleUnMinimize = (e: any) => {

        // Then display the window again on the main screen
        setProjects([
            ...projects,
            ...[minimizedWindow[e.target.id]]
        ])
        // First delete the minimized icon 
        setMinimizedWindows([
            ...minimizedWindow.slice(0, e.target.id),
            ...minimizedWindow.slice(e.target.id + 1)
        ])


    }
    const handleMinimize = (e: any) => {

        handleClose(e);
        setMinimizedWindows([
            ...[projects[e.target.id]],
            ...minimizedWindow
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
                        <div className='window' draggable={true} id={index.toString()} key={index}>
                            <div className='frame'>
                                <div className='topBar' draggable={true} onDragStart={(e) => handleWindowMove(e)}>
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
                        <li className='minimizedWindow' onClick={(e) => handleUnMinimize(e)} id={index.toString()} key={index}>
                            <img src="https://i.postimg.cc/rp57qS8t/981-9817075-vector-free-what-is-microsoft-explorer-internet-explorer.png" />
                        </li>
                    )
                })}

            </ul>

        </div>
    )
}

export default Projects
