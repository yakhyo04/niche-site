import { useState } from "react"
import { Link } from "react-router-dom";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState(
        JSON.parse(localStorage.getItem('wishlist')) || []
      );

      function toggleWishlist(item){
        const itemIndex = wishlist.findIndex((wishedItem) => wishedItem.id === item.id);
        let updatedWishlist;
  
        if(itemIndex === -1){
          updatedWishlist = [...wishlist, item]
        }else{
          updatedWishlist = [...wishlist];
          updatedWishlist.splice(itemIndex, 1);
        }
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
      }
  return (
    <div className="wishlist">
        <div className="container">
            <div className={!wishlist.length && "wishlist__content"}>
            <h3 className="wishlist__title orange_gradient">Wishlist</h3>
            {
                wishlist.length ? (
                    <div className='item__wrapper'>
            {
                wishlist.map((item) => <div className="item" key={item.id}>
                    <Link className='item__box' to={"/pages/" + item.id}>
                        <img className='item__image' alt={item.title} width={"100px"} src={item.img} />
                        <span>{item.title}</span>
                    </Link>
                    <button className='wishlist__button' onClick={() => toggleWishlist(item)}>
                        {
                            wishlist.some((wishedItem) => wishedItem.id === item.id) ? <img src={"/assets/heart-red.svg"} alt="wishlist" width={"20px"} /> : <img src={"/assets/heart.svg"} alt="wishlist" width={"20px"} />
                        }
                    </button>
                </div>)
            }
            </div>
                ) : (
                    <Link to={"/"} className='desc'>Add Items to your wishlist</Link>
                )
            }
            </div>
        </div>
    </div>
  )
}

export default Wishlist