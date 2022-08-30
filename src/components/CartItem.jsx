import React from 'react'
import './CartItem.css'
import StarsRating from 'stars-rating';

// 
const CartItem = ({product, featured,exclusive, addToCart, onlineOnly, soldOut}) => {


    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

  return (
    <div className='cartItemContainer'>
           {featured && <div className="featureContainer">
                <span className="featureText">Feature Flyer</span> 
            </div> }
            {exclusive && <div className="exclusiveContainer">
                <span className="exclusiveText">Exclusive</span> 
            </div> }
            {/* {product.imageCollection.map((imgUrl,i)=>( */}
                <img src={product.imageCollection[0].url} alt={product.title} />
            {/* ))} */}
            
            <div className="productName">
                <span>{product.title.substring(0, 40)+'...'}</span>
               
            </div>
            <div className="productQty">
            <span>{product.quantity != "1" && product.quantity}</span>
            </div>
            <div className="starRating">
            <StarsRating            
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={'#333333'} />                
            </div>  
            <div className="productPriceContainer">
                <span className="productPrice">${product.price.toLocaleString()}</span>
            </div> 
            {soldOut && <div className="soldOutContainer">
                <span className="soldOut">Sold Out</span> 
            </div> }   
            {onlineOnly && <div className="onlineOnlyContainer">
                <span className="onlineOnly">Online Only</span> 
            </div> } 
            {addToCart && <div className="addToCartContainer">
                <button className="addToCart">Add To Cart</button> 
            </div> }            
    </div>



  )


CartItem.defaultProps ={
    featured : "false",
    exclusive: "false", 
    addToCart: "false", 
    onlineOnly: "false", 
    soldOut: "false"
}

}

export default CartItem
