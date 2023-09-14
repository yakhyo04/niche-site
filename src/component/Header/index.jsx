import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header container'>
        <nav className='navbar'>
          <Link className='header__logo' to={"/"}>Websites</Link>

          <div className='header__right'>
          <Link to={"/wishlist"}>
            <img src={"/assets/heart.svg"} alt="wishlist-icon" width={"20px"} />
          </Link>
          <button type='button' onClick={() => window.open('https://github.com/yakhyo04')} className='black_btn'>GitHub</button>
          </div>
        </nav>
    </header>
  )
}

export default Header