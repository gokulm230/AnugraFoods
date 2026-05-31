export default function StorySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <img
              src="/images/about-story.jpg"
              alt="Our Story"
              className="rounded-3xl w-full object-cover"
            />
          </div>

          <div>

            <span className="text-primary font-semibold uppercase">
              Our Journey
            </span>

            <h2 className="text-4xl text-gray-900 font-bold mt-4 mb-6">
              From a Home Kitchen
              to Your Doorstep
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5">
              At Anugra Food Products, every product tells a story —
              a story of coastal roots, family traditions, and a
              heartfelt desire to share the goodness of real,
              organic food with the world.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Founded in 2026 by Rajeswari, Anugra began with a
              simple idea: bringing authentic homemade flavours to
              families, students, and professionals everywhere.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}