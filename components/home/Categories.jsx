import Link from "next/link";
import {
  ChefHat,
  Fish,
  Leaf,
  Soup,
  Wheat,
  FlaskConical,
  Apple,
} from "lucide-react";

const categories = [
  {
    title: "Veg",
    icon: Leaf,
  },
  {
    title: "Non-Veg",
    icon: Fish,
  },
  {
    title: "Rice Mixes",
    icon: Wheat,
  },
  {
    title: "Soups & Kanji",
    icon: Soup,
  },
  {
    title: "Health Malts",
    icon: FlaskConical,
  },
  {
    title: "Traditional Foods",
    icon: Apple,
  },
];

export default function Categories() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-primary text-2xl font-semibold uppercase tracking-wider">
            Shop by Category
          </p>
        </div>

        <div className="flex items-start justify-center gap-5 overflow-x-auto pb-2 sm:gap-8 lg:gap-12">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href="/shop"
                className="group flex min-w-20 flex-col items-center text-center"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                  <Icon className="h-10 w-10 text-[#111]" strokeWidth={1.9} />
                </span>

                <span className="mt-3 max-w-24 text-[12px] leading-snug text-[#7a5b42]">
                  {category.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
