import React from 'react'
import '../css/Nav.css'
const Nav = () => {
  return (
    <div className='nav nav_black'>
        <img
        className='nav_logo'
        src={`https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg`}
        alt="Netflix logo"
        />
        <img
        className='nav_avatar'
        src={`https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png`}
        alt="Netflix avatar"
        />

    </div>
  )
}
export default Nav;