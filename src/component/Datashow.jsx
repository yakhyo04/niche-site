import React from 'react'
import { Link } from 'react-router-dom'

const Datashow = ({filteredItems}) => {
  return (
    <div>
    <div className='item__wrapper'>
    {filteredItems.map((item) => (
        <p className='item' key={item.id}><Link className='item__box' to={"/pages/" + item.id}>
            <img src={item.img} alt={item.title} width={"100px"} className='item__image' />
            <span>{item.title}</span>
        </Link></p>
      ))}
    </div>
    </div>
  )
}

export default Datashow