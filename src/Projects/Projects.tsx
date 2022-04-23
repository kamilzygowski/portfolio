import React, { useState } from 'react'
import './Projects.scss'

interface Project {
    src: string;
}

const Projects = () => {
    const [project, setProjects] = useState<Project[]>([{ src: 'essa' }]);
    const handleWindowMove = (e:any) => {
        const windowsWindow:any = document.querySelector('.window');
        console.log(e)
        /*const mouseX = e.clientX;
        const mouseY = e.clientY;

        console.log(e.target.style)
        windowsWindow.style.position = 'absolute';
        windowsWindow.style.left = `${mouseX}px`;
        windowsWindow.style.zIndex = 55;*/
    }
    const handleClose = () => {

    }
    const handleMinimize = () => {

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
            <div className='projectsList'>
                <div className='window' draggable={true}>
                    <div className='frame'><div className='topBar' draggable={true} onDragStart={(e) => handleWindowMove(e)}><div className='Btn closeBtn'></div><div className='Btn maxBtn'></div><div className='Btn minBtn'></div></div></div>
                    <img src="https://i.postimg.cc/MpCrVwHw/planetraium.png" alt="project" />
                </div>
                <div className='window'>
                    <div className='frame'><div className='topBar'><div className='Btn closeBtn'></div><div className='Btn maxBtn'></div><div className='Btn minBtn'></div></div></div>
                    <img src="https://i.postimg.cc/zvCBj8Sg/franky.png" alt="project" />
                </div>
            </div>


        </div>
    )
}

export default Projects
