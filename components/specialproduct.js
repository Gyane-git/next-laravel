"use client";
import { useRouter } from "next/navigation";

export default function ProductShowcase() {
  const router = useRouter();

  // Hardcoded Products
  const specials = [
    {
      id: 1,
      product_name: "Special Shoe",
      product_code: "SP001",
      brand: "Nike",
      actual_price: 5000,
      sell_price: 3500,
      image_url: "/shoe.jpg",
    },
    {
      id: 2,
      product_name: "Special Watch",
      product_code: "SP002",
      brand: "Fossil",
      actual_price: 8000,
      sell_price: 6000,
      image_url: "/smartwatch.jpg",
    },
    {
      id: 3,
      product_name: "Special Bag",
      product_code: "SP003",
      brand: "Guess",
      actual_price: 4000,
      sell_price: 2800,
      image_url: "/chasma.jpg",
    },
  ];

  const weeklies = [
    {
      id: 4,
      product_name: "Weekly T-Shirt",
      product_code: "WK001",
      brand: "Zara",
      actual_price: 2000,
      sell_price: 1500,
      image_url: "/ipad.jpg",
    },
    {
      id: 5,
      product_name: "Weekly Jeans",
      product_code: "WK002",
      brand: "Levi's",
      actual_price: 3500,
      sell_price: 2800,
      image_url: "/belt.jpg",
    },
    {
      id: 6,
      product_name: "Weekly Shoes",
      product_code: "WK003",
      brand: "Adidas",
      actual_price: 4500,
      sell_price: 3600,
      image_url: "/chair.jpg",
    },
  ];

  const flashes = [
    {
      id: 7,
      product_name: "Flash Headphones",
      product_code: "FL001",
      brand: "Sony",
      actual_price: 7000,
      sell_price: 4900,
      image_url: "/dresss.jpg",
    },
    {
      id: 8,
      product_name: "Flash Laptop Bag",
      product_code: "FL002",
      brand: "Dell",
      actual_price: 3000,
      sell_price: 2100,
      image_url: "/laptop.jpg",
    },
    {
      id: 9,
      product_name: "Flash Smartwatch",
      product_code: "FL003",
      brand: "Apple",
      actual_price: 15000,
      sell_price: 12000,
      image_url: "headphones.jpg",
    },
  ];

  const ProductCard = (product) => (
    <div
      key={product.id}
      onClick={() => router.push(`/dashboard/${product.product_code}`)}
      className="bg-gray-50 rounded-lg shadow-md cursor-pointer hover:shadow-2xl p-3 flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
    >
      <img
        src={product.image_url}
        alt={product.product_name}
        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
      />
      <div className="flex-1">
        <p className="text-xs text-gray-500">{product.brand}</p>
        <h3 className="text-xs sm:text-sm font-medium">
          {product.product_name}
        </h3>
        <div className="flex items-center space-x-2">
          {parseFloat(product.actual_price) > parseFloat(product.sell_price) && (
            <span className="text-sm text-gray-500 line-through">
              {Number(product.actual_price).toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          )}
          <span className="text-red-600 font-bold text-xs sm:text-sm">
            {Number(product.sell_price).toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Special Products */}
          <div>
            <h2 className="text-lg font-bold text-gray-600 mb-3 uppercase">
              Special Products
            </h2>
            <div className="space-y-3">{specials.map(ProductCard)}</div>
          </div>

          {/* Weekly Products */}
          <div>
            <h2 className="text-lg font-bold text-gray-600 mb-3 uppercase">
              Top Rating Products
            </h2>
            <div className="space-y-3">{weeklies.map(ProductCard)}</div>
          </div>

          {/* Flash Products */}
          <div>
            <h2 className="text-lg font-bold text-gray-600 mb-3 uppercase">
              Flash Products
            </h2>
            <div className="space-y-3">{flashes.map(ProductCard)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
