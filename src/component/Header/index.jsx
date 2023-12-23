import { Link } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext';

const Header = () => {
  const {logOut, user} = useUserAuth();
  return (
    <header className='header'>
        <nav className='container navbar'>
          <Link className='header__logo' to={"/"}>Websites</Link>

          <div className='header__right'>
          <Link to={"/wishlist"} className='header__wishlist'>
            <img src={"/assets/heart.svg"} alt="wishlist-icon" width={"20px"} />
          </Link>
          {
            user ? <Link className='black_btn' variant="primary" to={"/profile"}>Profile</Link> : <Link to={'/pages/links'} className='black_btn'>Get Started</Link>
          }
          </div>
        </nav>
    </header>
  )
}

export default Header
// onClick={() => window.open('https://github.com/yakhyo04')}