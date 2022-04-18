import React from 'react'
import './PopUp.scss'

const PopUp = (props: any) => {
  return (
    <div className='PopUp' onClick={() => props.setClick(false)}>
      <div className='window'>
        <div className='info'>
          <div className='text'>
            <h2> {props.gameInfo.title} </h2>
            <ul className='techstackUl'>
              {props.gameInfo.techstack.map((element: any) => {
               return <li className='techstack'>{element}</li>
              })}
            </ul>
            <p className='description'>
              {props.gameInfo.description}
            </p>
            <a className='gameLink' href={props.gameInfo.href}> Check out </a>
          </div>
          <img src={props.gameInfo.img} alt="game preview" className='descriptionImg'></img>
        </div>
      </div>
    </div>
  )
}

export default PopUp