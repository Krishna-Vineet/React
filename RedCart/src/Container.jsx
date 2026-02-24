import React, { createContext, useEffect, useState } from 'react'
import { Navbar } from './Navbar';
import { Aside } from './Aside';
import { MainPage } from './MainPage';
import './styles/container.css';

export const Data = createContext();

export const Container = () => {

    const [category, setCategory] = useState('categoryAll');
    const [categoryList, setCategoryList] = useState([]);
    const [search, setSearch] = useState('');
    const [price, setPrice] = useState({min: 0, max: 1000});
    const [discount, setDiscount] = useState({min: 0, max: 100});
    const [rating, setRating] = useState({min: 0, max: 5});
    const [availability, setAvailability] = useState('availabilityAll');
    const [availabilityList, setAvailabilityList] = useState([]);
    const [brandList, setBrandList] = useState([]); // this chould be change on change on category
    const [brand, setBrand] = useState('brandAll');
    const [data, setData] = useState(null);

    useEffect(() => {
        
        const dataFetch = async () => {
            const response = await fetch('https://dummyjson.com/products?limit=194&select=id,title,description,category,price,discountPercentage,rating,stock,brand,availabilityStatus,images,reviews');
            const data = await response.json();
            setData(data.products);


            const categories = new Set();
            const availabilities = new Set();
            const minPrice = data.products.reduce((prev, curr) => Math.min(prev, curr.price), Infinity);
            const maxPrice = data.products.reduce((prev, curr) => Math.max(prev, curr.price), -Infinity);
            const minDiscount = data.products.reduce((prev, curr) => Math.min(prev, curr.discountPercentage), Infinity);
            const maxDiscount = data.products.reduce((prev, curr) => Math.max(prev, curr.discountPercentage), -Infinity);
            const minRating = data.products.reduce((prev, curr) => Math.min(prev, curr.rating), Infinity);
            const maxRating = data.products.reduce((prev, curr) => Math.max(prev, curr.rating), -Infinity);

            data.products.forEach(item => {
                
                
                categories.add(item.category);
                availabilities.add(item.availabilityStatus);
            });

            setCategoryList(Array.from(categories));
            setAvailabilityList(Array.from(availabilities));
            
        }
        dataFetch();
        
    }, [])


    useEffect(() => {
        if (data) {
            if (category === 'categoryAll') {
            const brands = new Set();
            data.forEach(item => {
                brands.add(item.brand);
            });
            setBrandList(Array.from(brands));
            setBrand('brandAll');
        } else {
            const brands = new Set();
            data.forEach(item => {
                if (item.category === category) {
                    brands.add(item.brand);
                }
            });
            setBrandList(Array.from(brands));
        }
        }
    }, [category, data]);

  return (
    <Data.Provider value={{data, category, setCategory, categoryList, brand, setBrand, brandList,  search, setSearch, price, setPrice, discount, setDiscount, rating, setRating, availability, setAvailability, availabilityList}}>
        <Navbar/>
        <div className='mainFlex'>
            <Aside />
            <MainPage />
        </div>
    </Data.Provider>
  )

}
