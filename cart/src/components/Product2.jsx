import { useCart } from "../context/cartContext.jsx";
import { useWishlist } from "../context/wishlistContext.jsx";
export const Product2 = ({ product }) => {

  const { isWishlisted, toogleWishlistItem } = useWishlist();
  const { isInCart, toggleCartItem } = useCart();

  return (
    <div className="flex items-center gap-4 rounded-lg border border-slate-100 bg-white p-3 shadow-sm transition-hover hover:border-blue-200">
      {/* Small Square Image */}
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <h4 className="font-semibold text-slate-900">{product.name}</h4>
          <span className="font-bold text-slate-900">₹{product.price}</span>
        </div>
        <p className="text-xs text-slate-400 uppercase tracking-tight">{product.category}</p>
        
        {/* Action Buttons */}
        <div className="mt-3 flex items-center gap-3">

          <p className="mr-auto text-sm text-slate-600">
            {product.description}
          </p>

          <button 
            onClick={() => {toggleCartItem(product.id)}}
            className={`text-xs font-medium px-3 py-1.5 rounded-md border transition-all ${
              isInCart(product.id) 
              ? "bg-green-50 text-green-600 border-green-200" 
              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {isInCart(product.id) ? "In Cart" : "Move to Cart"}
          </button>

          <button
            onClick={() => {toogleWishlistItem(product.id)}}
            className="text-slate-400 hover:text-red-500 transition-colors">
            <svg 
               xmlns="http://www.w3.org/2000/svg" 
               fill={isWishlisted(product.id) ? "currentColor" : "none"} 
               viewBox="0 0 24 24" 
               strokeWidth={1.5} 
               stroke="currentColor" 
               className={`h-5 w-5 ${isWishlisted(product.id) ? "text-red-500" : ""}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>

          {/* <button className="ml-auto text-xs text-slate-400 hover:text-slate-600 underline underline-offset-2">
            Remove
          </button> */}
        </div>
      </div>
    </div>
  );
};