"use client";

import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          className={`flex items-center justify-between rounded-2xl px-6 transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-lg shadow-lg h-16"
              : "bg-transparent h-20"
          }`}
        >

          {/* Logo */}

          <Link href="/" className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold text-primary">
              ANUGRA
            </span>

            <span className="text-xs tracking-widest text-textmain">
              FOOD PRODUCTS
            </span>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-textmain hover:text-accent transition"
              >
                {link.name}
              </Link>
            ))}

          </nav>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-4">

            <button className="relative">
              <ShoppingCart
                size={22}
                className="text-textmain"
              />
            </button>

            <Link
              href="/shop"
              className="bg-cta text-white px-5 py-3 rounded-full hover:scale-105 transition"
            >
              Shop Now
            </Link>

          </div>

          {/* Mobile Button */}

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="text-textmain" />
            ) : (
              <Menu className="text-textmain" />
            )}
          </button>

        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="lg:hidden mt-3 bg-white rounded-2xl shadow-xl p-6">

            <div className="flex flex-col gap-5">

              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-medium"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/shop"
                className="bg-cta text-white py-3 rounded-xl text-center"
              >
                Shop Now
              </Link>

            </div>

          </div>
        )}

      </div>
    </header>
  );
}