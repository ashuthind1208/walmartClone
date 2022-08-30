import React from 'react'
import CartItem from './CartItem'
import {useState, useEffect} from 'react'


const Featured = () => {

    const [featuredItems, setFeaturedItems] = useState([]);

    const fetchData = async() =>{

        const data = await fetch('http://localhost:5000/items/?featured=true');
        const items = await data.json();
        setFeaturedItems(items);

    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div className="flyerFeatureShopItems">
         {featuredItems.map((product, i)=>(
           <CartItem key={i} product={product} featured="true" />
         ))}        
        </div>
    )
}

export default Featured
