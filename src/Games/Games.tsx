import React, { useEffect, useState } from 'react';
import './Games.scss'
import BookWindow from './BookWindow/BookWindow'

interface ListStyle {
  z: number;
  right: number;
  width: number;
  bottom: number;
}
export interface GamesInfo {
  title: string;
  description: string;
  techstack: string[];
  img: string;
  href: string;
}
const Games = (): JSX.Element => {
  const gamesInfoArr: GamesInfo[] = [{
    title: 'Dimension Eye', description: `2D platformer game. Your main quest is to find out what's goin on in this world.`,
    techstack: ['Unity'], img: 'https://i.postimg.cc/fbBxmVpK/deeee.webp', href: 'https://swedishsailor.github.io/dimensioneye/'
  },
  { title: 'Mouse Sabre', description: `Slay your enemies with magic sword, watch out enemies mutations, use your special ability "Samurai Slash"`, techstack: ['TypeScript', 'NodeJS', 'MySQL'], img: 'https://i.postimg.cc/WbTgW6Vn/mss.webp', href: 'https://swedishsailor.github.io/mousesabre/' },
  { title: 'Milion Lasers', description: '2D action coop game. You need one friend on hot-seat to take the challenge. Try to avoid all the obstacles and remember to be close to your partner', techstack: ['Unity'], img: 'https://i.postimg.cc/fT4hKNWr/milion-lasers.png', href: 'https://swedishsailor.github.io/milionlasers/' },
  { title: `It's gonna be ok`, description: 'Game created for Ludum Dare game jam in 4 hours. Delay the inevitable...', techstack: ['JavaScript'], img: 'https://i.postimg.cc/MKyJ3FvK/itsgonnabeok.png', href: 'https://marcodeevil.github.io/KRZYKAM-LD50/' },
  { title: 'Multi Arena', description: 'Online multiplayer 1 versus 1 arena game. Get a buddy, paste game code to him and fight!', techstack: ['JavaScript', 'NodeJS'], img: 'https://i.postimg.cc/Bn49rBK5/multiarena.png', href: 'https://swedishsailor.github.io/multiarena/' }]
  const allElems: NodeListOf<Element> = document.querySelectorAll(".gamesLi")
  const liStyles: ListStyle[] = [{ z: 45, right: 750, width: 600, bottom: -65 },
  { z: 40, right: 600, width: 600, bottom: 0 },
  { z: 35, right: 450, width: 600, bottom: 65 },
  { z: 30, right: 300, width: 600, bottom: 130 },
  { z: 25, right: 150, width: 600, bottom: 195 },
  { z: 20, right: -100, width: 600, bottom: 260 }];
  // Controll the state of being hovered (or not)
  const [isClicked, setClick] = useState<boolean>(false);
  const [chosenGameId, setChosenGameId] = useState<number>(0)
  const [gameInfo, setGameInfo] = useState<GamesInfo>({
    title: 'Dimension Eye', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: 'https://i.postimg.cc/vHrrQTby/deprev.png', href: 'https://swedishsailor.github.io/dimensioneye/', techstack: []
  });
  useEffect(() => {
    allElems.forEach((element: Element | any, index: number): void => {
      element.style.bottom = `${liStyles[index].bottom}px`;
    });
  }, [])
  const handleMouseLeave = (e: MouseEvent | any): void => {
    e.target.style.zIndex = liStyles[e.target.id - 1].z;
    e.target.style.right = (liStyles[e.target.id - 1].right + (50 * e.target.id - 1)) + 'px';
  }
  return (
    <div className='background'>
      {isClicked ? <div className='gamesMirror' onClick={() => setClick(false)} /> : null}
      {isClicked ? <BookWindow gamesInfo={gamesInfoArr[chosenGameId]} /> : null}
      {isClicked ? React.createElement('img', {
        className: 'bookGif', src: 'https://i.postimg.cc/ydvrDr6f/pbook.gif', onClick: (e: any) => {
          setClick(false)
        }
      }) : React.createElement('img', { style: { position: 'absolute' } })}
      <div className='Games'>
        <img className='gamesHeader' src="https://i.postimg.cc/cHDNFbVv/games-Header-POKELESS.webp" alt="Header" />
        <div className='coin'>
        </div>
        <ul className='gamesUl'>
          {/* TITLE LINK*/}
          {gamesInfoArr.map((element: GamesInfo, index: number) => {
            return (
              <li className='gamesLi' key={index} id={(index + 2).toString()} onClick={() => {
                setChosenGameId(index)
                setGameInfo(gamesInfoArr[index])
                setClick(true)
              }}>
                <div id={(index + 2).toString()} className='gameInfo' onMouseLeave={(e) => handleMouseLeave(e)}
                ></div>
              </li>
            )
          })
          }
        </ul>
      </div>
    </div>
  )
}

export default Games