import { createContext, useContext, useState } from "react";

// create context without default methods, state will come from provider
export const cartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = id => cartList.includes(id);

  const toggleCartItem = id => {
    setCartList(prev =>
      prev.includes(id) ? prev.filter(v => v !== id) : [id, ...prev]
    );
  };

  const value = { cartList, setCartList, isInCart, toggleCartItem };

  return (
    <cartContext.Provider value={value}>{children}</cartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};