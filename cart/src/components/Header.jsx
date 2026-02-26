import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { useWishlist } from "../context/wishlistContext";

export const Header = () => {


  const {cartList} = useCart();
  const {wishList} = useWishlist();
  // Active link styling
  const activeStyle = "text-blue-600 border-b-2 border-blue-600 pb-1";
  const defaultStyle = "text-slate-600 hover:text-blue-600 transition-colors pb-1";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900">
          VELOCITY<span className="text-blue-600">.</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden space-x-8 md:flex font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : defaultStyle}>Home</NavLink>
          <NavLink to="/sports" className={({ isActive }) => isActive ? activeStyle : defaultStyle}>Sports</NavLink>
          <NavLink to="/food" className={({ isActive }) => isActive ? activeStyle : defaultStyle}>Food</NavLink>
          <NavLink to="/shoes" className={({ isActive }) => isActive ? activeStyle : defaultStyle}>Shoes</NavLink>
        </div>

        {/* Icons & Login */}
        <div className="flex items-center gap-5">
          {/* Wishlist Icon */}
          <Link to="/wishlist" className="relative text-slate-700 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              {wishList.length}
            </span>
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="relative text-slate-700 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.115 11.05a1.125 1.125 0 0 1-1.12 1.243H4.41a1.125 1.125 0 0 1-1.12-1.243l1.115-11.05a1.125 1.125 0 0 1 1.12-1.007h14.47a1.125 1.125 0 0 1 1.12 1.007Z" />
            </svg>
            <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
              {cartList.length}
            </span>
          </Link>

          {/* Login Button */}
          <button className="hidden rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800 active:scale-95 sm:block">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};