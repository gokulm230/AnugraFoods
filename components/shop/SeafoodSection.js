"use client";

import seafoodProducts from "@/data/seafoodProducts";
import ShopProductCard from "./ShopProductCard";

const matchesSearch = (product, normalizedQuery) => {
  if (!normalizedQuery) {
    return true;
  }

  return [product.name, product.tamilName, product.description]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .includes(normalizedQuery);
};

export default function SeafoodSection({ searchQuery = "" }) {
  const filteredProducts = seafoodProducts.filter((product) =>
    matchesSearch(product, searchQuery),
  );

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <span className="text-primary font-semibold uppercase">
            Seafood Products
          </span>

          <h2 className="text-4xl text-gray-900 md:text-5xl font-bold mt-4">
            Authentic Coastal Flavours
          </h2>

  
        </div>

        {/* Products */}

        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ShopProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center text-gray-600">
            No seafood products match your search.
          </div>
        )}

      </div>
    </section>
  );
}