import { Product1 } from "../components/Product1";
import data from "../data/data";

const Shoes = () => {
  // Filter data for this specific category
  const shoeProducts = data.filter(item => item.category === "shoes");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-10 border-b border-slate-200 pb-5">
        <h1 className="text-4xl font-black text-slate-900">Footwear Collection</h1>
        <p className="mt-2 text-slate-500">Discover comfort and performance in every step.</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {shoeProducts.map((product) => (
          <Product1 
            key={product.id} 
            product={product} 
            isWishlisted={false} // You'll connect this to Context later
            isInCart={false}      // You'll connect this to Context later
          />
        ))}
      </div>
    </div>
  );
};

export default Shoes;