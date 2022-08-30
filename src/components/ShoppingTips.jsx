import React from 'react'
import {useState, useEffect} from 'react'
import './ShoppingTips.css'

const ShoppingTips = () => {

 const [tips, setTips] = useState([]);

 useEffect(() => {
    fetchTips();
 }, [])

 const fetchTips = async() =>{
    const data = await fetch('http://localhost:5000/shoppingtips');
    const response = await data.json();
    setTips(response);
    return;
 }

  return (
    <div className='shoppingTipsContainer'>
      {tips.map((item, i)=>(
        <div key={i} className='shoppingTipsItemContainer'>
            <img className='tipsImg' src={item.imageUrl} key={i} />
            <span className='tipsText'>{item.text}</span>
        </div>
      ))}
    </div> 
  )
}

export default ShoppingTips
