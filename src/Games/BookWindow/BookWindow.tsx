import React from 'react'
import { GamesInfo } from '../Games'
import './BookWindow.scss'


const BookWindow = (props:GamesInfo | any) => {
  return (
    <div className='BookWindow'>
        <div className='page1'>
          <h1 className='gameTitle'>{props.gamesInfo.title}</h1>
          <p className='gameDescription'>{props.gamesInfo.description}</p>
          <a href={props.gamesInfo.href} className='gameHref'>Link to the game</a>
        </div>
        <div className='page2'>
          <ul className='techStackUl'>
            <p className='techStackTitle'>Created with:</p>
          {props.gamesInfo.techstack.map((element:string) => {
         return <li className='techStackLi'>{element}</li>
        })}
          </ul>
        <img src={props.gamesInfo.img} alt="" className='gameImage'/>
        </div>
    </div>
  )
}

export default BookWindow