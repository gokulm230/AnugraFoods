"use client";

import Link from "next/link";
import { Menu, ShoppingCart, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [pickleOpen, setPickleOpen] = useState(false);
  const [organicOpen, setOrganicOpen] = useState(false);

  const navLinks = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "FAQ",
      href: "/faq",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-5">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            bg-background
            rounded-3xl
            shadow-lg
            px-8
            h-17
            flex
            items-center
            justify-between
          "
        >
          {/* Logo */}

          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-bold text-primary">ANUGRA</span>

            <span className="text-xs tracking-[0.2em] text-textmain">
              FOOD PRODUCTS
            </span>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">
            {/* Products Dropdown */}

            <div
              className="relative"
              onMouseEnter={() => setPickleOpen(true)}
              onMouseLeave={() => setPickleOpen(false)}
            >
              <button
                onClick={() => setPickleOpen(!pickleOpen)}
                className="
      flex
      items-center
      gap-1
      font-medium
      text-textmain
      hover:text-accent
      transition
    "
              >
                Pickles & Condiments
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    pickleOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {pickleOpen && (
                <div
                  className="
        absolute
        top-full
        left-0
        pt-2
        z-50
      "
                >
                  <div
                    className="
          bg-background
          rounded-2xl
          shadow-xl
          min-w-[280px]
          p-5
          border
          border-black/5
        "
                  >
                    <div className="space-y-3">
                      <Link href="/shop" className="block hover:text-accent">
                        Maasi Meen Thokku
                      </Link>

                      <Link href="/shop" className="block hover:text-accent">
                        Iral Meen Thokku
                      </Link>

                      <Link href="/shop" className="block hover:text-accent">
                        Kanavai Meen Thokku
                      </Link>

                      <Link href="/shop" className="block hover:text-accent">
                        Nethili Karuvadu Thokku
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOrganicOpen(true)}
              onMouseLeave={() => setOrganicOpen(false)}
            >
              <button
                onClick={() => setOrganicOpen(!organicOpen)}
                className="
      flex
      items-center
      gap-1
      font-medium
      text-textmain
      hover:text-accent
      transition
    "
              >
                Organic Mixes & Blends
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    organicOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {organicOpen && (
                <div
                  className="
        absolute
        top-full
        left-0
        pt-2
        z-50
      "
                >
                  <div
                    className="
          bg-background
          rounded-2xl
          shadow-xl
          min-w-[280px]
          p-5
          border
          border-black/5
        "
                  >
                    <div className="space-y-3">
                      <Link href="/shop" className="block hover:text-accent">
                        Pirandai Rice Mix
                      </Link>

                      <Link href="/shop" className="block hover:text-accent">
                        Diet Kanji Mix
                      </Link>

                      <Link href="/shop" className="block hover:text-accent">
                        Mudavaatu Rice Mix
                      </Link>

                      <Link href="/shop" className="block hover:text-accent">
                        Soup Mix
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Side */}

          <div className="hidden lg:flex items-center">
            <button
              className="
                p-2
                rounded-full
                hover:bg-card
                transition
              "
            >
              <ShoppingCart size={22} className="text-textmain" />
            </button>
          </div>

          {/* Mobile Menu Button */}

          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <X className="text-textmain" />
            ) : (
              <Menu className="text-textmain" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}

        {open && (
          <div
            className="
              lg:hidden
              mt-3
              bg-background
              rounded-3xl
              shadow-xl
              p-6
            "
          >
            <div className="space-y-5">
              <div>
                <h3 className="font-bold text-primary mb-3">
                  Pickles & Condiments
                </h3>

                <div className="space-y-2 pl-3">
                  <Link href="/shop" className="block">
                    Maasi Meen Thokku
                  </Link>

                  <Link href="/shop" className="block">
                    Iral Meen Thokku
                  </Link>

                  <Link href="/shop" className="block">
                    Kanavai Meen Thokku
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-3">
                  Organic Mixes & Blends
                </h3>

                <div className="space-y-2 pl-3">
                  <Link href="/shop" className="block">
                    Pirandai Rice Mix
                  </Link>

                  <Link href="/shop" className="block">
                    Diet Kanji Mix
                  </Link>

                  <Link href="/shop" className="block">
                    Soup Mix
                  </Link>
                </div>
              </div>

              <hr />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
