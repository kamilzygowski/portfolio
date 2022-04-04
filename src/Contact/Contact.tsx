import React from 'react'

const Contact = () => {
  return (
    <div className="Contact">
          <form className='mailerForm'>
          <input className='mailerName' type="text" placeholder='Your name...'></input>
      <input className='mailerSubject' type="text" placeholder='E-mail subject...'></input>
      <input className='mailerMessage' type="textarea" placeholder='Message...'></input>
      <button type="submit" className='mailerSubmit'>Send</button>
      </form>
    </div>
  )
}

export default Contact