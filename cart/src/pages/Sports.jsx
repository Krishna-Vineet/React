
import { Product1 } from "../components/Product1";
import data from "../data/data";

const Sports = () => {
  const sportsProducts = data.filter(item => item.category === "sports");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 border-b border-slate-200 pb-5">
        <h1 className="text-4xl font-black text-slate-900">Sports Gear</h1>
        <p className="mt-2 text-slate-500">Professional equipment for the modern athlete.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {sportsProducts.map((product) => (
          <Product1 
            key={product.id} 
            product={product} 
            isWishlisted={false} 
            isInCart={false} 
          />
        ))}
      </div>
    </div>
  );
};

export default Sports;