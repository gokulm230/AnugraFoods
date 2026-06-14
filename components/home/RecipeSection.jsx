import Link from "next/link";
import { ArrowRight, Clock3, Flame, Star } from "lucide-react";

const recipes = [
  {
    title: "Pirandai Saadha Podi Rice Bowl",
    description:
      "A quick Tamil-style rice bowl with tempered spices, ghee, and a spoon of Pirandai Saadha Podi for a nourishing weekday meal.",
    time: "20 mins",
    level: "Easy",
    rating: "4.9",
    category: "Rice Mix",
  },
  {
    title: "Mudakkaththaan Soup Comfort Bowl",
    description:
      "A warm and soothing soup made with Mudakkaththaan Soup Mix, vegetables, and a light pepper tempering.",
    time: "25 mins",
    level: "Easy",
    rating: "4.8",
    category: "Soup & Kanji",
  },
  {
    title: "Karuppu Kavuni Energy Porridge",
    description:
      "A rich traditional breakfast bowl prepared with Karuppu Kavuni Maavu, jaggery, and coconut milk.",
    time: "15 mins",
    level: "Simple",
    rating: "5.0",
    category: "Traditional Food",
  },
];

export default function RecipeSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="text-primary font-semibold uppercase tracking-wider">
            Recipe Corner
          </span>

          <h2 className="mt-4 text-4xl font-bold text-textmain md:text-5xl">
            Simple recipes with traditional ingredients
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Dummy recipe ideas to show how your products can be used in everyday
            meals, snacks, and comfort dishes.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <article
              key={recipe.title}
              className="group rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-card px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {recipe.category}
                </span>

                <div className="flex items-center gap-1 text-sm font-semibold text-textmain">
                  <Star className="h-4 w-4 fill-current text-accent" />
                  {recipe.rating}
                </div>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-textmain">
                {recipe.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-textmain/70">
                {recipe.description}
              </p>

              <div className="mt-6 flex items-center gap-4 text-sm text-textmain/70">
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  {recipe.time}
                </span>

                <span className="inline-flex items-center gap-2">
                  <Flame className="h-4 w-4" />
                  {recipe.level}
                </span>
              </div>

              <Link
                href="/shop"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition group-hover:gap-3"
              >
                View Recipe Ideas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}