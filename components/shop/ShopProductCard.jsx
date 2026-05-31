export default function ShopProductCard({ product }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      {/* Product Image */}
      <div className="h-72 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Product Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {product.tamilName}
        </p>

        <p className="text-gray-600 mt-4 line-clamp-3">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-6">

          <div>
            <p className="text-2xl font-bold text-primary">
              ₹{product.price}
            </p>

            <p className="text-sm text-gray-500">
              {product.weight}
            </p>
          </div>

          <button className="bg-cta text-white px-5 py-3 rounded-xl hover:opacity-90 transition">
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}