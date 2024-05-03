import React from 'react'
import logo from '../images/troll-face-png-1.png'
import "../css/style.css"
export const Header=() =>{
  return (
   <header className='header'>
    <img src={logo} className='header--image'>
    </img>
    <h2 className='header--title'>Meme Generator</h2>
    <h4 className='header--project'>React Course -Project 2</h4>

   </header>
  )
}

