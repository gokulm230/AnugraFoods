import Link from "next/link";
import { ArrowRight, CalendarDays, MessageCircleMore } from "lucide-react";

const blogs = [
  {
    title: "Why traditional rice mixes are making a comeback",
    excerpt:
      "Explore how heritage grains and mixed powders fit into modern kitchens without losing their local identity.",
    date: "12 Jun 2026",
    comments: 8,
    tag: "Health Foods",
  },
  {
    title: "How to build a quick weekday meal with soup mixes",
    excerpt:
      "A practical guide to turning soup and kanji mixes into filling meals with minimal prep time.",
    date: "08 Jun 2026",
    comments: 5,
    tag: "Quick Meals",
  },
  {
    title: "The value of pantry staples in a Tamil kitchen",
    excerpt:
      "From pickles to masalas, see how everyday essentials shape flavour, convenience, and tradition.",
    date: "03 Jun 2026",
    comments: 12,
    tag: "Kitchen Stories",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-4 text-center">
          <span className="text-primary text-2xl font-semibold uppercase tracking-wider">
            Blog Updates
          </span>

          <h2 className="text-4xl font-bold text-textmain md:text-5xl">
            Stories, tips, and food inspiration
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="group overflow-hidden rounded-4xl border border-black/5 bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-56 bg-linear-to-br from-card via-[#f7e6c2] to-[#ecd4a0] p-6">
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/40 bg-white/20 p-5 backdrop-blur-sm">
                  <span className="w-fit rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {blog.tag}
                  </span>

                  <div className="space-y-3 text-textmain">
                    <h3 className="text-2xl font-bold leading-tight">
                      {blog.title}
                    </h3>

                    <p className="text-sm leading-6 text-textmain/75">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5 p-7">
                <div className="flex items-center gap-5 text-sm text-textmain/70">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {blog.date}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <MessageCircleMore className="h-4 w-4" />
                    {blog.comments} comments
                  </span>
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-semibold text-primary transition group-hover:gap-3"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}