import organicProducts from "@/data/organicProducts";
import ShopProductCard from "./ShopProductCard";

const categoryOrder = ["Rice", "Soup"];

const categoryTitles = {
  Rice: "Rice",
  Soup: "Soup",
};

export default function OrganicSection() {
  const productsByCategory = organicProducts.reduce((groupedProducts, product) => {
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

          <p className="max-w-3xl mx-auto text-gray-600 mt-5">
            Ancient Tamil superfoods reimagined for modern life.
            Made from native herbs, healing tubers and traditional grains.
          </p>

        </div>

        <div className="space-y-16">
          {categoryOrder.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                {categoryTitles[category]}
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {(productsByCategory[category] ?? []).map((product) => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}