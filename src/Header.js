import React from 'react'
import logo from './hourglass.png'
import './Header.css'

function Header() {
  return (
   <nav class="navbar navbar-expand-md">
    <img class="navbar-brand headerlogo" src={logo}/>
    WELCOME
    <ul class="navbar-nav">
        <li>
            <a class="nav-link" href="">HOME</a>
        </li>
        <li>
        <a class="nav-link" href="">ABOUT</a>
        </li>
        <li>
        <a class="nav-link" href="">WHO</a>
        </li>
    </ul>

   </nav>
  )
}

export default Header