import products from "@/data/Products";
import ProductCard from "@/components/shop/ProductCard";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-primary font-semibold uppercase tracking-wider">
            Our Bestsellers
          </span>

          <h2 className="text-4xl text-gray-900 md:text-5xl font-bold mt-4">
            Customer Favorites
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Handpicked favourites loved by families,
            students, and food lovers across Tamil Nadu.
          </p>

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
            className="inline-block bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary-dark"
          >
            View All Products
          </Link>

        </div>

      </div>
    </section>
  );
}