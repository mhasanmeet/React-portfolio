import React from 'react'
import "./toggle.css"


const Toggle = () => {
  return (
    <div className='t'>
        <img src='../../img/sun.png' alt='Sun Daytime' className='t-icon'/>
        <img src='../../img/moon.png' alt="Moon nighttime" className="t-icon"/>
        <div className='t-button'></div>
    </div>
  )
}

export default Toggle