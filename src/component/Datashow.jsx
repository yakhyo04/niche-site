import React from 'react'
import { Link } from 'react-router-dom'

const Datashow = ({filteredItems, wishlist, toggleWishlist}) => {
  return (
    <div>
    <div className='item__wrapper'>
    {filteredItems.map((item) => (
        <div className='item' key={item.id}><Link className='item__box' to={"/pages/" + item.id}>
            <img src={item.img} alt={item.title} width={"100px"} className='item__image' />
            <span>{item.title}</span>
        </Link>
        <button className='wishlist__button' onClick={() => toggleWishlist(item)}>
          {
            wishlist.some((wishedItem) => wishedItem.id === item.id) ? <img src={"/assets/heart-red.svg"} alt="wishlist" width={"20px"} className='button_red' /> : <img src={"/assets/heart.svg"} alt="wishlist" width={"20px"} />
          }
        </button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Datashow