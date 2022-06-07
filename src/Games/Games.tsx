import React, { useEffect, useState } from 'react';
import './Games.scss'
import PopUp from './PopUp/PopUp';
import BookWindow from './BookWindow/BookWindow'

interface ListStyle {
  z: number;
  right: number;
  width: number;
  bottom: number;
}
export interface GamesInfo{
  title: string;
  description: string;
  techstack: string[];
  img: string;
  href: string;
}
const Games = () => {
  const bookGif:any = React.createElement('img', {src:"https://i.postimg.cc/Jztj2NpP/op.gif", className:'bookGif'})
  const gamesInfoArr: GamesInfo[] = [{
    title: 'Dimension Eye', description: 'Lorem ipsum dolor sit amet, cation ullamco laboris nisi uvoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
  const [chosenGameId, setChosenGameId] = useState<number>(0)
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
  const handleMouseClick = (e:any): void => {
  }
  const handleMouseLeave = (e: any): void => {

    e.target.style.zIndex = liStyles[e.target.id - 1].z;
    e.target.style.right = (liStyles[e.target.id - 1].right + (50 * e.target.id - 1)) + 'px';
  }

  return (
    <div className='background'>
      {isClicked ? <div className='gamesMirror' onClick={() => setClick(false)}/> : null}
      {isClicked ? <BookWindow gamesInfo={gamesInfoArr[chosenGameId]}/> : null}
      {isClicked ?  React.createElement('img', {className:'bookGif', src:'https://i.postimg.cc/GtwZMPGf/SHORT.gif', onClick:(e:any) => {
        setClick(false)
      }}) : React.createElement('img', {style:{position: 'absolute'}})}
      {/*isClicked ? <img src='https://i.postimg.cc/GtwZMPGf/SHORT.gif' className='bookGif' alt="" onClick={() => setClick(false)} /> : null*/}
      <div className='Games'>
        <img className='gamesHeader' src="https://i.postimg.cc/nzw3dQvs/games-Header-POKELESS.png"/>
        {/*isClicked ? <PopUp setClick={setClick} gameInfo={gameInfo}></PopUp> : null*/}
        <ul className='gamesUl'>
          {/* TITLE LINK*/}
          {gamesInfoArr.map((element:any, index:number) => {
            return(
            <li className='gamesLi' key={index} id={(index+2).toString()} onClick={(e: any) => {
              setChosenGameId(index)
              setGameInfo(gamesInfoArr[index])
              setClick(true)
              handleMouseClick(e)
            }}>
          <div id={(index+2).toString()} className='gameInfo' onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}
             ></div>
        </li>
          )})
        }
          {/*<li className='gamesLi' id="1">
            <div id="1" className='gameInfo' onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}></div>
          </li>*/}

        </ul>
      </div>
    </div>
  )
}

export default Games