"use client";

import { Search, X } from "lucide-react";

export default function ShopHero({
  searchQuery,
  onSearchChange,
  onClearSearch,
}) {
  return (
    <section className="-mt-10 relative z-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="relative">

          {/* Search Card */}
          <div
            className="
              bg-white
              rounded-3xl
              shadow-xl
              border border-amber-100
              overflow-hidden
            "
          >

            <div className="flex items-center px-6 py-5">

              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-2xl
                  bg-amber-100
                  mr-4
                "
              >
                <Search
                  className="text-primary"
                  size={22}
                />
              </div>

              <input
                type="search"
                value={searchQuery}
                onChange={(e) =>
                  onSearchChange(e.target.value)
                }
                placeholder="Search seafood, soups, malts & more..."
                className="
                  flex-1
                  bg-transparent
                  text-lg
                  outline-none
                  placeholder:text-gray-400
                "
              />

              {searchQuery && (
                <button
                  onClick={onClearSearch}
                  className="
                    ml-3
                    p-2
                    rounded-full
                    bg-gray-100
                    hover:bg-gray-200
                    transition
                  "
                >
                  <X size={18} />
                </button>
              )}

            </div>

            {/* Bottom info bar */}
            <div
              className="
                px-6
                py-3
                bg-card
                border-t
                border-amber-100
              "
            >
              <p className="text-sm text-gray-600">
                Find your favourite organic foods,
                soups, malts and seafood products.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}