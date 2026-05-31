import Link from "next/link";

export default function AboutSnippet() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side Image */}
          <div>
            <img
              src="/images/about-founder.jpg"
              alt="Anugra Food Products"
              className="w-full rounded-3xl object-cover shadow-lg"
            />
          </div>

          {/* Right Side Content */}
          <div>

            <span className="text-primary font-semibold uppercase tracking-wider">
              About Anugra
            </span>

            <h2 className="text-4xl text-gray-900 md:text-5xl font-bold mt-4 mb-6">
              Made With Tradition,
              <br />
              Crafted With Love
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Anugra Food Products, we believe that the best food
              comes from honest ingredients, time-honoured recipes,
              and a whole lot of love.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Founded by Rajeswari, Anugra brings authentic seafood
              condiments and wholesome organic foods inspired by the
              rich culinary traditions of Tamil Nadu. Every product is
              handcrafted using natural ingredients and traditional
              family recipes.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center bg-cta text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Learn More About Us →
            </Link>

          </div>

        </div>

        {/* Stats Section */}

        <div className="grid md:grid-cols-4 gap-6 mt-20">

          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-primary">
              100%
            </h3>
            <p className="mt-2 text-gray-600">
              Organic Ingredients
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-primary">
              0%
            </h3>
            <p className="mt-2 text-gray-600">
              Preservatives
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-primary">
              2026
            </h3>
            <p className="mt-2 text-gray-600">
              Founded
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <h3 className="text-4xl font-bold text-primary">
              7+
            </h3>
            <p className="mt-2 text-gray-600">
              Premium Products
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}