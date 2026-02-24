import React, { useContext, useState } from 'react'
import { PiHeart, PiShoppingCart, PiUserCircleDashedFill } from "react-icons/pi";
import { ImSearch } from "react-icons/im";
import './styles/navbar.css'
import { Data } from './Container';
export const Navbar = () => {
  const {setSearch} = useContext(Data);
  const [input, setInput] = useState('');

  

  return (
    <nav>
        <img src="./src/assets/logo.png" alt="RedCart" className="logo" />
        <div className="searchBar">
            <input type="text" placeholder='Search any product...' value={input} onChange={(e) => setInput(e.target.value)} onKeyUp={(e) => setSearch(e.target.value)}/>
            <button><ImSearch className="icon" /></button>
        </div>
        <div className="navBtns">
            <PiHeart className="icon" />
            <PiShoppingCart className="icon" />
            <PiUserCircleDashedFill className="icon" />
        </div>
    </nav>
  )
}
