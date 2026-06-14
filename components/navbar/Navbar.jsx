"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingCart, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { navbarCategories } from "@/data/navbarCategories";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [pickleOpen, setPickleOpen] = useState(false);
  const [organicOpen, setOrganicOpen] = useState(false);

  const pickleGroups = navbarCategories.pickles.groups;
  const organicGroups = navbarCategories.organic.groups;

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

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/anugra_logo.jpeg"
              alt="Anugra Food Products logo"
              width={52}
              height={52}
              className="h-12 w-12 rounded-full object-cover"
              priority
            />

            <span className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-primary">ANUGRA</span>

              <span className="text-xs tracking-[0.2em] text-textmain">
                FOOD PRODUCTS
              </span>
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
                {navbarCategories.pickles.title}
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
          min-w-85
          p-5
          border
          border-black/5
        "
                  >
                    <div className="space-y-5">
                      {pickleGroups.map((group) => (
                        <div key={group.name}>
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                            {group.name}
                          </p>

                          <div className="space-y-2">
                            {group.items.map((item) => (
                              <Link
                                key={item}
                                href="/shop"
                                className="block hover:text-accent"
                              >
                                {item}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
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
                {navbarCategories.organic.title}
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
          min-w-90
          p-5
          border
          border-black/5
        "
                  >
                    <div className="space-y-5">
                      {organicGroups.map((group) => (
                        <div key={group.name}>
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                            {group.name}
                          </p>

                          <div className="space-y-2 pl-1">
                            {group.items.map((item) => (
                              <Link
                                key={item}
                                href="/shop"
                                className="block hover:text-accent"
                              >
                                {item}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
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
                  {navbarCategories.organic.title}
                </h3>

                <div className="space-y-5 pl-3">
                  {organicGroups.map((group) => (
                    <div key={group.name}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                        {group.name}
                      </p>

                      <div className="space-y-2 pl-3">
                        {group.items.map((item) => (
                          <Link key={item} href="/shop" className="block">
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
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
