import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header container'>
        <nav className='navbar'>
          <Link className='header__logo' to={"/"}>Logo</Link>

          <button type='button' onClick={() => window.open('https://github.com/yakhyo04')} className='black_btn'>GitHub</button>
        </nav>
    </header>
  )
}

export default Header