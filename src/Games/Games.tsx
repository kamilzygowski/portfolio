import { useEffect, useState } from 'react';
import './Games.scss'
import PopUp from './PopUp/PopUp';

interface ListStyle {
  z: number;
  right: number;
  width: number;
  bottom: number;
}

const Games = () => {
  const gamesInfoArr = [{
    title: 'Dimension Eye', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    techstack:['Unity'], img: 'https://i.postimg.cc/vHrrQTby/deprev.png', href: 'https://swedishsailor.github.io/dimensioneye/'
  },
  { title: 'Mouse Sabre', description: 'XDDDDD', techstack:['TypeScript', 'NodeJS', 'MySQL'], img: 'https://i.postimg.cc/13BhsVGk/mousesabre.png', href: 'https://swedishsailor.github.io/mousesabre/' },
  { title: 'Milion Lasers', description: 'XDDD', techstack:['Unity'], img: 'https://i.postimg.cc/fT4hKNWr/milion-lasers.png', href: 'https://swedishsailor.github.io/milionlasers/' },
  { title: `It's gonna be ok`, description: 'XDDD', techstack:['JavaScript'], img: 'https://i.postimg.cc/MKyJ3FvK/itsgonnabeok.png', href: 'https://marcodeevil.github.io/KRZYKAM-LD50/' },
  { title: 'Multi Arena', description: 'XDDDDDD', techstack:['JavaScript', 'NodeJS'], img: 'https://i.postimg.cc/Bn49rBK5/multiarena.png', href: 'https://swedishsailor.github.io/multiarena/' }]
  const allElems = document.querySelectorAll(".gamesLi")
  const liStyles: ListStyle[] = [{ z: 45, right: 750, width: 600, bottom: -65 },
  { z: 40, right: 600, width: 600, bottom: 0 },
  { z: 35, right: 450, width: 600, bottom: 65 },
  { z: 30, right: 300, width: 600, bottom: 130 },
  { z: 25, right: 150, width: 600, bottom: 195 },
  { z: 20, right: -100, width: 600, bottom: 260 }];
  // Controll the state of being hovered (or not)
  const [isHovered, setHover] = useState(false);
  const [isClicked, setClick] = useState(false);
  const [gameInfo, setGameInfo] = useState({
    title: 'Dimension Eye', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: 'https://i.postimg.cc/vHrrQTby/deprev.png', href: 'https://swedishsailor.github.io/dimensioneye/'
  });

  useEffect(() => {
    allElems.forEach((element: any, index: number) => {
      element.style.bottom = `${liStyles[index].bottom}px`;
    });
  }, [])

  const handleMouseEnter = (e: any): void => {


  }
  const handleMouseLeave = (e: any): void => {

    e.target.style.zIndex = liStyles[e.target.id - 1].z;
    e.target.style.right = (liStyles[e.target.id - 1].right + (50 * e.target.id - 1)) + 'px';
  }

  return (
    <div className='background'>
      <div className='Games'>
        <img className='gamesHeader' src="https://i.postimg.cc/zf7HKV0r/games-Header.png"/>
        {isClicked ? <PopUp setClick={setClick} gameInfo={gameInfo}></PopUp> : null}
        <ul className='gamesUl'>
          {/* TITLE LINK*/}
          {/*<li className='gamesLi' id="1">
            <div id="1" className='gameInfo' onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}></div>
          </li>*/}
          <li className='gamesLi' id="2">
            <div id="2" className='gameInfo' onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}
              onClick={(e: any) => {
                setGameInfo(gamesInfoArr[e.target.id - 2])
                setClick(true)
              }} ></div>
          </li>
          {/* DIMENSION EYE */}
          <li className='gamesLi' id="3">
            <div id="3" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} className='gameInfo'
              onClick={(e: any) => {
                setGameInfo(gamesInfoArr[e.target.id - 2])
                setClick(true)
              }}></div>
          </li>
          {/* MOUSE SABRE */}
          <li className='gamesLi' id="4">
            <div id="4" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} className='gameInfo'
              onClick={(e: any) => {
                setGameInfo(gamesInfoArr[e.target.id - 2])
                setClick(true)
              }}></div>
          </li>
          {/*MILION LASERS */}
          <li className='gamesLi' id="5">
            <div id="5" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} className='gameInfo'
              onClick={(e: any) => {
                setGameInfo(gamesInfoArr[e.target.id - 2])
                setClick(true)
              }}></div>
          </li>
          {/* IT'S GONNA BE OK. */}
          <li className='gamesLi' id="6">
            <div id="6" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} className='gameInfo'
              onClick={(e: any) => {
                setGameInfo(gamesInfoArr[e.target.id - 2])
                setClick(true)
              }}></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Games