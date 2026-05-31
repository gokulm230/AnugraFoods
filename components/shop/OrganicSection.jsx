import organicProducts from "@/data/organicProducts";
import ShopProductCard from "./ShopProductCard";

export default function OrganicSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <span className="text-[#1B6CA8] font-semibold uppercase">
            Organic Health Foods
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Traditional Tamil Superfoods
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mt-5">
            Ancient Tamil superfoods reimagined for modern life.
            Made from native herbs, healing tubers and traditional grains.
          </p>

        </div>

        {/* Products */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {organicProducts.map((product) => (
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