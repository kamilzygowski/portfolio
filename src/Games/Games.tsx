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
  const allElems = document.querySelectorAll(".gamesLi")
  const liStyles: ListStyle[] = [{ z: 40, right: 600, width: 600, bottom: 0 }, { z: 35, right: 450, width: 600, bottom: 65 },
  { z: 30, right: 300, width: 600, bottom: 130 }, { z: 25, right: 150, width: 600, bottom: 195 }, { z: 20, right: 0, width: 600, bottom: 260 }];
  // Controll the state of being hovered (or not)
  const [isHovered, setHover] = useState(false);
  const [isClicked, setClick] = useState(false);

  useEffect(() => {
    allElems.forEach((element: any, index: number) => {
      element.style.bottom = `${liStyles[index].bottom}px`;
    });
  }, [])

  const handleMouseEnter = (e: any): void => {
    setHover(false)
    if (!isHovered) {
      allElems.forEach((element: any, index: number) => {
        element.style.bottom = `${liStyles[index].bottom}px`;
        console.log(element.style.right, liStyles[index].right)
      });
      console.log(allElems)
      const thisElement = e.target;
      // Below basicly needs to get the outerWidth and subtract the WIDTH of element <right now its hardcoded>
      thisElement.style.bottom = `${450}px`;
      setHover(true);
    }

  }
  const handleMouseLeave = (e: any): void => {

    //e.target.style.zIndex = liZIndexes[e.target.id - 1].z;
    //e.target.style.right = (liZIndexes[e.target.id - 1].right + (50*e.target.id - 1)) + 'px';
  }

  return (
    <div className='Games'>
            {isClicked ? <PopUp></PopUp> : null}
      <ul className='gamesUl'>
        {/* TITLE LINK*/}
        <li onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} onClick={() => setClick(true)} className='gamesLi' id="1">
          <div className='gameInfo'><h3>Welcome to games section!</h3></div>
        </li>
        {/* DIMENSION EYE */}
        <li onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} className='gamesLi' id="2">
          <div className='gameInfo'><h3>Dimension Eye</h3></div>
        </li>
        {/* MOUSE SABRE */}
        <li onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} className='gamesLi' id="3">
          <div className='gameInfo'><h3>Mouse sabre</h3></div>
        </li>
        {/*MILION LASERS */}
        <li onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} className='gamesLi' id="4">
          <div className='gameInfo'><h3>milion lasers</h3></div>
        </li>
        {/* IT'S GONNA BE OK. */}
        <li onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} className='gamesLi' id="5">
          <div className='gameInfo'><h3>it's gonna be ok</h3></div>
        </li>
      </ul>
    </div>
  )
}

export default Games