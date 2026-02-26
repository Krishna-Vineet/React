import { useCart } from "../context/cartContext.jsx";
import { useWishlist } from "../context/wishlistContext.jsx";

export const Product1 = ({ product }) => {
  const {isWishlisted, toogleWishlistItem} = useWishlist()
  const {isInCart, toggleCartItem} = useCart()
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
      {/* Category Badge */}
      <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-slate-900 shadow-sm">
        {product.category}
      </span>

      {/* Wishlist Button - Top Right */}
      <button
        onClick={() => {toogleWishlistItem(product.id)}}
        className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 shadow-sm transition-transform active:scale-95">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill={isWishlisted(product.id) ? "red" : "none"} 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke={isWishlisted(product.id) ? "red" : "currentColor"} 
          className="h-5 w-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      </button>

      {/* Image Container */}
      <div className="aspect-square overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-bold text-slate-800 line-clamp-1">{product.name}</h3>
          <span className="text-lg font-bold text-blue-600">₹{product.price}</span>
        </div>
        
        <p className="mb-4 text-sm text-slate-500 line-clamp-2">
          {product.description}
        </p>

        {/* Add to Cart Button */}
        <button 
          onClick={() => {toggleCartItem(product.id)}}
          className={`mt-auto w-full rounded-lg py-2.5 font-semibold transition-colors ${
            isInCart(product.id) 
            ? "bg-green-100 text-green-700 border border-green-200" 
            : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          {isInCart(product.id) ? "✓ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

