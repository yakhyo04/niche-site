import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container'>
        <div className='footer__wrapper'>
            <div className='footer__content'>
                <Link className='header__logo footer__logo' to={"/"}>Websites</Link>
            </div>
            <ul className='footer__menu'>
                <li className='footer__menu--item'>
                    <a href="/" className='footer__menu--link'>Telegram</a>
                </li>
                <li className='footer__menu--item'>
                    <a href="/" className='footer__menu--link'>Instagram</a>
                </li>
                <li className='footer__menu--item'>
                    <a href="/" className='footer__menu--link'>Facebook</a>
                </li>
                <li className='footer__menu--item'>
                    <a href="/" className='footer__menu--link'>Twitter</a>
                </li>
                <li className='footer__menu--item'>
                    <a href="/" className='footer__menu--link'>Youtube</a>
                </li>
            </ul>
        </div>
        <p className='footer__bottom'>© 2023 Resources and Links, Inc. All rights are reserved.</p>
        </div>
    </footer>
  )
}

export default Footer