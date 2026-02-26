import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      name: "Sports Gear",
      path: "/sports",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop",
      description: "Level up your game with professional equipment.",
      color: "bg-orange-500",
    },
    {
      name: "Healthy Food",
      path: "/food",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=500&auto=format&fit=crop",
      description: "Fuel your body with organic, premium nutrition.",
      color: "bg-green-600",
    },
    {
      name: "Modern Shoes",
      path: "/shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop",
      description: "Walk the talk with our latest footwear collection.",
      color: "bg-blue-600",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-125 w-full overflow-hidden bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop" 
          className="absolute h-full w-full object-cover opacity-40"
          alt="Hero Banner"
        />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 text-white">
          <h1 className="max-w-2xl text-5xl font-black leading-tight md:text-7xl">
            Everything You Need, <span className="text-blue-500">Fast.</span>
          </h1>
          <p className="mt-4 max-w-lg text-lg text-slate-300">
            Explore our curated collections of sports gear, organic food, and premium footwear. High quality, delivered to your door.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="rounded-full bg-blue-600 px-8 py-3 font-bold transition-transform hover:scale-105 active:scale-95">
              Shop Now
            </button>
            <button className="rounded-full border border-white px-8 py-3 font-bold transition-all hover:bg-white hover:text-black">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* 2. Features Bar */}
      <section className="bg-slate-100 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 text-center md:grid-cols-3">
          <div>
            <h4 className="font-bold text-slate-900">Free Shipping</h4>
            <p className="text-sm text-slate-500">On all orders over ₹1999</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">24/7 Support</h4>
            <p className="text-sm text-slate-500">Get help anytime you need</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Secure Payment</h4>
            <p className="text-sm text-slate-500">100% encrypted checkout</p>
          </div>
        </div>
      </section>

      {/* 3. Category Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Browse Categories</h2>
          <p className="mt-2 text-slate-500">Pick a category to start your journey</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              to={cat.path} 
              className="group relative h-100 overflow-hidden rounded-2xl bg-slate-200"
            >
              {/* Background Image */}
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              {/* Text Content */}
              <div className="absolute bottom-0 p-8 text-white">
                <span className={`mb-3 inline-block rounded-full ${cat.color} px-3 py-1 text-xs font-bold uppercase tracking-widest`}>
                  Collection
                </span>
                <h3 className="text-2xl font-bold">{cat.name}</h3>
                <p className="mt-2 text-sm text-slate-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center font-bold text-white transition-all group-hover:gap-2">
                  Shop Category <span>&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Newsletter Teaser (Optional Layout) */}
      <section className="mx-auto mb-20 max-w-7xl px-6">
        <div className="rounded-3xl bg-blue-600 px-8 py-12 text-center text-white md:py-20">
          <h2 className="text-3xl font-bold md:text-5xl">Join the Velocity Club</h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Get exclusive access to drops, limited editions, and 15% off your first order.
          </p>
          <button className="mt-8 rounded-full bg-white px-10 py-3 font-bold text-blue-600 transition-all hover:bg-slate-100 active:scale-95">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;