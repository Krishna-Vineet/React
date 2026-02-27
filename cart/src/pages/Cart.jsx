import { useEffect, useState } from "react";
import { Product2 } from "../components/Product2";
import { useCart } from "../context/cartContext";
import data from "../data/data"; // Temporarily using data to show UI
import { useWishlist } from "../context/wishlistContext";

const Cart = () => {

  const {cartList} = useCart()
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0)
  const taxAmmount = subTotal/100*3;
  const shippingFee = subTotal ? subTotal > 1999 ? 0 : 249 : 0;

  useEffect(() => {
    setCartItems([])
    setSubTotal(0)
    data.forEach((product) => {
      if (cartList.includes(product.id)) {
        setCartItems((prev => [...prev, product]))
        setSubTotal(prev => prev + product.price)
      }
    })

  }, [cartList])

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-black text-slate-900">Your Shopping Cart</h1>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Left Column: List of Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <Product2 
                key={item.id} 
                product={item}
              />
            ))
          ) : (
            <div className="rounded-xl border-2 border-dashed border-slate-200 py-20 text-center">
              <p className="text-slate-500">Your cart is empty.</p>
            </div>
          )}
        </div>

        {/* Right Column: Order Summary */}
        <div className="h-fit rounded-2xl bg-slate-50 p-6 shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>
          <div className="mt-6 space-y-4 border-b border-slate-200 pb-6 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-900">₹{subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Tax</span>
              <span className="font-semibold text-slate-900">₹{taxAmmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Shipping</span>
              { shippingFee ?
              <span className="text-green-600 font-medium">₹{shippingFee}</span>
              :
              <span className="text-green-600 font-medium">Free</span>
            }
            </div>
          </div>
          <div className="mt-6 flex justify-between text-lg font-bold text-slate-900">
            <span>Total</span>
            <span>₹{(subTotal + taxAmmount + shippingFee).toFixed(2)}</span>
          </div>
          <button className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-bold text-white transition-all hover:bg-blue-700 active:scale-95">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;