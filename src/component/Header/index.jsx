import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header container'>
        <nav className='navbar'>
          <Link className='header__logo' to={"/"}>Websites</Link>

          <div className='header__right'>
          <Link to={"/wishlist"} className='header__wishlist'>
            <img src={"/assets/heart.svg"} alt="wishlist-icon" width={"20px"} />
          </Link>
          <a href='/pages/links' type='button' className='black_btn'>Get Started</a>
          </div>
        </nav>
    </header>
  )
}

export default Header
// onClick={() => window.open('https://github.com/yakhyo04')}