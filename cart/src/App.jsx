import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import { SiteLayout } from './layout/SiteLayout.jsx'
import Sports from './pages/Sports.jsx'
import Food from './pages/Food.jsx'
import Shoes from './pages/Shoes.jsx'
import Cart from './pages/Cart.jsx'
import Wishlist from './pages/Wishlist.jsx'
import { useCart } from './context/cartContext.jsx'
import { useWishlist } from './context/wishlistContext.jsx'


export const App = () => {

  const {cartList, setCartList} = useCart();
  const {wishList, setWishList} = useWishlist();

  useEffect(() => {
    const pastCart = JSON.parse(localStorage.getItem('cart'));
    const pastWishlist = JSON.parse(localStorage.getItem('wishlist'));
    
    if (pastCart && pastCart.length) {
      setCartList(pastCart)
    }
    if (pastWishlist && pastWishlist.length) {
      setWishList(pastWishlist)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartList));
  }, [cartList])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishList));
  }, [wishList])


  return (


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

  )
}
