import { useEffect, useState } from "react";
import { Product2 } from "../components/Product2";
import data from "../data/data"; // Temporarily using data to show UI
import { useWishlist } from "../context/wishlistContext";

const Wishlist = () => {
  const {wishList, setWishList} = useWishlist()
  const [wishlistItems, setwishlistItems] = useState([]);
  useEffect(() => {
    setwishlistItems([])
    data.forEach((product) => {
      if (wishList.includes(product.id)) {
        setwishlistItems((prev => [...prev, product]))
      }
    })
  }, [wishList])

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900">My Wishlist</h1>
          <p className="text-slate-500 text-sm">Items you've saved for later.</p>
        </div>
        <button onClick={() => setWishList([])}
        className="text-sm font-semibold text-red-500 hover:text-red-600 underline">
          Remove All
        </button>
      </div>

      <div className="space-y-4">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <Product2 
              key={item.id} 
              product={item} 
              isWishlisted={true} 
              isInCart={false} 
            />
          ))
        ) : (
          <div className="rounded-xl border-2 border-dashed border-slate-200 py-20 text-center">
            <p className="text-slate-500">You haven't saved any items yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;