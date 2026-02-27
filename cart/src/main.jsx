import { createRoot } from 'react-dom/client'
import './index.css'
import { CartProvider } from './context/cartContext.jsx'
import { WishlistProvider } from './context/wishlistContext.jsx'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
    <CartProvider>
        <WishlistProvider>
            <App />
      </WishlistProvider>
    </CartProvider>
)
