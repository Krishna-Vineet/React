import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import Home from './pages/Home.jsx'
import { SiteLayout } from './layout/SiteLayout.jsx'
import Sports from './pages/Sports.jsx'
import Food from './pages/Food.jsx'
import Shoes from './pages/Shoes.jsx'
import Cart from './pages/Cart.jsx'
import Wishlist from './pages/Wishlist.jsx'
import { CartProvider } from './context/cartContext.jsx'
import { WishlistProvider } from './context/wishlistContext.jsx'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(

    <App />

)
