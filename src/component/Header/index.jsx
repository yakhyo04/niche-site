import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext'

const Header = () => {
  const {logOut, user} = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async() => {
    try{
      await logOut();
      navigate("/login");
    }catch(err){
      console.log(err.message);
    }
  }
  return (
    <header className='header container'>
        <nav className='navbar'>
          <Link className='header__logo' to={"/"}>Websites</Link>

          <div className='header__right'>
          <Link to={"/wishlist"} className='header__wishlist'>
            <img src={"/assets/heart.svg"} alt="wishlist-icon" width={"20px"} />
          </Link>
          {
            user ? <button className='black_btn' variant="primary" onClick={handleLogout}>Logout</button> : <Link to={'/pages/links'} className='black_btn'>Get Started</Link>
          }
          </div>
        </nav>
    </header>
  )
}

export default Header
// onClick={() => window.open('https://github.com/yakhyo04')}