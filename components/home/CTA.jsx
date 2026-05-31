import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-primary rounded-3xl p-12 md:p-20 text-center text-white">

          <h2 className="text-4xl md:text-5xl font-bold">
            Experience The Real Taste
            Of Organic Goodness
          </h2>

          <p className="mt-6 text-lg opacity-90">
            Order now and get it delivered
            fresh to your doorstep.
          </p>

          <Link
            href="/shop"
            className="inline-block mt-8 bg-white text-primary px-8 py-4 rounded-xl font-semibold"
          >
            Shop Now
          </Link>

        </div>

      </div>
    </section>
  );
}