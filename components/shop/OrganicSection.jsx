"use client";

import organicProducts from "@/data/organicProducts";
import ShopProductCard from "./ShopProductCard";

const categoryOrder = ["Rice", "Soup"];

const categoryTitles = {
  Rice: "Rice",
  Soup: "Soup",
};

const matchesSearch = (product, normalizedQuery) => {
  if (!normalizedQuery) {
    return true;
  }

  return [product.name, product.tamilName, product.description, product.category]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .includes(normalizedQuery);
};

export default function OrganicSection({ searchQuery = "" }) {
  const filteredProducts = organicProducts.filter((product) =>
    matchesSearch(product, searchQuery),
  );

  const productsByCategory = filteredProducts.reduce((groupedProducts, product) => {
    const category = product.category ?? "Rice";

    if (!groupedProducts[category]) {
      groupedProducts[category] = [];
    }

    groupedProducts[category].push(product);

    return groupedProducts;
  }, {});

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <span className="text-primary font-semibold uppercase">
            Organic Health Foods
          </span>

          <h2 className="text-4xl text-gray-900 md:text-5xl font-bold mt-4">
            Traditional Tamil Superfoods
          </h2>


        </div>

        {filteredProducts.length > 0 ? (
          <div className="space-y-16">
            {categoryOrder.map((category) => {
              const categoryProducts = productsByCategory[category] ?? [];

              if (categoryProducts.length === 0) {
                return null;
              }

              return (
                <div key={category}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    {categoryTitles[category]}
                  </h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categoryProducts.map((product) => (
                      <ShopProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center text-gray-600">
            No organic products match your search.
          </div>
        )}

      </div>
    </section>
  );
}