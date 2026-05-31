"use client";

import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-bold text-[#1B6CA8]">
              ANUGRA
            </span>
            <span className="text-xs text-gray-500">
              FOOD PRODUCTS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-black hover:text-[#1B6CA8]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">

            <button>
              <ShoppingCart size={22} />
            </button>

            <Link
              href="/shop"
              className="bg-[#1B6CA8] text-white px-5 py-2 rounded-lg"
            >
              Shop Now
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden pb-6">

            <div className="flex flex-col gap-4">

              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/shop"
                className="bg-[#1B6CA8] text-white py-3 rounded-lg text-center"
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