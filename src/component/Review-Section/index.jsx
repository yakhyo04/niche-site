import React from 'react'
import review_image from './../../images/review-image.jpeg';

const ReviewSection = () => {
  return (
    <section className='review-section'>
        <div className='container'>
            <div className='review-section__wrapper'>
                <span className='review-section__span'>Why choose <a href='/'>Best-sites</a>?</span>
                <h2 className='review-section__title'>If you're looking for a social media management tool that's easy to use, jam-packed with powerful features, but doesn't break the bank, then we think you'll love <a href='/'>Best-sites</a>.</h2>
                <p className='review-section__description'>"It's intuitive, beautiful, functional, and truly an all in one solution to your organic social media management."</p>
                <img className='review-section__image' width={"50px"} height={"50px"} src={review_image} alt='Profile' />
                <p className='review-section__name'><strong><i>Jessica W.</i></strong></p>
                <p className='review-section__span'>Social Media Agency</p>
            </div>
        </div>
    </section>
  )
}

export default ReviewSection