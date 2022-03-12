import React, { useEffect, useState, useRef } from 'react'
import './Hero.scss'

interface skillItem {
    src: string;
    alt: string;
    pos: number;
}

// This func create UseEffect action but without initial render!
// We use it to load the skills items rendered
const useDidMountEffect = (func: CallableFunction, deps?: any[]):void => {
    const didMount = useRef<boolean>(false);

    useEffect(():void => {
        if (didMount.current) {
            func();
        } else {
            didMount.current = true;
        }
    }, deps);
};

const Hero = () => {
    const [offset, setOffset] = useState<{x:number,y:number,delta:number}>({ x: 0, y: 0, delta: 10 })
    const skillsData:skillItem[] = [{ src: 'https://i.postimg.cc/vmQ2YB7F/icons8-adobe-photoshop-480.png', alt: 'Photoshop', pos: 50 },
    { src: 'https://i.postimg.cc/XJPskkR4/icons8-git-512.png', alt: 'Git', pos: 150 },
    { src: "https://i.postimg.cc/8zDgvTdw/icons8-html-5-480.png", alt: 'HTML', pos: 250 },
    { src: "https://i.postimg.cc/9M0x9nNL/icons8-javascript-480.png", alt: 'Javascript', pos: 350 },
    { src: 'https://i.postimg.cc/d04HLYn7/icons8-mysql-logo-384.png', alt: 'SQL', pos: 450 },
    { src: "https://i.postimg.cc/wxyz8fT5/icons8-react-500.png", alt: 'React', pos: 550 },
    { src: "https://i.postimg.cc/8crtKrGW/icons8-redux-500.png", alt: 'Redux', pos: 650 },
    { src: "https://i.postimg.cc/3rsTKXds/icons8-sass-480.png", alt: 'Sass', pos: 750 },
    { src: "https://i.postimg.cc/dDPnztQf/icons8-typescript-480.png", alt: 'Typescript', pos: 850 },
    { src: "https://i.postimg.cc/HsbCjrMV/icons8-unity-480.png", alt: 'Unity', pos: 950 }]

    const [circleContainer, setCircleContainer] = useState<any>(null);

    let [start,setStart] = useState<number>(0);


    useEffect(():void => {
        const rendering:NodeJS.Timer = setInterval(():void=>{
            setStart(start++)
        }, 25)
    }, [])

    let type:number = 1,//circle type - 1 whole, 0.5 half, 0.25 quarter
        radius:string = '220px';
        //start = 0;

    const firstRender = useRef<boolean>(false);

    useDidMountEffect(():void => {
        let numberOfElems:number = (type === 1) ? Array.from(circleContainer.children).length : Array.from(circleContainer.children).length - 1
        let slice:number = 360 * type / numberOfElems;

        Array.from(circleContainer.children).forEach((elem: any, index: number):void => {

            let rotate:number = slice * index + start;
            let rotateReverse:number = rotate * -1;
            elem.style.transform = 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'

        })

    })





    return (
        <div className='Hero'>
            <div className='info'>
                <div className='skillsImages'>
                    <ul className='list' ref={function (element: any) { setCircleContainer(element) }}>
                        {skillsData.map((element: any, index: number) => {
                            return <li className='listItem' key={index}  style={
                                {
                                    position: 'absolute',
                                    left: `${offset.x + (window.innerWidth/6 - 70)}px`,
                                    top: `${offset.y + (window.innerHeight/2 - 150)}px`
                                }}><img src={element.src} alt={element.alt} /><p>{element.alt}</p></li>
                        })}
                    </ul>
                </div>
            </div>
            {/*<div className='photoContainer'>
                <img src="https://i.postimg.cc/QMkKjN87/DUOTONE.png" alt="me" className='profilePhoto' />
                    </div>*/}
        </div>
    )
}

export default Hero