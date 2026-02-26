import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import { SiteLayout } from './layout/SiteLayout.jsx'
import Sports from './pages/Sports.jsx'
import Food from './pages/Food.jsx'
import Shoes from './pages/Shoes.jsx'
import Cart from './pages/Cart.jsx'
import Wishlist from './pages/Wishlist.jsx'
import { CartProvider, useCart } from './context/cartContext.jsx'
import { useWishlist, WishlistProvider } from './context/wishlistContext.jsx'

export const App = () => {


  return (
    <CartProvider>
      <WishlistProvider>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SiteLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/sports' element={<Sports />} />
              <Route path='/food' element={<Food />} />
              <Route path='/shoes' element={<Shoes />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/wishlist' element={<Wishlist />} />
            </Route>
          </Routes>
        </BrowserRouter>
        
      </WishlistProvider>
    </CartProvider>
  )
}
