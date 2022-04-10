import { useState } from 'react';
import './Games.scss'

interface ListStyle{
  z: number;
  right:number;
  width: number;
}

const Games = () => {
  // Controll the state of being hovered (or not)
  const [isHovered, setHover] = useState(false);

  const liStyles: ListStyle[]= [{z:40, right:500, width:600}, {z:35, right:375, width:600}, {z:30, right:250, width:600}, {z:25, right:125, width:600}, {z:20, right:0, width:600}];

  const handleMouseEnter = (e: any): void => {
    setHover(false)
    if(!isHovered){
      const allElems = document.querySelectorAll(".gamesLi")
      allElems.forEach((element:any, index:number) => {
        element.style.right = `${liStyles[index].right}px`;
        console.log(element.style.right, liStyles[index].right)
        element.style.zIndex = liStyles[index].z;
      });
      console.log(allElems)
  
      const thisElement = e.target;
      thisElement.style.zIndex = 2000;
      // Below basicly needs to get the outerWidth and subtract the WIDTH of element <right now its hardcoded>
      thisElement.style.right = `${window.outerWidth - 700}px`;
      setHover(true);
    }


  }
  const handleMouseLeave = (e: any): void => {

    //e.target.style.zIndex = liZIndexes[e.target.id - 1].z;
    //e.target.style.right = (liZIndexes[e.target.id - 1].right + (50*e.target.id - 1)) + 'px';
  }

  return (
    <div className='Games'>
      <ul className='gamesUl'>
        {/* TITLE LINK*/}
        <li onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} className='gamesLi' id="1">
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