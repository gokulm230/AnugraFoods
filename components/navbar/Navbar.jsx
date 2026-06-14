"use client";

import Link from "next/link";
import { Menu, ShoppingCart, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [pickleOpen, setPickleOpen] = useState(false);
  const [organicOpen, setOrganicOpen] = useState(false);

  const nonVegItems = [
    "Maasi Meen Thokku",
    "Kanavai Meen Thokku",
    "Iral Meen Thokku",
    "Nethili Karuvadu Thokku",
  ];

  const vegItems = [
    "Mudavaatu Kilangu Rice Mix",
    "Mudavaatu Kilangu Soup Mix",
    "Pirandai Rice Mix",
    "Poondu Milagu Thokku",
    "Kariveppilai Thokku",
    "Mudavaatu Kilangu Saatham Podi",
    "Maangai Ginger Thokku",
    "Naarththangai Thokku",
  ];

  const organicCategories = [
    {
      name: "Rice Mixes & Powders",
      items: ["Pirandai Saadha Podi", "Vallarai Idli Podi"],
    },
    {
      name: "Soup & Kanji Mixes",
      items: [
        "Diet Kanji Mix",
        "Mudakkaththaan Soup Mix",
        "Kollu Kanji Mix",
        "Mudavaattu Kilangu Soup Mix",
      ],
    },
    {
      name: "Health Malts",
      items: ["Carrot Malt", "ABC Malt"],
    },
    {
      name: "Traditional Health Foods",
      items: [
        "Karuppu Kavuni Maavu",
        "Kaattu Yaanam Maavu",
        "Beetroot Powder",
        "Karuppu Ulunthu Laddu",
      ],
    },
  ];

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
          min-w-85
          p-5
          border
          border-black/5
        "
                  >
                    <div className="space-y-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                          Veg
                        </p>

                        <div className="space-y-2">
                          {vegItems.map((item) => (
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

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                          Non-Veg
                        </p>

                        <div className="space-y-2">
                          {nonVegItems.map((item) => (
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
          min-w-90
          p-5
          border
          border-black/5
        "
                  >
                    <div className="space-y-5">
                      {organicCategories.map((category) => (
                        <div key={category.name}>
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                            {category.name}
                          </p>

                          <div className="space-y-2 pl-1">
                            {category.items.map((item) => (
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
                  Organic Mixes & Blends
                </h3>

                <div className="space-y-5 pl-3">
                  {organicCategories.map((category) => (
                    <div key={category.name}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                        {category.name}
                      </p>

                      <div className="space-y-2 pl-3">
                        {category.items.map((item) => (
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
