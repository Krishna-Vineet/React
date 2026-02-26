import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-black tracking-tighter text-slate-900">VELOCITY.</h2>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              Premium quality products delivered to your doorstep. Join our community of over 50k+ happy customers worldwide.
            </p>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">Shop</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link to="/sports" className="hover:text-blue-600">Sports Gear</Link></li>
              <li><Link to="/food" className="hover:text-blue-600">Healthy Food</Link></li>
              <li><Link to="/shoes" className="hover:text-blue-600">Footwear</Link></li>
              <li><Link to="/" className="hover:text-blue-600">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">Support</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Track Order</a></li>
              <li><a href="#" className="hover:text-blue-600">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">Stay Updated</h3>
            <p className="mt-4 text-sm text-slate-500">Subscribe to get special offers and once-in-a-lifetime deals.</p>
            <form className="mt-4 flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
              />
              <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Velocity Ecommerce Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};