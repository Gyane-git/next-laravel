"use client";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Smart LED Bulb",
    brand: "Philips",
    price: "Rs. 1,200.00",
    oldPrice: "Rs. 1,500.00",
    image: "/images4.jpg",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    brand: "Sony",
    price: "Rs. 6,500.00",
    oldPrice: "Rs. 7,500.00",
    image: "/images3.jpg",
  },
  {
    id: 3,
    name: "Smart Watch",
    brand: "Apple",
    price: "Rs. 45,000.00",
    oldPrice: "Rs. 48,000.00",
    image: "/images.jpg",
  },
  {
    id: 4,
    name: "Portable Bluetooth Speaker",
    brand: "JBL",
    price: "Rs. 8,000.00",
    oldPrice: "Rs. 9,500.00",
    image: "/image2.jpg",
  },
  {
    id: 5,
    name: "Laptop Cooling Pad",
    brand: "Cooler Master",
    price: "Rs. 2,100.00",
    oldPrice: "Rs. 2,500.00",
    image: "/vercel.png",
  },
    {
    id: 6,
    name: "Wireless Headphones",
    brand: "Sony",
    price: "Rs. 6,500.00",
    oldPrice: "Rs. 7,500.00",
    image: "/images3.jpg",
  },
    {
    id: 7,
    name: "Wireless Headphones",
    brand: "Sony",
    price: "Rs. 6,500.00",
    oldPrice: "Rs. 7,500.00",
    image: "/images3.jpg",
  },
    {
    id: 8,
    name: "Wireless Headphones",
    brand: "Sony",
    price: "Rs. 6,500.00",
    oldPrice: "Rs. 7,500.00",
    image: "/images3.jpg",
  },
    {
    id: 9,
    name: "Wireless Headphones",
    brand: "Sony",
    price: "Rs. 6,500.00",
    oldPrice: "Rs. 7,500.00",
    image: "/images3.jpg",
  },
];

export default function LatestProducts() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-9xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">
          LATEST PRODUCTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col hover:shadow-lg transition"
            >
              <div className="relative w-full h-40">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain rounded-md"
                />
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  SALE
                </span>
              </div>

              <h3 className="mt-4 text-sm font-medium text-gray-700 line-clamp-2">
                {product.name}
              </h3>
              <p className="text-xs text-gray-500">{product.brand}</p>

              <div className="mt-2 flex flex-col">
                <span className="text-red-600 font-bold">{product.price}</span>
                <span className="text-gray-400 text-sm line-through">
                  {product.oldPrice}
                </span>
              </div>

              <button className="mt-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 text-sm transition">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
