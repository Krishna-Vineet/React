import { Product1 } from "../components/Product1";
import data from "../data/data";

const Food = () => {
  const foodProducts = data.filter(item => item.category === "food");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 border-b border-slate-200 pb-5">
        <h1 className="text-4xl font-black text-slate-900">Healthy Food</h1>
        <p className="mt-2 text-slate-500">Organic, fresh, and nutritious essentials.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {foodProducts.map((product) => (
          <Product1 
            key={product.id} 
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Food;