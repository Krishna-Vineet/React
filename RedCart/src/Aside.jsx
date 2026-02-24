import React, { useContext } from 'react'
import './styles/aside.css';
import { Data } from './Container';
import { IoStar } from 'react-icons/io5';
export const Aside = () => {

  const {category, categoryList, setCategory, setDiscount, setRating, availabilityList, setAvailability, setPrice, setBrand} = useContext(Data);



  return (
    <aside>
      <div className="aside-inner">
        <h2>Filters</h2>
        <div className="filter">
          <h3>Category: </h3>
              <input type="radio" name="category" id='categoryAll' value="categoryAll" defaultChecked onChange={() => {setCategory('categoryAll'); setBrand('brandAll')}} />
              <label htmlFor="categoryAll">All</label> <br />
          {categoryList && categoryList.map((item, index) => (
            <div key={index}>
              <input type="radio" name="category" id={item} value={item} onChange={() => {setCategory(item); setBrand('brandAll')}} />
              <label htmlFor={item}>{item}</label> <br />
            </div>
          ))}
        </div>
        <div className="filter">
          <h3>Price: </h3>
          <input type="radio" name="price" id='all' defaultChecked onChange={() => setPrice({min: 0/25, max: 100000/25})} />
          <label htmlFor="all">All</label> <br />
          <input type="radio" name="price" id='0to100' onChange={() => setPrice({min: 0/25, max: 100/25})} />
          <label htmlFor="0to100">₹0 to ₹100</label> <br />
          <input type="radio" name="price" id='100to1k' onChange={() => setPrice({min: 100/25, max: 1000/25})} />
          <label htmlFor="100to1k">₹100 to ₹1k</label> <br />
          <input type="radio" name="price" id='1kto10k' onChange={() => setPrice({min: 1000/25, max: 10000/25})} />
          <label htmlFor="1kto10k">₹1k to ₹10k</label> <br />
          <input type="radio" name="price" id='10kto50k' onChange={() => setPrice({min: 10000/25, max: 50000/25})} />
          <label htmlFor="10kto50k">₹10k to ₹50k</label> <br />
          <input type="radio" name="price" id='50kto100k' onChange={() => setPrice({min: 50000/25, max: 100000/25})} />
          <label htmlFor="50kto100k">₹50k to ₹1Lakh</label> <br />
        </div>
        <div className="filter">
          <h3>Availability: </h3>
              <input type="radio" name="availability" id='all' defaultChecked onChange={() => setAvailability('availabilityAll')} />
              <label htmlFor="all">All</label> <br />
          {availabilityList && availabilityList.map((item, index) => (
            <div key={index}>
              <input type="radio" name="availability" id={item} value={item} onChange={() => setAvailability(item)} />
              <label htmlFor={item}>{item}</label> <br />
            </div>       
          ))} 
        </div>
        <div className="filter">
          <h3>Rating: </h3>
          <input type="radio" name="rating" id='all' defaultChecked onChange={() => setRating({min: 0, max: 5})} />
          <label htmlFor="all">All</label> <br />
          <input type="radio" name="rating" id='1+' onChange={() => setRating({min: 1, max: 5})} />
          <label htmlFor="1+"><IoStar />1+</label> <br />
          <input type="radio" name="rating" id='2+' onChange={() => setRating({min: 2, max: 5})} />
          <label htmlFor="2+"><IoStar />2+</label> <br />
          <input type="radio" name="rating" id='3+' onChange={() => setRating({min: 3, max: 5})} />
          <label htmlFor="3+"><IoStar />3+</label> <br />
          <input type="radio" name="rating" id='4+' onChange={() => setRating({min: 4, max: 5})} />
          <label htmlFor="4+"><IoStar />4+</label> <br />
        </div>
        <div className="filter">
          <h3>Discount: </h3>
          <input type="radio" name="discount" id='all' defaultChecked onChange={() => setDiscount({min: 0, max: 100})} />
          <label htmlFor="all">All</label> <br />
          <input type="radio" name="discount" id='upto5' onChange={() => setDiscount({min: 0, max: 5})} />
          <label htmlFor="upto5">Upto 5%</label> <br />
          <input type="radio" name="discount" id='upto10' onChange={() => setDiscount({min: 0, max: 10})} />
          <label htmlFor="upto10">Upto 10%</label> <br />
          <input type="radio" name="discount" id='upto15' onChange={() => setDiscount({min: 0, max: 15})} />
          <label htmlFor="upto15">Upto 15%</label> <br />
          <input type="radio" name="discount" id='above15' onChange={() => setDiscount({min: 15, max: 100})} />
          <label htmlFor="above15">Above 15%</label> <br />
          
        </div>
      </div>
    </aside>
  )
}
