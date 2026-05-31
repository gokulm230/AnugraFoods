import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      title: "Seafood Products",
      description:
        "Authentic coastal flavours — Meen Thokku, Iral Thokku, Kanavai Thokku and more. Made from sun-dried seafood and traditional spices.",
      image: "/home_categories/sea_food.jpeg",
    },
    {
      title: "Organic Health Foods",
      description:
        "Traditional Tamil superfoods — rice mixes, soup powders, and herbal malts crafted from native herbs and ancient grains.",
      image: "/home_categories/organic_food.jpeg",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#1B6CA8] font-semibold uppercase tracking-wider">
            Our Categories
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Discover Our Products
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our carefully crafted range of authentic seafood
            delicacies and organic health foods inspired by traditional
            Tamil recipes.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {categories.map((category) => (
            <div
              key={category.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden h-80">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  {category.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {category.description}
                </p>

                <Link
                  href="/shop"
                  className="inline-block bg-[#1B6CA8] text-white px-6 py-3 rounded-lg hover:bg-[#155580] transition"
                >
                  Shop Now
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}