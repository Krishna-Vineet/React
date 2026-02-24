import React, { useContext, useEffect } from 'react'
import { Card } from './Card'
import './styles/products.css'
import { Data } from './Container'
export const Products = () => {
  const {data, category, brand, price, discount, rating, availability, search} = useContext(Data);


  const products = data && data.filter(item => (category === 'categoryAll' ? true : item.category === category) && (item.title.toLowerCase().includes(search.trim().toLowerCase())) && (brand === 'brandAll' ? true : item.brand === brand) && (availability === 'availabilityAll' ? true :  item.availabilityStatus === availability) && (item.price >= price.min) && (item.price <= price.max) && (item.discountPercentage >= discount.min) && (item.discountPercentage <= discount.max) && (item.rating >= rating.min) && (item.rating <= rating.max));
  
  return (
    <div className="products">
     {
      products && products.length > 0
        ?
        products.map(item => (
          <Card key={item.id} images={item.images} category={item.category} brand={item.brand} title={item.title} description={item.description} price={item.price} discount={item.discountPercentage} rating={item.rating} reviews={item.reviews} availabilityStatus={item.availabilityStatus} stock={item.stock} />
        ))
          :
        <p>No products found</p>
    }
    </div>
  )
}
