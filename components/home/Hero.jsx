"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/hero/hero1.jpg",
    title: "Pure Organic.",
    title2: "Authentic Taste.",
    title3: "Delivered To Your Door.",
    description:
      "From the coastal kitchens of Kanyakumari to your home.",
  },

  {
    image: "/hero/hero2.jpg",
    title: "Traditional Tamil",
    title2: "Superfoods",
    title3: "For Everyday Health.",
    description:
      "Rice mixes, soup powders and nourishing foods.",
  },

  {
    image: "/hero/hero3.jpg",
    title: "100% Organic",
    title2: "Zero Preservatives",
    title3: "Pure Goodness.",
    description:
      "Made with carefully sourced natural ingredients.",
  },

  {
    image: "/hero/hero4.jpg",
    title: "Bulk Orders",
    title2: "Retail Partners",
    title3: "Welcome.",
    description:
      "Grow your business with Anugra Food Products.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${
            current === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <div
            key={current}
            className="max-w-3xl text-white animate-fade-up"
          >

            <span className="inline-flex items-center bg-organic text-white px-5 py-2 rounded-full text-sm font-medium mb-6">
              100% Organic • Preservative Free
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">

              {slides[current].title}
              <br />

              {slides[current].title2}
              <br />

              {slides[current].title3}

            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
              {slides[current].description}
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="/shop"
                className="bg-cta hover:opacity-90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Shop Now
              </Link>

              <Link
                href="/about"
                className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                Learn More
              </Link>

            </div>

          </div>

        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-10 h-3 bg-white"
                : "w-3 h-3 bg-white/40"
            }`}
          />
        ))}

      </div>

    </section>
  );
}