import React, { useEffect, useRef, useState } from 'react'
import { PiHeart } from 'react-icons/pi'
import { TbShoppingBagPlus } from "react-icons/tb";
import { IoStar } from "react-icons/io5";
import { BiPurchaseTagAlt, BiSolidPurchaseTagAlt } from "react-icons/bi";

import "./styles/card.css"
export const Card = ({id, images, title, description, price, discount, rating, reviews, availabilityStatus, stock}) => {

  const oldPrice = (parseFloat(price)/(1-(parseFloat(discount)/100))).toFixed(2);
  const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  return (
    <div className="card">
      <img src={images[index]} className="card-img" alt={title} />
      <div className="stats">
        <div className="card-reviews">
          <span className="total-reviews"><IoStar className="rating-star" />{rating} ({reviews.length})</span>
        </div>
        <div className="availability">
          <span className="availabilityStatus">{availabilityStatus} <span className="quantity">({stock})</span></span>
        </div>
      </div>
      <h3 title={title}>{title}</h3>
      <p title={description}>{description.substring(0, 75)}...</p>
      <div className="card-price">
        <div className="price">
          <del>₹{(parseFloat(oldPrice)*25).toFixed(2)}</del> 
          <span>₹{(parseFloat(price)*25).toFixed(2)}</span>
        </div>
        <span className="discount">-{discount}%</span>
      </div>
      <div className="action">
        <button><TbShoppingBagPlus />Add to Cart</button>
        <button><BiPurchaseTagAlt />Buy Now</button>
        <button><PiHeart /></button>
      </div>
    </div>
  )
}
