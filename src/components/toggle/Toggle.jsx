import React from 'react'
import "./toggle.css"
import { ThemeContext } from '../../context';
import { useContext } from 'react'


const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () =>{
    theme.dispatch({type: "TOGGLE"})
  }
  return (
    <div className='t'>
        <img src='../../img/sun.png' alt='Sun Daytime' className='t-icon'/>
        <img src='../../img/moon.png' alt="Moon nighttime" className="t-icon"/>
        <div className='t-button' onClick={handleClick} style={{
            left: theme.state.darkMode ? 0 : 25, 
            backgroundColor: theme.state.darkMode ? "white" : "black"
          }}></div>
    </div>
  )
}

export default Toggle