import seafoodProducts from "@/data/seafoodProducts";
import ShopProductCard from "./ShopProductCard";

export default function SeafoodSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <span className="text-primary font-semibold uppercase">
            Seafood Products
          </span>

          <h2 className="text-4xl text-gray-900 md:text-5xl font-bold mt-4">
            Authentic Coastal Flavours
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mt-5">
            Authentic coastal flavours from the kitchens of Tamil Nadu.
            Made from sun-dried seafood, tamarind, and traditional spices.
          </p>

        </div>

        {/* Products */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {seafoodProducts.map((product) => (
            <ShopProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>
    </section>
  );
}