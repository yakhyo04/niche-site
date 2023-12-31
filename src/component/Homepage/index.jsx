import React, { createContext, useEffect, useState } from 'react'
import { data } from '../../data/data';
import Datashow from '../Datashow';
// import { useContext } from 'react';
// import { LevelContext } from '../../context/LevelContext';
export const CountConxtext = createContext();

const Homepage = () => {
    const [links, setLinks] = useState(data);
    const [searchField, setSearchField] = useState('');
    const [selectField, setSelectField] = useState('All');
    const [wishlist, setWishlist] = useState(
      JSON.parse(localStorage.getItem('wishlist')) || []
    );

    // const level = useContext(LevelContext);

    function filterItems(){
        let filtered = data;

        if(selectField !== 'All'){
            filtered = filtered.filter((item) => item.category === selectField)
        }

        if(searchField){
            filtered = filtered.filter((item) => item.title.toLowerCase().includes(searchField.toLowerCase()))
        }

        setLinks(filtered);
    }

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

    useEffect(() => {
      filterItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectField, searchField])

  return (
    <div className='homepage__wrapper container'>

        <div class="search__wrapper">
            <input onChange={(e) => setSearchField(e.target.value)} className='homepage__search' type='text' placeholder='Search' />
            <select className='homepage__search homepage__select' onChange={(e) => setSelectField(e.target.value)}>
                <option value={"All"}>All categories</option>
                {Array.from(new Set(data.map((item) => item.category))).map(
                    (category) => (
                      <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    )
                  )}
            </select>
        </div>

        <Datashow filteredItems={links} wishlist={wishlist} toggleWishlist={toggleWishlist} />
    </div>
  )
}

export default Homepage