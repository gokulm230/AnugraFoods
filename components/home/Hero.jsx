"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('hero/hero-food.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="max-w-3xl text-white">

          <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-6">
            100% Organic • Preservative Free
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Pure Organic.
            <br />
            Authentic Taste.
            <br />
            Delivered to Your Door.
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            From the coastal kitchens of Kanyakumari to your home —
            100% organic, preservative-free food made with
            traditional family recipes.
          </p>

          <div className="flex flex-wrap gap-4">

            <Link
              href="/shop"
              className="bg-[#1B6CA8] hover:bg-[#155580] px-8 py-4 rounded-lg font-semibold transition"
            >
              Shop Now
            </Link>

            <Link
              href="/about"
              className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Learn More
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}