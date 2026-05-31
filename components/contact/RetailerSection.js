export default function RetailerSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="text-[#1B6CA8] font-semibold uppercase">
          Bulk Orders
        </span>

        <h2 className="text-4xl text-gray-900 font-bold mt-4">
          Are You A Retailer?
        </h2>

        <p className="text-gray-600 mt-6 leading-relaxed">
          We partner with retailers, grocery stores,
          and distributors across Tamil Nadu and
          neighbouring states.
        </p>

        <p className="text-gray-600 mt-4">
          Contact us to discuss pricing,
          minimum order quantities, and
          partnership opportunities.
        </p>

        <a
          href="https://wa.me/918667591396"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-[#1B6CA8] text-white px-8 py-4 rounded-xl"
        >
          Enquire Now
        </a>

      </div>
    </section>
  );
}