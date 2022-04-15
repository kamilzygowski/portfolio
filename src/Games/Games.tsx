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
  const gamesInfoArr = [{title:'Dimension Eye', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  img:'https://i.postimg.cc/vHrrQTby/deprev.png', href:'https://swedishsailor.github.io/dimensioneye/'}]
  const allElems = document.querySelectorAll(".gamesLi")
  const liStyles: ListStyle[] = [{ z: 40, right: 600, width: 600, bottom: 0 }, { z: 35, right: 450, width: 600, bottom: 65 },
  { z: 30, right: 300, width: 600, bottom: 130 }, { z: 25, right: 150, width: 600, bottom: 195 }, { z: 20, right: 0, width: 600, bottom: 260 }];
  // Controll the state of being hovered (or not)
  const [isHovered, setHover] = useState(false);
  const [isClicked, setClick] = useState(false);
  const [gameInfo, setGameInfo] = useState({title:'Dimension Eye', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
   img:'https://i.postimg.cc/vHrrQTby/deprev.png', href:'https://swedishsailor.github.io/dimensioneye/'});

  useEffect(() => {
    allElems.forEach((element: any, index: number) => {
      element.style.bottom = `${liStyles[index].bottom}px`;
    });
  }, [])

  const handleMouseEnter = (e: any): void => {
    setHover(false)
    if (!isHovered) {
      allElems.forEach((element: any, index: number) => {
        if(element.style.bottom !== `${liStyles[index].bottom}px`){
          element.style.bottom = `${liStyles[index].bottom}px`;
        }  
        //console.log(element.style.right, liStyles[index].right)
      });    
      const thisElement:any = allElems[e.target.id-1];
      // Below basicly needs to get the outerWidth and subtract the WIDTH of element <right now its hardcoded>
      if(thisElement !== undefined){
        thisElement.style.bottom = `${450}px`;
        
      }
      setHover(true);
    }

  }
  const handleMouseLeave = (e: any): void => {

    //e.target.style.zIndex = liZIndexes[e.target.id - 1].z;
    //e.target.style.right = (liZIndexes[e.target.id - 1].right + (50*e.target.id - 1)) + 'px';
  }

  return (
    <div className='Games'>
            {isClicked ? <PopUp setClick={setClick} gameInfo={gameInfo}></PopUp> : null}
      <ul className='gamesUl'>
        {/* TITLE LINK*/}
        <li className='gamesLi' id="1">
          <div id="1" className='gameInfo' onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} onClick={() => setClick(true)} ><h3>Welcome to games section!</h3></div>
        </li>
        {/* DIMENSION EYE */}
        <li className='gamesLi' id="2">
          <div id="2" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} className='gameInfo' onClick={() => setClick(true)}><h3>Dimension Eye</h3></div>
        </li>
        {/* MOUSE SABRE */}
        <li className='gamesLi' id="3">
          <div id="3" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} className='gameInfo' onClick={() => setClick(true)}><h3>Mouse sabre</h3></div>
        </li>
        {/*MILION LASERS */}
        <li className='gamesLi' id="4">
          <div id="4" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} className='gameInfo' onClick={() => setClick(true)}><h3>milion lasers</h3></div>
        </li>
        {/* IT'S GONNA BE OK. */}
        <li className='gamesLi' id="5">
          <div id="5" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} className='gameInfo' onClick={() => setClick(true)}><h3>it's gonna be ok</h3></div>
        </li>
      </ul>
    </div>
  )
}

export default Games