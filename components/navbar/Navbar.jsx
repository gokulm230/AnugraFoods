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
  const [mobilePicklesOpen, setMobilePicklesOpen] = useState(false);
  const [mobileOrganicOpen, setMobileOrganicOpen] = useState(false);

  const pickleGroups = navbarCategories.pickles.groups;
  const organicGroups = navbarCategories.organic.groups;

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background shadow-sm">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex h-12 items-center justify-between gap-2 sm:h-14 xl:h-15">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/anugra_logo.jpeg"
              alt="Anugra Food Products"
              width={40}
              height={40}
              className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
              priority
            />

            <div className="hidden leading-tight sm:block">
              <h1 className="text-base font-bold text-primary md:text-lg">
                ANUGRA
              </h1>

              <p className="text-[8px] tracking-[0.2em] text-textmain md:text-[9px]">
                FOOD PRODUCTS
              </p>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-7 2xl:gap-9">
            <div
              className="relative"
              onMouseEnter={() => setPickleOpen(true)}
              onMouseLeave={() => setPickleOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-sm font-medium transition hover:text-accent 2xl:text-[15px]">
                {navbarCategories.pickles.title}

                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    pickleOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {pickleOpen && (
                <div className="absolute left-0 top-full z-50 pt-3">
                  <div className="w-80 rounded-2xl border border-black/5 bg-background p-5 shadow-xl">
                    {pickleGroups.map((group) => (
                      <div key={group.name} className="mb-5 last:mb-0">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                          {group.name}
                        </p>

                        <div className="space-y-2">
                          {group.items.map((item) => (
                            <Link
                              key={item}
                              href="/shop"
                              className="block transition hover:text-accent"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOrganicOpen(true)}
              onMouseLeave={() => setOrganicOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-sm font-medium transition hover:text-accent 2xl:text-[15px]">
                {navbarCategories.organic.title}

                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    organicOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {organicOpen && (
                <div className="absolute left-0 top-full z-50 pt-3">
                  <div className="w-96 rounded-2xl border border-black/5 bg-background p-5 shadow-xl">
                    {organicGroups.map((group) => (
                      <div key={group.name} className="mb-5 last:mb-0">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                          {group.name}
                        </p>

                        <div className="space-y-2">
                          {group.items.map((item) => (
                            <Link
                              key={item}
                              href="/shop"
                              className="block transition hover:text-accent"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2.5">
            <button className="hidden rounded-full p-2 transition hover:bg-card xl:flex">
              <ShoppingCart size={20} />
            </button>

            <button
              className="inline-flex items-center justify-center rounded-full p-1.5 transition hover:bg-card xl:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-100 bg-black/50 xl:hidden">
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-xs bg-background shadow-2xl sm:max-w-sm">
            <div className="flex items-center justify-between border-b bg-background px-4 py-3 sm:px-5 sm:py-4">
              <h2 className="font-bold text-primary">Menu</h2>

              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-5 overflow-y-auto bg-background p-4 sm:p-5">
              <div>
                <button
                  onClick={() => setMobilePicklesOpen(!mobilePicklesOpen)}
                  className="flex w-full items-center justify-between font-medium"
                >
                  {navbarCategories.pickles.title}

                  <ChevronDown
                    className={`transition-transform ${
                      mobilePicklesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobilePicklesOpen && (
                  <div className="mt-4 space-y-4 pl-4">
                    {pickleGroups.map((group) => (
                      <div key={group.name}>
                        <p className="mb-2 text-xs font-semibold uppercase text-primary">
                          {group.name}
                        </p>

                        {group.items.map((item) => (
                          <Link key={item} href="/shop" className="block py-1">
                            {item}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setMobileOrganicOpen(!mobileOrganicOpen)}
                  className="flex w-full items-center justify-between font-medium"
                >
                  {navbarCategories.organic.title}

                  <ChevronDown
                    className={`transition-transform ${
                      mobileOrganicOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileOrganicOpen && (
                  <div className="mt-4 space-y-4 pl-4">
                    {organicGroups.map((group) => (
                      <div key={group.name}>
                        <p className="mb-2 text-xs font-semibold uppercase text-primary">
                          {group.name}
                        </p>

                        {group.items.map((item) => (
                          <Link key={item} href="/shop" className="block py-1">
                            {item}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <hr />

              <button className="flex items-center gap-3 font-medium">
                <ShoppingCart size={20} />
                Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
