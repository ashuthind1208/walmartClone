import React from 'react'
import CartItem from './CartItem'
import {useState, useEffect} from 'react'

const BestSellers = () => {

    const [bestSellerItem, setBestSellerItem] = useState([]);

    const fetchData = async() =>{

        const data = await fetch('http://localhost:5000/items/?bestSeller=true');
        const items = await data.json();
        setBestSellerItem(items);

    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='bestSellerContainer'>
            {bestSellerItem.map((product, i)=>(
                <CartItem key={i} product = {product} addToCart="true" />
            ))}
            
        </div>
    )
}

export default BestSellers
