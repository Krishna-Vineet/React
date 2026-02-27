import { createContext, useContext, useState } from "react";

export const wishlistContext = createContext(null);

export const WishlistProvider = ({children}) => {
    const [wishList, setWishList] = useState([]);

    const isWishlisted = id => wishList.includes(id);

    const toogleWishlistItem = id => {
        setWishList( prev => prev.includes(id) ? prev.filter(v => v !== id) : [id, ...prev]);
    }

    const value = {wishList, setWishList, isWishlisted, toogleWishlistItem};

    return (<wishlistContext.Provider value={value}>{children}</wishlistContext.Provider>);
}

export const useWishlist = () => {
    const context = useContext(wishlistContext);
    if (!context) throw new Error("useWushlist must be used with in a WishlistProvider") 
        return context;
};