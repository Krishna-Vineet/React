import React, { useContext } from 'react'
import { Products } from './Products'
import './styles/mainPage.css'
import { Data } from './Container';
export const MainPage = () => {
  const {brand, brandList, setBrand, category} = useContext(Data);

  return (
    <main>
      <h2 className='heading'>{category === 'categoryAll' ? 'RECCOMENDED' : category.toUpperCase()}</h2>
      <div className="chips">
        <button className={brand === 'brandAll' ? 'chip active' : 'chip'} onClick={() => setBrand('brandAll')}>All</button>
        {brandList.map((item, index) => (
          item ? <button className={brand === item ? 'chip active' : 'chip'} key={index} onClick={() => setBrand(item)}>{item}</button> : null
        ))}
      </div>
      <Products />
    </main>
  )
}
