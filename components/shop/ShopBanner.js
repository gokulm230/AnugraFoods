export default function ShopBanner() {
  return (
    <section className="mt-6">
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            h-[320px]
          "
        >

          <img
            src="/shophero.jpg"
            alt="Anugra Products"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 h-full flex items-center">

            <div className="px-10 max-w-2xl text-white">


              <h1 className="mt-5 text-5xl font-bold">
                Discover Authentic
                Tamil Superfoods
              </h1>

              <p className="mt-4 text-lg text-white/90">
                Explore seafood condiments,
                health mixes, soups, malts
                and traditional wellness foods.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}