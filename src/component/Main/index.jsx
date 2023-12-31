import React from 'react'
import { Link } from 'react-router-dom'
import anytime from './../../images/anytime.avif';
import ljhooker from './../../images/ljhooker.avif';
import yaco from './../../images/yaco.png';
import ReviewSection from '../Review-Section';
import bestsites from './../../images/bestsites.png';
import { useUserAuth } from '../../context/UserAuthContext';

const Main = () => {
  const { user } = useUserAuth();
  return (
    <div className='main'>
        <Link to={"https://ai-summarize.netlify.app/"} className='main__span'>🔥 New: AI Summarizer...</Link>
        <h1 className='head_text'>
        Streamline access to essential <br className='max-md:hidden'/>
        <span className='orange_gradient'>Websites, Resources and Links. </span>
        </h1>

        <h2 className='desc'>
        Discover a convenient one-stop destination for all your resources and links.
        </h2>

        {
          user ? <Link to={"/pages/links"} className='main__link'>Get all websites links</Link> : <Link to={"/pages/links"} className='main__link'>Get started for free</Link>
        }

        <p className='main__description'>
        Trusted daily by growing brands and agencies around the world including:
        </p>
        <div className='main__images'>
            <img className='main__image' src={anytime} alt="anytime" />
            <img className='main__image' src={yaco} alt="yaco" />
            <img className='main__image' src={ljhooker} alt="ljhooker" />
        </div>

        <div className='main__image--wrapper'>
          <img src={bestsites} alt="Best sites" />
        </div>

        <ReviewSection/>
    </div>
  )
}

export default Main