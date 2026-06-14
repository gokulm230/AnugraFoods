import products from "@/data/Products";
import ProductCard from "@/components/shop/ProductCard";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <span className="text-primary text-2xl font-semibold uppercase tracking-wider">
            Our Bestsellers
          </span>

          <h2 className="text-4xl text-gray-900 md:text-5xl font-bold mt-4">
            Customer Favorites
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        <div className="text-center mt-12">

          <Link
            href="/shop"
            className="inline-block bg-cta text-white px-8 py-4 rounded-xl hover:opacity-90"
          >
            View All Products
          </Link>

        </div>

      </div>
    </section>
  );
}