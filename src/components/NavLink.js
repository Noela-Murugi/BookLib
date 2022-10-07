import React from 'react'
import {NavLink} from 'react-router-dom'
function NavBar() {
  return (
    <nav className='nav'>
        <NavLink exact to ="/" className="homepart">Home</NavLink>
        <NavLink to ="/about" className="homepart">About</NavLink>
        <NavLink to ="/morebooks" className="homepart">Other Books</NavLink>
    </nav>
  )
}
export default NavBar
