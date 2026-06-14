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
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-background/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/anugra_logo.jpeg"
            alt="Anugra Food Products logo"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover"
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

        <nav className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-textmain transition hover:text-accent"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Products Dropdown */}

          <div
            className="relative"
            onMouseEnter={() => setPickleOpen(true)}
            onMouseLeave={() => setPickleOpen(false)}
          >
            <button
              onClick={() => setPickleOpen(!pickleOpen)}
              className="flex items-center gap-1 font-medium text-textmain transition hover:text-accent"
            >
              {navbarCategories.pickles.title}
              <ChevronDown
                size={18}
                className={`transition-transform ${pickleOpen ? "rotate-180" : ""}`}
              />
            </button>

            {pickleOpen && (
              <div className="absolute left-0 top-full z-50 pt-2">
                <div className="min-w-85 rounded-2xl border border-black/5 bg-background p-5 shadow-xl">
                  <div className="space-y-5">
                    {pickleGroups.map((group) => (
                      <div key={group.name}>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
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
              className="flex items-center gap-1 font-medium text-textmain transition hover:text-accent"
            >
              {navbarCategories.organic.title}
              <ChevronDown
                size={18}
                className={`transition-transform ${organicOpen ? "rotate-180" : ""}`}
              />
            </button>

            {organicOpen && (
              <div className="absolute left-0 top-full z-50 pt-2">
                <div className="min-w-90 rounded-2xl border border-black/5 bg-background p-5 shadow-xl">
                  <div className="space-y-5">
                    {organicGroups.map((group) => (
                      <div key={group.name}>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
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

          <div className="hidden lg:flex items-center">
            <button className="rounded-full p-2 transition hover:bg-card">
              <ShoppingCart size={22} className="text-textmain" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="text-textmain" /> : <Menu className="text-textmain" />}
        </button>

        {/* Mobile Menu */}

        {open && (
          <div className="lg:hidden border-t border-black/5 bg-background px-4 py-5 shadow-lg">
            <div className="space-y-5">
              <div>
                <h3 className="mb-3 font-bold text-primary">{navbarCategories.organic.title}</h3>

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
